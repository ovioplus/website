import fs from 'node:fs'
import puppeteer from 'puppeteer-core'
import { serve } from './serve.mjs'
const f = process.argv[2]
const srv = await serve(process.cwd())
const b = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true, args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required'] })
const p = await b.newPage()
await p.goto('http://127.0.0.1:4791/blank.html')
const timeout = (ms) => new Promise((_, j) => setTimeout(() => j(new Error('timeout')), ms))
for (const t of [4, 16.5, 27.5, 34.2, 41]) {
  const url = await Promise.race([timeout(20000), p.evaluate(async (src, t) => {
    const v = document.querySelector('video') ?? Object.assign(document.body.appendChild(document.createElement('video')), { src: URL.createObjectURL(await (await fetch(src)).blob()), muted: true })
    if (v.readyState < 2) await new Promise((r) => (v.onloadeddata = r))
    v.pause(); v.currentTime = t; await new Promise((r) => (v.onseeked = r))
    await v.play(); await new Promise((r) => setTimeout(r, 400)); v.pause()
    const c = document.createElement('canvas'); c.width = 960; c.height = 540
    c.getContext('2d').drawImage(v, 0, 0, 960, 540)
    return `${v.currentTime.toFixed(2)}|` + c.toDataURL('image/jpeg', 0.7)
  }, f, t)])
  const [at, data] = url.split('|')
  fs.writeFileSync(`stills/mp4-${t}.jpg`, Buffer.from(data.split(',')[1], 'base64'))
  console.log('requested', t, 'got', at)
}
await b.close(); srv.close()
