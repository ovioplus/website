import fs from 'node:fs'
import puppeteer from 'puppeteer-core'
import { serve } from './serve.mjs'
const lang = process.argv[2] ?? 'it'
const FPS = 30, W = 1920, H = 1080
const srv = await serve(process.cwd())
const b = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true, args: ['--no-sandbox'], protocolTimeout: 600000 })
const anim = await b.newPage()
await anim.setViewport({ width: W, height: H, deviceScaleFactor: 1 })
anim.on('pageerror', (e) => console.error('PAGE ERROR', e.message))
await anim.goto(`http://127.0.0.1:4791/index.html?lang=${lang}`, { waitUntil: 'networkidle0' })
await anim.evaluate(async () => { await document.fonts.ready })
const enc = await b.newPage()
await enc.goto('http://127.0.0.1:4791/encoder.html', { waitUntil: 'load' })
await enc.evaluate((w, h, f) => window.start(w, h, f, 4_500_000), W, H, FPS)
const duration = await anim.evaluate(() => window.DURATION)
const total = Math.round(duration * FPS)
const t0 = Date.now()
for (let i = 0; i < total; i++) {
  await anim.evaluate((t) => window.render(t), i / FPS)
  const shot = await anim.screenshot({ type: 'png', encoding: 'base64', optimizeForSpeed: true })
  await enc.evaluate((s) => window.addFrame(s), shot)
  if (i === Math.round(5 * FPS)) fs.writeFileSync(`out/poster-${lang}.png`, Buffer.from(shot, 'base64'))
  if (i % 150 === 0) console.log(`${lang} frame ${i}/${total} ${((Date.now() - t0) / 1000).toFixed(0)}s`)
}
const len = await enc.evaluate(() => window.finish())
const parts = []
for (let i = 0; i < len; i += 4 << 20) parts.push(Buffer.from(await enc.evaluate((i) => window.chunk(i, 4 << 20), i), 'base64'))
fs.writeFileSync(`out/ovioplus-sabato-sera-${lang}.mp4`, Buffer.concat(parts))
console.log(`${lang} done: ${(len / 1e6).toFixed(1)} MB in ${((Date.now() - t0) / 1000).toFixed(0)}s`)
await b.close(); srv.close()
