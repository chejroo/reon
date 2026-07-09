const i18n = {
  pl: {
    "nav.catalog": "Katalog",
    "nav.how": "Jak to działa",
    "nav.about": "O firmie",
    "nav.contact": "Kontakt",
    "hero.kicker": "Partner sourcingowy w automatyce przemysłowej",
    "hero.title": "Twój partner sourcingowy w automatyce przemysłowej",
    "hero.sub": "Reon reprezentuje wybrane marki z branży automatyki, czujników i sieci przemysłowych oraz sourcuje komponenty na zamówienie w całej Europie. Bez sklepu online — każde zapytanie kończy się indywidualną wyceną.",
    "hero.cta": "Przeglądaj katalog",
    "hero.cta2": "Skontaktuj się",
    "catalog.title": "Katalog producentów",
    "catalog.sub": "Przeglądaj reprezentowane marki i wybierz tę, o którą chcesz zapytać.",
    "catalog.searchPlaceholder": "Szukaj producenta...",
    "catalog.noResults": "Brak wyników dla podanej frazy.",
    "catalog.quoteBtn": "Zapytaj o ofertę",
    "how.title": "Jak to działa",
    "how.sub": "Trzy kroki od wyszukania producenta do gotowej oferty.",
    "how.step1Title": "Przeglądaj katalog",
    "how.step1Body": "Znajdź producenta lub linię produktową, która Cię interesuje.",
    "how.step2Title": "Wyślij zapytanie",
    "how.step2Body": "Kliknij wybraną pozycję i prześlij krótkie zapytanie ofertowe.",
    "how.step3Title": "Otrzymaj wycenę",
    "how.step3Body": "Przygotujemy dla Ciebie indywidualną ofertę.",
    "about.title": "O firmie",
    "about.sub": "Kim jesteśmy i jak pracujemy",
    "about.body": "<strong>Reon</strong> to firma sourcingowa działająca na rynku europejskim, specjalizująca się w komponentach automatyki przemysłowej, czujnikach i sieciach przemysłowych. Współpracujemy z wybranymi producentami i dostawcami, aby zapewnić konkurencyjne ceny bez kompromisów jakościowych. Nie prowadzimy sprzedaży online — każde zapytanie trafia do indywidualnej wyceny przygotowanej pod potrzeby klienta.",
    "contact.title": "Kontakt",
    "contact.sub": "Masz pytanie ogólne? Napisz do nas bezpośrednio, albo wybierz producenta powyżej, aby zapytać o konkretną ofertę.",
    "contact.emailLabel": "E-mail",
    "contact.regionLabel": "Obszar działania",
    "contact.region": "Europa",
    "footer.text": "© 2026 Reon. Wersja demonstracyjna — statyczna prezentacja, faza 1.",
    "modal.title": "Zapytanie ofertowe",
    "modal.name": "Imię i nazwisko",
    "modal.company": "Firma",
    "modal.email": "E-mail",
    "modal.phone": "Telefon",
    "modal.message": "Wiadomość",
    "modal.messagePlaceholder": "Ilość, termin, dodatkowe wymagania...",
    "modal.submit": "Wyślij zapytanie",
    "modal.cancel": "Anuluj",
    "modal.note": "Formularz demonstracyjny — wysyłka nie jest jeszcze podłączona.",
    "modal.successTitle": "Dziękujemy!",
    "modal.successBody": "To wersja demonstracyjna — zapytanie nie zostało wysłane. Funkcja wysyłki zostanie dodana wkrótce."
  },
  en: {
    "nav.catalog": "Catalog",
    "nav.how": "How it works",
    "nav.about": "About",
    "nav.contact": "Contact",
    "hero.kicker": "Industrial sourcing partner",
    "hero.title": "Your sourcing partner for industrial automation",
    "hero.sub": "Reon represents selected brands in automation, sensing and industrial networking, and sources components on request across Europe. No online store — every inquiry ends in a tailored quote.",
    "hero.cta": "Browse the catalog",
    "hero.cta2": "Get in touch",
    "catalog.title": "Manufacturer catalog",
    "catalog.sub": "Browse represented brands and pick the one you'd like to ask about.",
    "catalog.searchPlaceholder": "Search manufacturers...",
    "catalog.noResults": "No results for this search.",
    "catalog.quoteBtn": "Request a quote",
    "how.title": "How it works",
    "how.sub": "Three steps from finding a manufacturer to a ready quote.",
    "how.step1Title": "Browse the catalog",
    "how.step1Body": "Find the manufacturer or product line you need.",
    "how.step2Title": "Send an inquiry",
    "how.step2Body": "Click the entry and send a short quote request.",
    "how.step3Title": "Get a quote",
    "how.step3Body": "We'll prepare a tailored offer for you.",
    "about.title": "About us",
    "about.sub": "Who we are and how we work",
    "about.body": "<strong>Reon</strong> is a sourcing company operating across the European market, specializing in industrial automation components, sensors and industrial networking. We work with selected manufacturers and suppliers to offer competitive pricing without compromising on quality. We don't run an online store — every inquiry results in a tailored quote for the customer's needs.",
    "contact.title": "Contact",
    "contact.sub": "General question? Reach out directly, or pick a manufacturer above to ask about a specific offer.",
    "contact.emailLabel": "Email",
    "contact.regionLabel": "Coverage area",
    "contact.region": "Europe",
    "footer.text": "© 2026 Reon. Demo build — static presentation, phase 1.",
    "modal.title": "Quote request",
    "modal.name": "Full name",
    "modal.company": "Company",
    "modal.email": "Email",
    "modal.phone": "Phone",
    "modal.message": "Message",
    "modal.messagePlaceholder": "Quantity, deadline, extra requirements...",
    "modal.submit": "Send request",
    "modal.cancel": "Cancel",
    "modal.note": "Demo form — submission is not wired up yet.",
    "modal.successTitle": "Thank you!",
    "modal.successBody": "This is a demo build — your request was not actually sent. Submission will be enabled soon."
  }
};

