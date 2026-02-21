# Zhuofei Lu — Personal Website (GitHub Pages)

This repository contains a minimal black-and-white personal homepage for GitHub Pages.

## Run locally

```bash
python3 -m http.server 8000
```

Then open: <http://localhost:8000>

## Deploy to GitHub Pages

1. Push this repo to GitHub.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, choose:
   - **Source**: Deploy from a branch
   - **Branch**: `main`
   - **Folder**: `/ (root)`
4. Save and wait a few minutes.

## Troubleshooting: Pages not publishing

If the site cannot be published, check these common causes:

1. `index.html` must exist in the selected Pages folder (this repo keeps it in root).
2. Your latest commit must be on the branch selected in **Settings → Pages**.
3. If you are working on another branch (for example `work`), merge it into `main` before publishing.
4. In **Settings → Pages**, confirm **Branch = main** and **Folder = /(root)**.
5. Wait 2–5 minutes, then refresh the Pages status and open the generated URL.

Useful commands:

```bash
git checkout main
git merge work
git push origin main
```

## If you hit merge conflicts after pull

If `index.html` shows markers like `<<<<<<<`, `=======`, `>>>>>>>`, keep the **English minimal** version and remove all conflict markers.

Quick fix:

```bash
# keep the current branch version of index.html
 git checkout --ours index.html
 git add index.html
 git commit -m "fix: resolve merge conflict in index.html"
```

If you want the incoming branch version instead, use `--theirs`.

## PR workflow (recommended)

If direct push to `main` is blocked, open a Pull Request from your working branch to `main`, then merge it on GitHub.

Typical steps:

```bash
git push -u origin work
```

Then in GitHub UI:

1. Open **Compare & pull request**.
2. Base: `main`, Compare: `work`.
3. Create PR and merge.
4. Re-run GitHub Pages deployment if needed.
