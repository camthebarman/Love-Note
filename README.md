# Love Note

**Does Cory Still Love Me?** — a tiny, no-build browser toy.

🔗 **Live site:** https://camthebarman.github.io/Love-Note/ *(once Pages is switched on — see below)*

## How it works

1. Click **Does Cory Still Love Me?** and the answer pops up in big, bright letters.
2. The button becomes **Are you sure?** — click it for a brand new way of saying yes.
3. It keeps escalating: *super sure*, *super duper sure*, *super duper mega sure*, all the
   way to *Are you the surest human who has ever been sure?* — 12 escalations, 13 different
   yeses, each with its own color scheme and a shower of hearts.
4. After the last one, certainty maxes out and you can start over.

## Publishing to GitHub Pages

The deploy is automated by `.github/workflows/deploy-pages.yml`, which publishes the repo
root on every push to `main`. It needs one **one-time manual setup step**, because a
workflow cannot enable Pages on its own:

> **Settings → Pages → Build and deployment → Source: _GitHub Actions_**

After that, merge this work into `main` and the workflow publishes automatically. You can
also trigger it by hand from the **Actions** tab (**Deploy to GitHub Pages → Run workflow**).

<details>
<summary>Alternative: no workflow at all</summary>

Because this is static files at the repo root, you can skip Actions entirely and set
**Settings → Pages → Source: _Deploy from a branch_ → `main` / `(root)`**. The `.nojekyll`
file keeps Jekyll from touching the files. The workflow just gives you a deploy log and a
deployment history instead.
</details>

## Running it locally

Open `index.html` directly in a browser — no server, no install, no dependencies.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Markup and social/share metadata |
| `styles.css` | Colors, fonts, animations |
| `script.js` | The escalating question ladder and answers |
| `preview.png` | Link-preview image for shares |
| `.nojekyll` | Tells Pages to serve files as-is |
| `.github/workflows/deploy-pages.yml` | Builds and deploys the site |

Web fonts load from Google Fonts when online; offline it falls back to system fonts and
still looks fine.
