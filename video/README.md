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

**The published files have Ayoub's sound track** (added in an editor, commit
`ff6d145`). Never copy a silent render over them. To publish a new render,
re-render the picture to the audio's length and copy the audio across
unchanged with `mux.mjs` (no re-encode of either track):

```
node mux.mjs info ../public/videos/ovioplus-sabato-sera-it.mp4   # audio length
node render.mjs it 44.25            # picture only -> out/video-only-it.mp4
node mux.mjs out/video-only-it.mp4 ../public/videos/ovioplus-sabato-sera-it.mp4 out/final-it.mp4
```

Keep a copy of the sound source outside the repo: the editor export Ayoub
uploaded was 1024x576 (IT) and 640x368 at 20 fps (EN), which looked soft on
desktop, so the published files now pair that audio with a 1920x1080 render.
