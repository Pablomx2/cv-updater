# CV Updater

A single-file app for keeping a film-credits CV on one page.

**Open `cv-updater.html` in a browser.** No install, no server, no internet needed.

The app ships **empty** — no CV and no logo are stored in it. Use **Import HTML…** to load
one (an export from this app, or the original bundled artifact download); the contact line,
sections, every credit and the logo all come across. Or press **Start a blank CV** and type.

`index.html` is the project page — a short write-up with a link that launches the app.
It doubles as the GitHub Pages landing page.

## What it does

**Edit** — name, company, role, contact line, sections and credits, all live.
New credits are added to the **top** of their section, where the newest job belongs.
Drag the ⠿ handle to reorder a credit, including across sections.

**Override the automatics** — hover the sheet and drag either column divider to set the
widths by hand, or move the text slider in the preview bar to set the size. Each switches
the matching checkbox off; tick it again to hand control back.

**Logo** — there is no logo to start with. It arrives one of two ways: importing a CV
lifts the lockup image out of that file, or **Upload…** takes a PNG, JPG or SVG from your
machine. It prints 15px tall at the top right, so keep the file small (512KB ceiling —
a wide transparent PNG or an SVG is ideal). **Remove** takes it off again, and exports
simply omit the image when there is no logo.

**Auto-fit to one page** — binary-searches the largest credit text size that still
fits 8.5×11in, never shrinking the header. Capped at the original design size (9.2px),
so it never blows the type up to fill space.

**Auto columns** — measures every project title and production-company string and picks
the three column widths that produce the fewest wrapped lines, then re-checks them at the
fitted text size. Wrapped lines are the main hidden cost on a dense sheet: each one eats a
credit's worth of space. Or drag the dividers and set the widths yourself.

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
| **Clear** | Empties the editor and starts over. Export first if you want to keep what is there. |

Edits autosave to the browser's local storage, so closing the tab does not lose work.
That storage is per-browser and per-machine — use **Export HTML** for anything you want
to keep or send.

## Rebuilding

`cv-updater.html` is generated. To change the app itself, edit `src/app.template.html`
and run:

```bash
node src/build.js
```

`src/seed.json` is the state the app starts in — deliberately empty, so neither a CV nor
a logo lives in this repo.
