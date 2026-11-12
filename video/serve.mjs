import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript', '.png': 'image/png', '.css': 'text/css' }
export function serve(root, port = 4791) {
  const server = http.createServer((req, res) => {
    const u = decodeURIComponent(new URL(req.url, 'http://x').pathname)
    const f = path.join(root, u === '/' ? 'index.html' : u)
    if (!f.startsWith(root) || !fs.existsSync(f)) { res.writeHead(404); return res.end() }
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(f)] ?? 'application/octet-stream' })
    fs.createReadStream(f).pipe(res)
  })
  return new Promise((r) => server.listen(port, '127.0.0.1', () => r(server)))
}
