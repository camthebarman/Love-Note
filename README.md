# Love Note

**Does Cory Still Love Me?** — a tiny browser toy, hosted on GitHub Pages.

🔗 **Live:** https://camthebarman.github.io/Love-Note/

## How it works

1. Click **Does Cory Still Love Me?** and the answer pops up in big, bright letters.
2. The button becomes **Are you sure?** — click it for a brand new way of saying yes.
3. It keeps escalating: *super sure*, *super duper sure*, *super duper mega sure*, all the
   way to *Are you the surest human who has ever been sure?* — 12 escalations and 13
   different yeses, each with its own color scheme, a rising certainty meter, and a shower
   of hearts.
4. After the last one, certainty maxes out and you can start over.

## Hosting

Pages serves this repo's `main` branch from the root, so **pushing to `main` publishes the
site**. There is no build step and no deploy workflow — the whole page is one static file.

`.nojekyll` tells Pages to serve the files as-is instead of running them through Jekyll.

## Running it locally

Open `index.html` in a browser. That is the entire setup — no server, no install, no
dependencies.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The whole app: markup, styles, and script in one self-contained file |
| `preview.png` | Link-preview image used by the Open Graph / Twitter card tags |
| `.nojekyll` | Tells Pages to skip Jekyll processing |

The display fonts come from Google Fonts; if they are unavailable the page falls back to
system fonts and still works.
