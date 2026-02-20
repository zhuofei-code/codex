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
