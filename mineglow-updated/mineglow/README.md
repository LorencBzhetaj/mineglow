# Mine Glow — Next.js Website

Faqja zyrtare e **Mine Glow**, biznes aksesore artizanale me perla nga Shkodra, Shqipëri.

---

## 🚀 Si ta nisësh projektin

### Kërkesat
- Node.js 18+
- npm ose yarn

### Instalimi

```bash
# 1. Klono repon
git clone https://github.com/LorencBzhetaj/mineglow.git
cd mineglow

# 2. Instalo dependencies
npm install

# 3. Nis serverin e zhvillimit
npm run dev

# Hap http://localhost:3000
```

---

## 📦 Deployment

### Vercel (rekomandohet — falas)

1. Shko te [vercel.com](https://vercel.com) dhe krijo llogari
2. Kliko **"New Project"** dhe importo repon nga GitHub
3. Lëre cilësimet default (Vercel e njeh Next.js automatikisht)
4. Kliko **Deploy** — faqja është live brenda 2 minutash!

### Netlify

```bash
npm run build
# Upload folderin .next/ te Netlify
```

### Server manual

```bash
npm run build
npm start
# Faqja nis në port 3000
```

---

## 🖼️ Si të shtosh fotot reale

Zëvendëso placeholder-ët me imazhe reale:

1. Vendosi fotot në `/public/images/`
2. Importo `Image` nga `next/image`:

```tsx
import Image from 'next/image'

<Image
  src="/images/canta-perla.jpg"
  alt="Çantë me perla — Mine Glow"
  width={600}
  height={800}
  priority  // vetëm për hero image
/>
```

---

## 🔍 SEO — Çfarë është konfiguruar

- ✅ `<title>` dhe `<meta description>` për çdo faqe
- ✅ **Open Graph** (Facebook, WhatsApp, etj.)
- ✅ **Twitter Card**
- ✅ **JSON-LD Structured Data** — `LocalBusiness`, `OnlineStore`, `ItemList`, `Product`
- ✅ **Sitemap** automatik — `/sitemap.xml`
- ✅ **robots.txt** — `/robots.txt`
- ✅ **Canonical URLs**
- ✅ Mobile-responsive

### Çfarë duhet të personalizosh

Në `src/app/layout.tsx`, ndrysho:
- `VENDOS_KETU_GOOGLE_VERIFICATION_CODE` → kodi nga Google Search Console
- `telephone` → numri i telefonit real
- `email` → emaili real

---

## 📁 Struktura e projektit

```
mineglow/
├── public/
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── about/page.tsx      ← Faqja "Rreth Nesh"
│   │   ├── contact/page.tsx    ← Faqja "Kontakt"
│   │   ├── shop/page.tsx       ← Dyqani
│   │   ├── globals.css
│   │   ├── components.css
│   │   ├── layout.tsx          ← Root layout + SEO global
│   │   ├── not-found.tsx       ← Faqja 404
│   │   ├── page.tsx            ← Kryefaqja
│   │   └── sitemap.ts          ← /sitemap.xml
│   └── components/
│       ├── About.tsx
│       ├── Contact.tsx
│       ├── Footer.tsx
│       ├── Hero.tsx
│       ├── Navbar.tsx
│       ├── Products.tsx
│       ├── ScrollReveal.tsx
│       ├── Services.tsx
│       └── Strip.tsx
├── .gitignore
├── next.config.js
├── package.json
└── tsconfig.json
```

---

## 📱 Faqet

| Rruga | Faqja |
|-------|-------|
| `/` | Kryefaqja (Hero, Strip, Produkte, Shërbime, Rreth Nesh, Kontakt) |
| `/shop` | Dyqani me të gjitha produktet |
| `/about` | Historia e Mine Glow |
| `/contact` | Kontakt + FAQ |

---

© 2025 Mine Glow. Shkodër, Shqipëri.
