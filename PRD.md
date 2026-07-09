# PRD — Reon

## 1. Background

Source notes: [notes.md](notes.md).

Reon is a planned B2B electronics/industrial-components wholesale business. Core idea: source parts (e.g. Telemecanique Sensors and similar industrial automation components) at a discount from Italian suppliers and resell across Europe at a margin. Reference sites for tone/structure: [famaga.com](https://famaga.com/) (international industrial distributor, EN) and [cptrade.pl](https://cptrade.pl/) (Polish industrial distributor, quote-request product pages like [cptrade.pl/produkty/a-corporationgenie](https://cptrade.pl/produkty/a-corporationgenie/)).

Later-stage ideas from notes (not in scope for this phase): wholesaler API integration (RS Online, Digikey, cptrade, automa.net) vs. scraping if APIs are too expensive; price/availability comparator; full automation of quote generation; SAP-style automated offers.

## 2. Goal (this phase)

Ship a single static page that presents Reon as a company and lists sample products. Clicking a product opens a contact/inquiry form (like cptrade.pl's per-product quote request) instead of a cart/checkout — this is a B2B inquiry model, not e-commerce.

## 3. Scope

**In scope:**
- Single self-contained `index.html` (inline CSS + JS, no build step, no external asset requests) deployable as-is to GitHub Pages.
- Company intro / hero section (who Reon is, what it does).
- Product catalog grid using placeholder/sample products representative of the target assortment (industrial sensors, PLC/automation components, industrial networking).
- Click on a product → modal with a contact/inquiry form (name, email, phone, company, message, product name pre-filled).
- Bilingual content: Polish and English, switchable via a toggle in the UI.
- Responsive layout (desktop + mobile).

**Out of scope for this phase (explicitly deferred):**
- Working form submission / backend (form is UI-only for now; no email service or endpoint wired up).
- Real product data, pricing, or stock levels.
- Wholesaler API or scraper integration.
- Price/availability comparator.
- Cart, checkout, accounts, payments.
- CMS or multi-page routing (everything lives in one HTML file).

## 4. Users

- **End customers** (procurement/engineers at companies across Europe) browsing available product categories and requesting a quote.
- **Reon staff** (informal, phase 1) — no admin UI; inquiries are only captured client-side for now.

## 5. Content structure

1. Header — logo/name (Reon), nav (Products, About, Contact), language toggle (PL/EN).
2. Hero — short value proposition (European industrial component wholesaler/reseller).
3. Product grid — cards (name, category tag, short description, "Request a quote" button). Sample categories: sensors (Telemecanique-style), PLC & automation modules, industrial networking (Profibus/fieldbus).
4. Product click → modal overlay with inquiry form, pre-filled with the clicked product's name.
5. About/footer — short company blurb, contact email placeholder, copyright.

## 6. Tech approach

- Plain HTML/CSS/JS in one file — no framework, no bundler, no external CDN dependencies (keeps it portable and CSP/offline safe).
- Product data as a small inline JS array so adding real products later is a data-only edit.
- Language toggle implemented via `data-lang` attributes + JS show/hide (no page reload).
- Hosting: GitHub Pages, repo [github.com/chejroo/reon](https://github.com/chejroo/reon.git), serving `index.html` from the repo root (or `/docs`, TBD when Pages is enabled).

## 7. Future phases (not now)

- Wire the contact form to a real submission target (email service or backend).
- Replace placeholder catalog with real product data, sourced via API or scraper per the API-cost research noted in `notes.md`.
- Availability/price comparator across suppliers.
- Possible move to a templated/multi-page or backend-driven site once catalog size grows.

## 8. Success criteria (this phase)

- Page loads as a single file with no external dependencies.
- Product grid and per-product inquiry modal work on desktop and mobile.
- Content is complete and correct in both Polish and English.
- Deployed and reachable via GitHub Pages.
