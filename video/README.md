# "Sabato sera" homepage video

The 43-second video on the homepage (`public/videos/ovioplus-sabato-sera-{it,en}.mp4`)
is this HTML animation, rendered frame by frame. Nothing here is part of the site
build; it has its own `package.json` so the site's dependencies stay untouched.

- `index.html`: the whole animation. `window.render(t)` draws the frame at `t`
  seconds; copy for both languages is in the `S` object at the top (`?lang=it|en`).
- `stills.mjs`: snapshots chosen moments to `stills/` to check a change quickly.
- `render.mjs`: screenshots every frame at 30 fps in your installed Google Chrome
  and encodes H.264 with Chrome's own WebCodecs encoder (`encoder.html` +
  `mp4-muxer`), so no ffmpeg is needed. About 90 s per language.
- `check.mjs`: plays the result back and saves frames, to confirm it decodes.

```
cd video && npm install
node stills.mjs it 5 16.5 27.5 41
node render.mjs it && node render.mjs en
```

**Do not copy the render straight over `public/videos/`.** The published files
have a sound track Ayoub added after rendering (commit `ff6d145`); the render
here is silent. A re-render needs the audio added again before it replaces the
published files. (This was learned the hard way: website PR #13 overwrote the
sound versions with a silent render, restored in the next PR.)

The screens in the video mirror the real app (app.ovioplus.ai). Keep them true:
if a feature shown here changes in the app, change the video. The WhatsApp
booking is shown being entered by staff on purpose; there is no WhatsApp
integration.
