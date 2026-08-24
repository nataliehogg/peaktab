# Beautiful new tabs with pomodoro-style focus mode

To install, go to `about:debugging` in Firefox → *This Firefox* → *Load Temporary Add-on* → select `manifest.json`.

## Setup

Photos come from Unsplash, which needs an access key — [get one
free](https://unsplash.com/developers). Then:

```sh
cp config.example.js config.js   # config.js is gitignored
```

and paste your key into it. Without a key everything still works; the
background is just a gradient rather than a photo.

## Favourites

Press the heart under the photo credit to keep a photo, and the grid button to
open your favourites. Picking one from the gallery makes it the background for
the rest of the day; otherwise every day starts on something new.

Favourites also train a small preference model — the search term, tags,
photographer and colour of the photos you keep gain weight, quickly skipped
ones lose a little, and new photos are chosen from a shortlist ranked by it.
One photo in about seven is still picked at random so it keeps finding
unfamiliar things, and weights fade over time as your taste changes. The model
is a few kilobytes in `localStorage` and never leaves the browser.

<img width="1920" height="1200" alt="Screenshot from 2026-06-07 19-07-49" src="https://github.com/user-attachments/assets/07d97a8e-116a-4ca2-acf6-cd6eb7ab4eff" />

<img width="1920" height="1200" alt="Screenshot from 2026-06-07 19-08-53" src="https://github.com/user-attachments/assets/e80e12eb-c928-4555-a413-08dde29f5ff2" />

