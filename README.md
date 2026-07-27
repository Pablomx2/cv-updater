# CV Updater

A single-file app for keeping the sound-mixer CV on one page.

**Open `cv-updater.html` in a browser.** No install, no server, no internet needed —
everything (including the Still Speeding logo) is baked into that one file.

`index.html` is the project page — a short write-up with a link that launches the app.
It doubles as the GitHub Pages landing page if this repo is ever published.

## What it does

**Edit** — name, company, role, contact line, sections and credits, all live.
Drag the ⠿ handle to reorder a credit, including across sections.

**Auto-fit to one page** — binary-searches the largest credit text size that still
fits 8.5×11in, never shrinking the header. Capped at the original design size (9.2px),
so it never blows the type up to fill space.

**Auto columns** — measures every project title and production-company string and picks
the three column widths that produce the fewest wrapped lines, then re-checks them at the
fitted text size. Wrapped lines are the main hidden cost on a dense sheet: each one eats a
credit's worth of space.

**Advice** — a readability grade plus specifics:
- how many credits to cut to get back to comfortable text size
- which credits are weakest, ranked (non-mixer positions, entries that wrap to two lines,
  entries with no producer/director, bottom-of-a-long-section, repeated clients)
- when the list is simply too long for one page
- when there is room to *add* credits

Nothing is deleted automatically. The **●** icon hides a credit so you can test a shorter
list without losing it; **★** pins a credit so the advisor never suggests cutting it.

## Buttons

| | |
|---|---|
| **Import HTML…** | Loads a CV back in — a file exported here, or the original bundled artifact download. |
| **Export HTML** | Writes a clean standalone CV with the fitted column widths and text size baked in. Still hand-editable, still re-importable. |
| **Print / PDF** | Prints just the page. In the print dialog choose **Save as PDF**, paper **US Letter**, margins **None**, and turn **off** headers/footers. |
| **Reset** | Back to the CV as of 26 Jul 2026. |

Edits autosave to the browser's local storage, so closing the tab does not lose work.
That storage is per-browser — use **Export HTML** for anything you want to keep or send.

## Rebuilding

`cv-updater.html` is generated. To change the app itself, edit `src/app.template.html`
and run:

```bash
node src/build.js
```

`src/seed.json` is the CV that **Reset** restores; `src/logo.b64` is the logo data URI
(`assets/logo.png` is the same image, decoded, for the project page).

## A note on what is in this repo

`src/seed.json` and `cv-updater.html` both contain the real CV — including the phone
number and email on the contact line. That is fine in a private repo. Before making it
public, either accept that those are published, or replace the contact entries in
`src/seed.json` with placeholders and rebuild; the real CV can then be loaded with
**Import HTML** instead of shipping inside the app.
