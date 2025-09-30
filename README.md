# ISMRM-ANZ Website

Modern website for the ISMRM-ANZ chapter built with Astro and React.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Visit `http://localhost:4321` to see your site.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
/
├── public/                 # Static assets (images, etc.)
│   └── images/
│       └── members/       # Member profile images
├── src/
│   ├── components/        # React components
│   │   ├── MemberCard.tsx
│   │   └── EventCard.tsx
│   ├── content/           # Markdown content
│   │   ├── members/       # Member profiles
│   │   ├── events/        # Event posts
│   │   └── config.ts      # Content collection schemas
│   ├── layouts/
│   │   └── Layout.astro   # Main layout template
│   └── pages/             # Routes
│       ├── index.astro    # Homepage
│       ├── about.md       # About page (markdown)
│       ├── contact.md     # Contact page (markdown)
│       ├── members.astro  # Members listing
│       ├── events.astro   # Events listing
│       └── members/       # Dynamic member pages
└── package.json
```

## ✏️ Adding Content

### Adding a New Member

Create a new markdown file in `src/content/members/`:

```markdown
---
name: John Doe
title: Ph.D
role: Treasurer
region: Victoria  # Optional
image: /images/members/john-doe.jpg
order: 4
active: true
---

Biography content goes here in markdown.
```

Add the member's image to `public/images/members/`.

### Adding a New Event

Create a new markdown file in `src/content/events/`:

```markdown
---
title: Annual Meeting 2025
date: 2025-03-15
endDate: 2025-03-17  # Optional
type: meeting  # meeting, workshop, conference, social, other
location: Sydney, Australia
featured: true
registrationLink: https://example.com  # Optional
---

Event description in markdown format.

## Agenda
- Day 1: ...
- Day 2: ...
```

### Editing Static Pages

Edit the markdown files in `src/pages/`:
- `about.md` - About page content
- `contact.md` - Contact information

## 🎨 Styling

Global styles are defined in `src/layouts/Layout.astro`. Component-specific styles are scoped within each component.

CSS variables are defined in `:root`:
- `--primary`: Primary brand color
- `--text`: Main text color
- `--bg`: Background color

## 🚢 Deployment

### GitHub Pages

1. Update `astro.config.mjs` with your site URL:
```js
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/your-repo-name',
});
```

2. Build and deploy:
```bash
npm run build
```

Push to GitHub and enable GitHub Pages in repository settings.

### Other Platforms

Astro can deploy to Vercel, Netlify, Cloudflare Pages, and more. See [Astro deployment docs](https://docs.astro.build/en/guides/deploy/).

## 📝 Content Collections

This site uses Astro Content Collections for type-safe content management. Schemas are defined in `src/content/config.ts`.

Benefits:
- Type checking for frontmatter
- Automatic validation
- Auto-complete in editors
- Markdown with full TypeScript support

## 🧩 Tech Stack

- **Astro 5.x** - Static site framework
- **React 19** - UI components (used sparingly for interactivity)
- **TypeScript** - Type safety
- **Markdown/MDX** - Content authoring