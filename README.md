# Ajay Rathod — Portfolio

Static site: `index.html`, `assets/`, `resumes/`, and `screenshots/`. No install or build step.

## Preview locally

```bash
python3 -m http.server 4173
```

Open http://localhost:4173. Serve it over HTTP so the hero module script can load.

## Vercel

`vercel.json` selects the Other framework preset, skips install and build, and serves this directory. Résumé links and scripts use relative paths, so the same files work at the domain root.
