# 🧠 Dendrite

**Dein zweites Gehirn fürs Studium.**
Dendrite ist eine Web-Applikation, die Studenten hilft, Module zu organisieren und Lernfortschritte zu verfolgen. Der Fokus liegt aktuell auf einer soliden Architektur und Skalierbarkeit.

## 🚧 Projektstatus

Das Projekt befindet sich in der **Aufbauphase (Foundation)**.
Wir haben einen "Clean Slate" Ansatz gewählt, um modernste Web-Standards (Vue 3 Composition API, Tailwind 4) mit einer strikten Atomic Design Struktur zu vereinen.

**Aktueller Stand:**
* ✅ **Basis-Setup:** Vue 3 + Vite + Tailwind CSS 4.
* ✅ **UI Framework:** PrimeVue (für Basis-Komponenten).
* ✅ **Architektur:** Strikte Trennung nach Atomic Design (Atoms → Templates → Pages).
* ✅ **Routing:** Unterscheidung zwischen Public (Landing) und Private (App) Bereich.

## 🛠 Tech Stack

| Technologie        | Version / Typ               |
| :----------------- | :-------------------------- |
| **Vue 3**          | Framework (Composition API) |
| **Vite**           | Build Tool                  |
| **Tailwind CSS 4** | Styling                     |
| **PrimeVue**       | UI Library                  |
| **Pinia**          | State Management            |

## 📂 Projektstruktur

Die Struktur folgt dem **Atomic Design** Prinzip. [cite_start]Wir nutzen **Templates** statt klassischer Layouts, um den Seitenrahmen zu definieren.

```text
src/
├── assets/          # Globale Styles (main.css)
├── components/      # UI Bausteine nach Atomic Design
│   ├── atoms/       # Kleinste Einheiten (Buttons, Icons)
│   ├── molecules/   # Zusammengesetzt (Formularfelder, Cards)
│   ├── organisms/   # Komplex (Sidebar, Header)
│   └── templates/   # Seiten-Gerüste (AppTemplate, AuthTemplate)
├── pages/           # Die eigentlichen Views
│   ├── LandingPage.vue    # Öffentliche Startseite
│   └── DashboardPage.vue  # Interner App-Bereich
├── router/          # Routing Konfiguration
└── stores/          # Pinia Stores (Datenhaltung)