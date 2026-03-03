# Nabeela Tunis Personal Website

A responsive React application built with Vite, TypeScript and Tailwind CSS. The site features several pages (Home, Biography, Impact, Tourism, Foundation, Contact) and shared components such as a navbar, footer and scroll‑to‑top helper. It’s designed to be easy to run locally and deploy to any static host.

## 🔧 Technologies

- **Framework:** React 18 (TSX files)
- **Bundler:** Vite
- **Styling:** Tailwind CSS (configured in `tailwind.config.cjs`)
- **TypeScript:** Types defined in `types.ts`
- **Pages:** Located in `src/pages` (e.g. `Home.tsx`, `Contact.tsx`)
- **Components:** Reusable UI pieces in `src/components` (Navbar, Footer, etc.)

## 🚀 Getting Started

### Prerequisites

- Node.js (14+)
- npm or yarn

### Run Locally

1. Clone the repository and change into the directory:
   ```bash
   git clone <repo‑url> nabeelatunis
   cd nabeelatunis
   ```
2. Install dependencies:
   ```bash
   npm install
   # or yarn install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:5173` in your browser (port may vary).

### Build for Production

```bash
npm run build
# output goes to the `dist` folder
```

### Preview the Production Build

```bash
npm run preview
```

### Environment Variables

Currently this project does not require any special environment variables. If you add API keys or other secrets in the future, create a `.env` or `.env.local` file and reference them in `vite.config.ts` or your code.

## 🗂 Project Structure

```
src/
├─ components/       # shared UI components
├─ pages/            # individual route pages
├─ App.tsx           # app entry point
├─ index.tsx         # ReactDOM render
├─ types.ts          # shared TypeScript types
├─ constants.tsx     # reusable constants
└─ ...
```

Static assets live under `public/`.

## 📦 Scripts

| Command           | Description                      |
| ----------------- | -------------------------------- |
| `npm run dev`     | Start dev server with hot reload |
| `npm run build`   | Create production build          |
| `npm run preview` | Preview production build locally |

## 📄 Deploying

This is a standard static site. You can deploy the contents of the `dist/` folder to Vercel, Netlify, GitHub Pages, or any static file host. For example, with GitHub Pages:

```bash
npm run build
npx gh-pages -d dist
```

## 🤝 Contributing

Feel free to open issues or pull requests. Add new pages under `src/pages` and update routing in `App.tsx` if needed.

---

_Generated on March 3 2026_
