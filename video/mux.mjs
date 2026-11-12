// Combine the video track of one MP4 with the audio track of another, copying
// both bitstreams as-is (no re-encode). Usage:
//   node mux.mjs info <file>                      -> track list + durations
//   node mux.mjs <video.mp4> <audio.mp4> <out.mp4>
import fs from 'node:fs'
import MP4Box from 'mp4box'
import { Muxer, ArrayBufferTarget } from 'mp4-muxer'

function demux(file) {
  return new Promise((resolve, reject) => {
    const buf = fs.readFileSync(file)
    const ab = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength)
    ab.fileStart = 0
    const mp4 = MP4Box.createFile()
    const out = { info: null, samples: {} }
    mp4.onError = reject
    mp4.onReady = (info) => {
      out.info = info
      for (const t of info.tracks) { out.samples[t.id] = []; mp4.setExtractionOptions(t.id, null, { nbSamples: 1e9 }) }
      mp4.start()
    }
    mp4.onSamples = (id, _u, samples) => out.samples[id].push(...samples)
    mp4.appendBuffer(ab)
    mp4.flush()
    out.file = mp4
    resolve(out)
  })
}

/** The codec configuration box payload (avcC / esds DecoderSpecificInfo) as bytes. */
function description(mp4, trackId, kind) {
  const entry = mp4.getTrackById(trackId).mdia.minf.stbl.stsd.entries[0]
  if (kind === 'video') {
    const box = entry.avcC
    const s = new MP4Box.DataStream(undefined, 0, MP4Box.DataStream.BIG_ENDIAN)
    box.write(s)
    return new Uint8Array(s.buffer, 8) // drop the 8-byte box header
  }
  const dsi = entry.esds.esd.descs[0].descs[0] // DecoderConfigDescriptor -> DecoderSpecificInfo
  return new Uint8Array(dsi.data)
}

const [a, b, c] = process.argv.slice(2)
if (a === 'info') {
  const d = await demux(b)
  for (const t of d.info.tracks) console.log(t.type, t.codec, `${(t.duration / t.timescale).toFixed(3)}s`, t.video ? `${t.video.width}x${t.video.height}` : `${t.audio?.sample_rate}Hz ${t.audio?.channel_count}ch`, `${d.samples[t.id].length} samples`, `${Math.round(t.bitrate / 1000)} kbps`)
  process.exit(0)
}

const v = await demux(a), s = await demux(b)
const vt = v.info.tracks.find((t) => t.type === 'video'), at = s.info.tracks.find((t) => t.type === 'audio')
if (!vt || !at) throw new Error('need a video track in the first file and an audio track in the second')
const target = new ArrayBufferTarget()
const muxer = new Muxer({
  target,
  video: { codec: 'avc', width: vt.video.width, height: vt.video.height, frameRate: Math.round(vt.nb_samples / (vt.duration / vt.timescale)) },
  audio: { codec: 'aac', sampleRate: at.audio.sample_rate, numberOfChannels: at.audio.channel_count },
  fastStart: 'in-memory',
  firstTimestampBehavior: 'offset',
})
const vDesc = description(v.file, vt.id, 'video'), aDesc = description(s.file, at.id, 'audio')
const us = (x, ts) => Math.round((x * 1e6) / ts)
const vq = v.samples[vt.id].map((x) => ({ kind: 'v', ts: us(x.cts, x.timescale), x }))
const aq = s.samples[at.id].map((x) => ({ kind: 'a', ts: us(x.cts, x.timescale), x }))
const all = [...vq, ...aq].sort((p, q) => p.ts - q.ts || (p.kind === 'v' ? -1 : 1))
let vFirst = true, aFirst = true
for (const { kind, ts, x } of all) {
  const dur = us(x.duration, x.timescale)
  if (kind === 'v') {
    muxer.addVideoChunkRaw(new Uint8Array(x.data), x.is_sync ? 'key' : 'delta', ts, dur, vFirst ? { decoderConfig: { codec: vt.codec, codedWidth: vt.video.width, codedHeight: vt.video.height, description: vDesc } } : undefined)
    vFirst = false
  } else {
    muxer.addAudioChunkRaw(new Uint8Array(x.data), 'key', ts, dur, aFirst ? { decoderConfig: { codec: at.codec, sampleRate: at.audio.sample_rate, numberOfChannels: at.audio.channel_count, description: aDesc } } : undefined)
    aFirst = false
  }
}
muxer.finalize()
fs.writeFileSync(c, Buffer.from(target.buffer))
console.log(`wrote ${c}: ${(target.buffer.byteLength / 1e6).toFixed(1)} MB`)