const manufacturers = [
  {
    name: "Festo",
    category: { pl: "Pneumatyka i hydraulika", en: "Pneumatics & Hydraulics" },
    summary: {
      pl: "Niemiecki producent komponentów pneumatycznych i elektrycznych do automatyki przemysłowej.",
      en: "German manufacturer of pneumatic and electric components for industrial automation."
    },
    lines: ["DSBC Cylinders", "VUVG Valve Terminals", "CPX System"]
  },
  {
    name: "Pepperl+Fuchs",
    category: { pl: "Czujniki i technika Ex", en: "Sensors & Ex Protection" },
    summary: {
      pl: "Niemiecki producent czujników przemysłowych i rozwiązań do stref zagrożonych wybuchem.",
      en: "German sensor manufacturer specializing in industrial sensing and explosion protection."
    },
    lines: ["NBB Inductive Sensors", "R100 Photoelectric", "Ex Barriers"]
  },
  {
    name: "Phoenix Contact",
    category: { pl: "Sieci przemysłowe i okablowanie", en: "Industrial Networking & Connectivity" },
    summary: {
      pl: "Niemiecki producent złączy przemysłowych, listew zaciskowych i infrastruktury sieciowej.",
      en: "German manufacturer of industrial connectivity, terminal blocks and networking hardware."
    },
    lines: ["CLIPLINE Terminal Blocks", "FL Switch", "PLCnext Controllers"]
  },
  {
    name: "Schneider Electric — Telemecanique Sensors",
    category: { pl: "Czujniki i automatyka", en: "Sensors & Automation" },
    summary: {
      pl: "Globalny producent komponentów automatyki i czujników marki Telemecanique Sensors.",
      en: "Global manufacturer of automation and sensing components under the Telemecanique Sensors brand."
    },
    lines: ["XS Series Inductive Sensors", "XUB Photoelectric Sensors", "Modicon M221 PLC"],
    priorityTag: { pl: "Priorytet sourcingowy", en: "Sourcing priority" }
  },
  {
    name: "SICK",
    category: { pl: "Czujniki i bezpieczeństwo", en: "Sensors & Safety" },
    summary: {
      pl: "Niemiecki producent czujników i rozwiązań bezpieczeństwa dla automatyki przemysłowej.",
      en: "German manufacturer of sensor and safety solutions for industrial automation."
    },
    lines: ["W4 Photoelectric Sensors", "Safety Light Curtains", "Encoders"]
  },
  {
    name: "Siemens",
    category: { pl: "Automatyka przemysłowa", en: "Industrial Automation" },
    summary: {
      pl: "Niemiecki koncern technologiczny, dostawca sterowników i produktów zasilających.",
      en: "German industrial technology group, supplier of automation controllers and power products."
    },
    lines: ["SIMATIC S7-1200", "SITOP Power Supplies", "SINAMICS Drives"]
  },
  {
    name: "Turck",
    category: { pl: "Czujniki i złącza przemysłowe", en: "Sensors & Industrial Connectivity" },
    summary: {
      pl: "Niemiecki producent czujników, złączy i technologii interfejsów przemysłowych.",
      en: "German manufacturer of sensors, connectivity and interface technology."
    },
    lines: ["BI Inductive Sensors", "Multibarrier Modules", "M12 Connectors"]
  },
  {
    name: "Weidmüller",
    category: { pl: "Okablowanie i automatyka przemysłowa", en: "Industrial Wiring & Automation" },
    summary: {
      pl: "Niemiecki producent komponentów okablowania, automatyki i sieci przemysłowych.",
      en: "German manufacturer of industrial connectivity, automation and networking components."
    },
    lines: ["Klippon Terminal Blocks", "IE-Switch", "u-remote I/O"]
  }
];

