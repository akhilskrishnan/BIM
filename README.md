# BIM Dashboard

A lightweight React + TypeScript front-end scaffold for browsing BIM pipeline data. The project uses Vite for fast dev builds and React Router for navigation.

## Project structure

```
root
├─ index.html              # Entry HTML file loaded by Vite
├─ package.json            # Scripts and dependencies
├─ tsconfig*.json          # TypeScript configuration
├─ vite.config.ts          # Vite setup
└─ src
   ├─ main.tsx             # React entry point
   ├─ App.tsx              # Route configuration
   ├─ components/          # Page and UI components
   └─ styles/globals.css   # Global styling
```

## Prerequisites

- Node.js 18+ (recommended) and npm 9+.
- Network access to install dependencies from the npm registry.

## Installation

1. Install project dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```
   Vite will print a local URL (typically `http://localhost:5173`) where you can view the app.

3. Create a production build (optional):
   ```bash
   npm run build
   ```
   The optimized files will be written to the `dist/` directory.

4. Preview the production build (optional):
   ```bash
   npm run preview
   ```

## Routing

- `/dashboard` – Overview of pipeline stats.
- `/queues` – Queue health and throughput.
- `/work-item/:id` – Simple work item detail view.
- `/exceptions` – Exception list.
- `/search` – Keyword search example.
- `/analytics` – Operational metrics.
- `/audit` – Recent audit events.

Use the header navigation to move between sections.
