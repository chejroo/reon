# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Reon — a lightweight credibility/inquiry site for a planned B2B industrial-sourcing business (sourcing automation/sensing components, e.g. via Telemecanique Sensors, from foreign suppliers and reselling across Europe at a margin). Full business context and phased roadmap: [PRD.md](PRD.md). Raw source notes (Polish, contains margin/sourcing strategy — intentionally gitignored, not pushed to this public repo): [notes.md](notes.md).

Current phase: a single static page modeled on cptrade.pl's `/produkty/` structure — a manufacturer-led catalog (not a flat product list), alphabetically grouped, with search. Clicking a manufacturer opens a shared quote-inquiry modal (B2B quote-request model, not e-commerce — no cart/checkout, no product detail subpages).

## Architecture

Three static files, no build step, no framework, no external CDN/font/asset requests: [index.html](index.html) (markup only), [style.css](style.css) (all styles), [script.js](script.js) (all data + behavior). This is intentional (see PRD §7) — keep it that way. Deployed as-is to GitHub Pages from the repo root; `index.html` links `style.css` and loads `script.js` via a plain `<script src>` at the end of `<body>` (no `defer`/`type=module` needed since it runs after the DOM it queries already exists).

- **`i18n` object** (`script.js`): flat key → `{pl, en}` string map. Static markup uses `data-i18n="key"` (innerHTML) or `data-i18n-placeholder="key"` attributes; `applyLang()` walks the DOM and re-applies these on toggle.
- **`manufacturers` array** (`script.js`): each entry `{ name, category: {pl,en}, summary: {pl,en}, lines: [...], priorityTag?: {pl,en} }` (see PRD §6 for the content model). `name` and `lines` are plain strings (brand/product-line names aren't translated); `category`, `summary`, and the optional `priorityTag` are bilingual. `renderManufacturers(filterText)` groups by first letter of `name` into `#mfr-list` (letter heading + flat clickable rows — cptrade.pl list style, not a card grid), applying the live search filter across name/category/summary/lines. `renderAzBar()` builds the A–Z jump bar, disabling letters with no entries. Adding a real manufacturer later is a data-only edit to this array — do not add new markup for catalog entries.
- **Modal/inquiry flow**: `openModal(mfr)` populates the manufacturer name/summary/product-line tags as read-only context, then shows the form; `closeModal()` toggles `#modal-overlay`; `submitInquiry(evt)` is UI-only — it prevents default, swaps `#modal-form-wrap` for `#form-success`, and does **not** send anything anywhere. Wiring real submission is an explicit future phase (PRD §9), not implied by current code.
- Default language is Polish (`currentLang = "pl"`, `<html lang="pl">`); `#lang-toggle` is a single button whose label alternates "PL / EN" / "EN / PL" via `toggleLang()`.
- Mobile nav (`#main-nav`) is a slide-out panel toggled by `#nav-toggle-btn` / `toggleNav()`, styled in `style.css`'s `@media (max-width: 860px)` block.

## Adding content

- New manufacturer: append an object to `manufacturers` (in `script.js`) with `name` (plain string) plus `category`, `summary` in both `pl` and `en`, and a `lines` array (plain strings). Add `priorityTag: {pl, en}` only for brands flagged as a sourcing priority.
- New static UI text: add the string under both `pl` and `en` in `i18n` (`script.js`), then reference it via `data-i18n="your.key"` (or `data-i18n-placeholder` for input placeholders) in `index.html`.
- Do not introduce a build tool, framework, bundler, or external request (font, script, image CDN) — the plain-files/offline-safe/CSP-safe constraint is a deliberate scope decision, not an oversight. `index.html`/`style.css`/`script.js` stay three flat files.
- Never commit `notes.md` — it's gitignored on purpose because this repo is public and the notes contain business-sensitive margin/sourcing strategy.

## Testing

No test suite, linter, or build command exists. Verify changes by opening `index.html` directly in a browser (no server required) and checking both language states, the A–Z jump bar, the search filter, the mobile nav slide-out, and the manufacturer-click → modal → submit flow.
