# MARGIN — Independent Bookstore

MARGIN is an independent bookstore and reading room website built in React and CSS, matching the official Figma design (**HCI-Lab-7**, node `13:9`). It features an editorial aesthetic with warm paper tones, literary typography, and responsive layouts.

---

## Technologies Used

- **React 18** — Component-driven frontend library
- **Vite 5** — Fast development server and production bundler
- **Vanilla CSS (CSS Custom Properties)** — Design tokens directly mapped from the Figma file (`--color-paper`, `--color-ink`, `--color-accent`, etc.)
- **Typography** — Google Fonts matching the Figma design:
  - *Cormorant Garamond* (Brand headline & contact display)
  - *Newsreader* (Editorial titles, hero header & italic quote)
  - *DM Sans* (Body text, navigation, buttons, and form inputs)

---

## Folder Structure

```
margin-bookstore/
├── index.html              # HTML entry point with Google Fonts (Cormorant Garamond, Newsreader, DM Sans)
├── package.json            # Project dependencies and scripts
├── vite.config.js          # Vite React plugin configuration
├── README.md               # Beginner-friendly documentation
├── dist/                   # Production build outputs (npm run build)
├── public/
│   └── assets/             # SVG and PNG assets extracted from the Figma design
└── src/
    ├── main.jsx            # Application root mount
    ├── App.jsx             # Main layout, scroll observer, search, and modal state
    ├── data/
    │   └── books.js        # Catalog dataset matching the Figma design titles, authors, and prices
    ├── styles/
    │   ├── variables.css   # Figma design tokens (palette, typography sizes, spacing, lines)
    │   ├── global.css      # CSS resets, button variants, and layout utilities
    │   ├── navbar.css      # 120px header, brand, navigation links, and search action
    │   ├── hero.css        # Hero layout, editorial typography, and dual book cover presentation
    │   ├── featured.css    # 4-column book grid, action lines (genre + View Book arrow), metadata
    │   ├── about.css       # Deep paper panel with centered editorial statement & quote
    │   ├── contact.css     # 2-column contact section: visit & email details + inquiry form
    │   ├── modal.css       # Accessible book quick-view dialog
    │   ├── cart.css        # Slide-out bag drawer
    │   └── footer.css      # Footer with brand colophon, links, and copyright
    └── components/
        ├── Navbar.jsx      # Navigation header with active state, search trigger, and Shop Books action
        ├── Hero.jsx        # "Stories worth making room for." with staggered book covers
        ├── FeaturedBooks.jsx # "THE BOOKSHELF / 01" with 4 curated volumes
        ├── BookCard.jsx    # Individual volume card matching Figma card layout
        ├── BookModal.jsx   # Interactive book detail modal
        ├── About.jsx       # "Not just a place to buy books." centered section
        ├── Contact.jsx     # "Good books. Good conversations." form & Lahore visit info
        ├── CartDrawer.jsx  # Slide-out reading bag
        └── Footer.jsx      # Clean site footer
```

---

## Installation Steps

1. Make sure [Node.js](https://nodejs.org/) (version 18 or newer) is installed.
2. Open your terminal in the project directory:
   ```bash
   cd c:\Users\User\Desktop\margin-bookstore
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

---

## How to Run Locally

Start the Vite development server:
```bash
npm run dev
```

Open `http://localhost:3000` (or the URL shown in your terminal) in your browser.

To create a production build:
```bash
npm run build
```

To preview the production build:
```bash
npm run preview
```

---

## Main Website Sections (Figma Design Match)

1. **Navbar**
   - Brand: **MARGIN** (Cormorant Garamond, 42px) with tagline *"A little more room for good books."*
   - Links: **Home** (active terracotta underline), **Books**, **About**, **Contact**
   - Actions: Search icon and outline button **Shop Books**
   - Full-width subtle divider line (`#D6CDB9`)

2. **Hero Section**
   - Eyebrow: `EDITORIAL PICKS` in terracotta `#9C4A32`
   - Headline: *"Stories worth making room for."* (Newsreader Medium, 56px)
   - Description: *"An independent bookshop for curious minds, slow afternoons and stories that stay with you..."*
   - Primary button: **Explore the Shelves →** (solid dark ink with arrow)
   - Visual: Staggered bottom-aligned display of *The Covenant of Water* and *A Field Guide to Getting Lost*

3. **Featured Books ("THE BOOKSHELF / 01")**
   - Headline: *"A few worth your time."*
   - 4 Curated book cards:
     1. *The Covenant of Water* by Abraham Verghese — Fiction — `Rs. 4,200`
     2. *A Field Guide to Getting Lost* by Rebecca Solnit — Essays — `Rs. 3,250`
     3. *The Creative Act* by Rick Rubin — Non-Fiction — `Rs. 3,800`
     4. *Before the Coffee Gets Cold* by Toshikazu Kawaguchi — Fiction — `Rs. 2,750`
   - Each card features: book cover, genre tag, "View Book →" interactive link, title, author, and price.

4. **About Section**
   - Full-width warm deep paper background (`#EAE3D3`)
   - Centered headline: *"Not just a place to buy books."*
   - Description: *"MARGIN is an independent bookshop in Lahore, built around the belief that the right book can open up an entirely new way of seeing the world."*
   - Accent quote: *"Less noise. More meaningful pages."* (Newsreader Italic, `#9C4A32`)

5. **Contact Section ("COME SAY HELLO")**
   - Full-width soft paper background (`#FBF9F5`)
   - Left side: Display headline *"Good books. Good conversations."*, description, and contact info:
     - **VISIT**: *Gulberg III, Lahore, Pakistan*
     - **EMAIL**: *hello@marginbooks.pk*
   - Right side: Accessible form with fields for *Your name* (`e.g. Ayesha Khan`), *Email address* (`ayesha@example.com`), *Your message* (`Tell us what's on your mind...`), and button **Send message →**.

6. **Footer**
   - Clean matching footer with MARGIN brand, Lahore location details, quick links, and copyright notice.

---

## Environment Variables & Configuration

- **No environment variables required.** The application runs completely in-browser with local assets.
- Default port is configured in `vite.config.js` (port `3000`).
