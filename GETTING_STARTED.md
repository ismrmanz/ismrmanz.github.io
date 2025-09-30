# Getting Started with Your New ISMRM-ANZ Site

## ✅ What's Been Set Up

Your new Astro + React site is ready at `../ismrmanz.github.io-2/`

**Currently running at:** http://localhost:4321/

## 📋 What's Included

### Pages
- **Homepage** (`/`) - Hero section with featured events
- **About** (`/about`) - Markdown page about the organization
- **Members** (`/members`) - Grid of all active members
- **Events** (`/events`) - Upcoming and past events
- **Contact** (`/contact`) - Contact information

### Content Collections

**Members** (`src/content/members/`)
- 3 example members (President, President-elect, Secretary)
- Easy to add more by creating new `.md` files
- Supports profile images, roles, regions, and bios

**Events** (`src/content/events/`)
- 2 example events (QSM Workshop, Annual Meeting)
- Automatically sorts into upcoming/past
- Supports featured events, registration links

### React Components
- `MemberCard.tsx` - Interactive member profile cards
- `EventCard.tsx` - Event cards with type badges

## 🎨 Styling Features

- Modern, clean design
- Fully responsive (mobile-friendly)
- Smooth hover effects
- Blue theme (easily customizable via CSS variables)
- Professional typography

## ⚡ Key Advantages Over Jekyll

1. **Modern Stack**: Latest React, TypeScript, fast HMR
2. **Type Safety**: Content validated at build time
3. **Better DX**: Hot reload, auto-complete, error checking
4. **Markdown + React**: Use markdown for content, React for interactive components
5. **Performance**: Minimal JavaScript shipped to browser
6. **No Ruby**: Pure JavaScript/Node.js ecosystem

## 🚀 Next Steps

### 1. Customize Content

**Update member info:**
```bash
cd src/content/members/
# Edit existing .md files or create new ones
```

**Add real events:**
```bash
cd src/content/events/
# Create new event markdown files
```

**Edit about/contact pages:**
```bash
cd src/pages/
# Edit about.md and contact.md
```

### 2. Add Images

Place member photos in `public/images/members/` and reference them in the markdown frontmatter:
```yaml
image: /images/members/bradford-moffat.jpg
```

### 3. Customize Styling

Edit `src/layouts/Layout.astro` to change:
- Colors (CSS variables in `:root`)
- Fonts
- Spacing
- Navigation

### 4. Deploy

When ready, build and deploy:
```bash
npm run build
# Output goes to dist/ folder
```

Deploy to:
- **GitHub Pages**: Free, simple (see README.md)
- **Vercel/Netlify**: One-click deployment
- **Cloudflare Pages**: Fast edge deployment

## 📚 Learning Resources

- [Astro Docs](https://docs.astro.build)
- [Content Collections Guide](https://docs.astro.build/en/guides/content-collections/)
- [React in Astro](https://docs.astro.build/en/guides/integrations-guide/react/)

## 🆘 Common Tasks

**Add a new page:**
```bash
# Create src/pages/new-page.astro or .md
```

**Change colors:**
```astro
/* In src/layouts/Layout.astro */
:root {
  --primary: #your-color;
}
```

**Stop dev server:**
```bash
# Press Ctrl+C in terminal
```

## 🎯 What Makes This Better

- **Content editors love it**: Markdown is simple
- **Developers love it**: Modern tooling, TypeScript
- **Fast for users**: Minimal JS, great Lighthouse scores
- **Easy to maintain**: Clear structure, type safety catches errors
- **Scalable**: Add hundreds of members/events without slowdown