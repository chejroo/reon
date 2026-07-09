# PRD — Reon

## 1. Background

Source notes: [notes.md](notes.md).

Reon is a planned B2B industrial-components wholesale business. The commercial idea is to source selected automation and sensing brands competitively from foreign partners, including Italian suppliers, and resell across Europe with margin. The first public artifact is not a full storefront. It is a lightweight credibility and inquiry surface that presents selected manufacturers and encourages quote requests.

Reference direction:
- FAMAGA for the manufacturer-led catalog framing and alphabetical browsing.
- CP Trade for the Polish B2B tone and quote-request behavior instead of online checkout.

Deferred business ideas from the notes remain outside this phase: supplier APIs, scraping as fallback, automated offers, price and availability comparison, and deep catalog automation.

## 2. Goal (phase 1)

Ship a single static page that positions Reon as a Europe-focused industrial sourcing partner and presents a lightweight manufacturer catalog. Clicking any manufacturer entry opens a quote-request form. The page should feel like the front door to a B2B wholesaler, not an ecommerce store.

## 3. Scope

### In scope

- One self-contained [index.html](index.html) with inline CSS and JS, deployable directly to GitHub Pages.
- Hero and positioning copy explaining Reon's B2B sourcing model.
- Manufacturer-led catalog inspired by FAMAGA, with alphabetical grouping and lightweight filtering/search.
- Sample manufacturer entries with category, short summary, and example product lines.
- Clickable catalog entries that open a shared inquiry modal with the selected manufacturer context.
- Polish and English content with a UI toggle.
- Responsive behavior for desktop and mobile.

### Out of scope

- Real form submission or backend handling.
- Product detail subpages.
- Real-time pricing, stock, or lead time.
- API or scraper integration.
- Cart, checkout, user accounts, or payments.
- CMS, routing, or a multi-page site structure.

## 4. Users

- Procurement and engineering contacts at companies looking for industrial automation and electronics components.
- Early-stage Reon stakeholders validating the business presentation and inquiry flow.

## 5. Information architecture

1. Sticky header with brand, section navigation, and PL/EN toggle.
2. Hero section that explains Reon's sourcing-based B2B model and the lightweight launch scope.
3. Manufacturer catalog with search and alphabetical navigation.
4. Shared quote-request modal opened from any catalog entry.
5. Short "how it works" section describing inquiry flow.
6. About and contact sections reinforcing trust and business scope.
7. Minimal footer confirming the demo/static-launch nature of the page.

## 6. Product/content model

Each catalog entry should stay intentionally lightweight in phase 1:
- Manufacturer name
- Broad category
- Short positioning summary
- Example product lines or component families
- Optional business tag such as sourcing priority or application area

This model is enough to support fast scanning and contextual inquiries without pretending to have full supplier data.

## 7. Technical approach

- Plain HTML, CSS, and JavaScript in a single file.
- Inline data array for manufacturer entries so the catalog can be expanded by editing data rather than markup.
- Bilingual strings managed through a simple in-page translation object.
- Modal form remains UI-only in this phase.
- Deployment target: GitHub Pages using the repo-root [index.html](index.html).

## 8. Success criteria

- The page works as a standalone static file with no external runtime dependencies.
- Users can browse the manufacturer catalog, filter it, and open the inquiry form from any entry.
- PL and EN variants both work correctly.
- The visual direction clearly communicates B2B sourcing and quote-based sales rather than ecommerce.
- The page is ready for direct GitHub Pages deployment.

## 9. Next phases

- Connect the inquiry form to a real submission mechanism.
- Expand the catalog with real manufacturers and reference ranges.
- Introduce richer filtering, possibly combining manufacturer and product-category navigation.
- Evaluate supplier integrations or scraping once the business model is validated.
