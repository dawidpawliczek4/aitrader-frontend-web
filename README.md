# AITrader – Core Frontend

**Tech stack:** Vue 3 • TypeScript • Vite • Vuetify 3 • Pinia • Vue‑Router • Vitest ➕ Cypress

---

## ✨ Overview

AITrader is an AI‑powered trading companion. The **core‑frontend** implements the public landing page and the authenticated web application that lets users:

1. **Sign‑up / log‑in**
2. Browse a **beautiful marketing landing page** that explains the value‑prop
3. Access a **dashboard** with:

   * Real‑time bot price predictions for chosen tickers
   * Live market‑sentiment stream
   * Subscription management (Stripe)
   * Ability to upload custom CSV/Parquet datasets to **fine‑tune** the model (calls backend endpoint)

---

## 📂 Repo layout

* TODO

---

## ⚙️ Requirements

* Node
* npm (or yarn/pnpm)
* Git

---

## 🚀 Setup

```bash
# Clone
$ git clone https://github.com/dawidpawliczek4/aitrader-frontend-web.git
$ cd aitrader-frontend-web

# Install deps
$ npm install

# Copy env template & configure
$ cp .env.example .env.local  # adjust values

# Start dev server (http://localhost:5173)
$ npm run dev
```

The backend GraphQL/REST endpoints are expected at `http://localhost:8080` – override with `VITE_API_URL` in your `.env.local`.

---

## 🧪 Testing

* **Unit:** Vitest + vue‑test‑utils
* **e2e:** Cypress (Chrome & Firefox runners)
* **Coverage:** `npm vitest --coverage`

---

## 🔒 Auth & Paywall (planned)

* **Subapase** for auth (or Vue Auth 3)
* **Stripe** customer portal & webhooks

---

## 📈 Realtime sentiment (planned)

* WebSocket stream from backend → `useSentiment()` Pinia store → Vuetify `v-chart` sparkline.

---

## 🛠️ Fine‑tuning upload flow (planned)

1. User drops file in **Fine‑Tune** tab.
2. Frontend requests presigned S3 URL.
3. Upload file directly to object storage.
4. Call `/fine‑tune/start` mutation.
5. Surface training progress via SSE.

---

## 🗺 Roadmap

* [x] Initial Vite + Vue3 + TS scaffold
* [ ] Configure ESLint + Prettier + Stylelint
* [ ] Add Vuetify theme & design tokens
* [ ] Implement responsive LandingPage
* [ ] Add Auth pages & hooks
* [ ] Dashboard MVP (price predictions)
* [ ] Live sentiment charts
* [ ] Stripe paywall & billing
* [ ] Fine‑tune upload wizard
* [ ] Storybook & visual regression tests
* [ ] CI/CD (GitHub Actions → Cloudflare Pages)
