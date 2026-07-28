# SDK Project Website

A responsive research website for **SDK: Simulation-in-the-loop Dataset
Aggregation with Keypoints**, with a data-driven RoboTwin results gallery.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Task content is defined in `src/data/tasks.ts`. Selected videos and figures live in
`public/media/robotwin/<robotwin-task-name>/`.

## Deploy

Push the `main` branch and choose **GitHub Actions** under the repository's
**Settings → Pages → Build and deployment**. The included workflow builds and
publishes the site.
