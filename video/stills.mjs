import puppeteer from 'puppeteer-core'
import { serve } from './serve.mjs'
const [lang = 'it', ...times] = process.argv.slice(2)
const srv = await serve(process.cwd())
const b = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: true, args: ['--no-sandbox'] })
const p = await b.newPage()
await p.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 1 })
p.on('pageerror', (e) => console.error('PAGE ERROR', e.message))
await p.goto(`http://127.0.0.1:4791/index.html?lang=${lang}`, { waitUntil: 'networkidle0' })
await p.evaluate(async () => { await document.fonts.ready })
for (const t of times) {
  await p.evaluate((t) => window.render(t), Number(t))
  await p.screenshot({ path: `stills/${lang}-${t}.jpg`, type: 'jpeg', quality: 80 })
}
await b.close(); srv.close()
console.log('ok')