let currentLang = "pl";
const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function letterOf(mfr) {
  return mfr.name.charAt(0).toUpperCase();
}

function renderAzBar() {
  const activeLetters = new Set(manufacturers.map(letterOf));
  const bar = document.getElementById("az-bar");
  bar.innerHTML = "";
  ALPHABET.forEach(letter => {
    const el = document.createElement(activeLetters.has(letter) ? "a" : "span");
    el.className = "az-letter" + (activeLetters.has(letter) ? " active" : "");
    el.textContent = letter;
    if (activeLetters.has(letter)) {
      el.href = "#mfr-letter-" + letter;
    }
    bar.appendChild(el);
  });
}

function renderManufacturers(filterText) {
  const list = document.getElementById("mfr-list");
  list.innerHTML = "";

  const query = (filterText || "").trim().toLowerCase();
  const filtered = manufacturers.filter(m => {
    if (!query) return true;
    const haystack = [
      m.name,
      m.category[currentLang],
      m.summary[currentLang],
      ...m.lines
    ].join(" ").toLowerCase();
    return haystack.includes(query);
  });

  document.getElementById("catalog-empty").classList.toggle("show", filtered.length === 0);

  const groups = [];
  filtered.forEach(m => {
    const letter = letterOf(m);
    let group = groups.find(g => g.letter === letter);
    if (!group) {
      group = { letter, items: [] };
      groups.push(group);
    }
    group.items.push(m);
  });
  groups.sort((a, b) => a.letter.localeCompare(b.letter));

  groups.forEach(group => {
    const block = document.createElement("div");
    block.className = "mfr-group";
    block.id = "mfr-letter-" + group.letter;

    const heading = document.createElement("h3");
    heading.className = "mfr-group-letter";
    heading.textContent = group.letter;
    block.appendChild(heading);

    const ul = document.createElement("ul");
    ul.className = "mfr-rows";
    group.items.forEach(m => {
      const li = document.createElement("li");
      const tagHtml = m.priorityTag
        ? `<span class="mfr-priority-tag">${m.priorityTag[currentLang]}</span>`
        : "";
      li.innerHTML = `
        <div class="mfr-row">
          <div class="mfr-row-main">
            <div class="mfr-name-line">
              <span class="mfr-name">${m.name}</span>
              <span class="mfr-category">${m.category[currentLang]}</span>
              ${tagHtml}
            </div>
            <p class="mfr-summary">${m.summary[currentLang]}</p>
            <div class="mfr-lines">${m.lines.map(l => `<span class="tag">${l}</span>`).join("")}</div>
          </div>
          <span class="mfr-cta">${i18n[currentLang]["catalog.quoteBtn"]} →</span>
        </div>
      `;
      li.querySelector(".mfr-row").onclick = () => openModal(m);
      ul.appendChild(li);
    });
    block.appendChild(ul);
    list.appendChild(block);
  });
}

function applyLang() {
  document.documentElement.lang = currentLang;
  document.getElementById("lang-toggle").textContent =
    currentLang === "pl" ? "PL / EN" : "EN / PL";
  document.title = currentLang === "pl"
    ? "Reon — Partner sourcingowy w automatyce przemysłowej"
    : "Reon — Industrial Sourcing Partner";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (i18n[currentLang][key] !== undefined) el.innerHTML = i18n[currentLang][key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (i18n[currentLang][key] !== undefined) el.setAttribute("placeholder", i18n[currentLang][key]);
  });
  renderManufacturers(document.getElementById("catalog-search").value);
}

function toggleLang() {
  currentLang = currentLang === "pl" ? "en" : "pl";
  applyLang();
}

function toggleNav() {
  document.getElementById("main-nav").classList.toggle("open");
}

function openModal(mfr) {
  document.getElementById("modal-mfr-name").textContent = mfr.name;
  document.getElementById("modal-mfr-summary").textContent = mfr.summary[currentLang];
  document.getElementById("modal-mfr-lines").innerHTML =
    mfr.lines.map(l => `<span class="tag">${l}</span>`).join("");
  document.getElementById("modal-form-wrap").style.display = "block";
  document.getElementById("form-success").classList.remove("show");
  document.getElementById("inquiry-form").reset();
  document.getElementById("modal-overlay").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  document.getElementById("modal-overlay").classList.remove("open");
  document.body.style.overflow = "";
}

function submitInquiry(evt) {
  evt.preventDefault();
  document.getElementById("modal-form-wrap").style.display = "none";
  document.getElementById("form-success").classList.add("show");
  return false;
}

document.getElementById("modal-overlay").addEventListener("click", (e) => {
  if (e.target.id === "modal-overlay") closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
document.getElementById("catalog-search").addEventListener("input", (e) => {
  renderManufacturers(e.target.value);
});
document.querySelectorAll("#main-nav a.navlink").forEach(a => {
  a.addEventListener("click", () => document.getElementById("main-nav").classList.remove("open"));
});

renderAzBar();
applyLang();
