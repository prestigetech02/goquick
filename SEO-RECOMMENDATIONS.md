# SEO & ranking recommendations for GoQuick

## What’s already in place (on-site)

- **Metadata**: Unique `title` and `description` per page; layout template `%s | GoQuick`.
- **Canonical URLs**: Each main page has `alternates.canonical` (home, about, contact, careers, how-it-works, faq, blog, privacy, terms).
- **Sitemap**: `sitemap.xml` includes all important static pages with priorities and change frequencies.
- **Robots**: `robots.txt` allows crawling and points to the sitemap.
- **Open Graph & Twitter**: Default OG/Twitter title, description, and image (app icon); good for social and some rich results.
- **Structured data**: Organization (homepage) and FAQPage (FAQ page) JSON-LD.
- **Technical**: `metadataBase`, favicon, apple-touch-icon, `lang="en"`, sensible robots directives for Googlebot.
- **Preview noindex**: On Vercel, only the production deployment (`VERCEL_ENV=production`) is allowed to be indexed; preview and branch deployments send `noindex, nofollow` so they don’t affect live SEO.

---

## Optional on-site improvements (in codebase)

1. **Dedicated OG image** ✅ Implemented  
   A 1200×630 px image for sharing is referenced in `layout.tsx` as `og-image.png`. Add your image to `public/og-image.png` (see `public/ASSETS.md`). Fallback: `appicon.png`.

2. **Blog in sitemap** ✅ Implemented  
   `sitemap.ts` fetches blog post slugs from the API and adds `/blog/[slug]` entries with `lastModified` (from `updated_at` or `published_at`) and `priority` 0.6. Revalidates every 5 minutes.

3. **LocalBusiness / Service schema** ✅ Implemented  
   Service JSON-LD on the homepage with name, url, description, telephone, email, areaServed (default "Lagos, Nigeria"). Optional: set `NEXT_PUBLIC_BUSINESS_ADDRESS` and `NEXT_PUBLIC_BUSINESS_AREA_SERVED` in env.

4. **Article schema for blog posts** ✅ Implemented  
   Each `blog/[slug]` page includes Article JSON-LD (headline, datePublished, dateModified, author, image, publisher) for rich results.

5. **Core Web Vitals**  
   Next.js already provides Image optimization, font optimization, and code splitting. **What to do:** Keep using the Next.js `<Image>` component and `loading="lazy"` for images; avoid large render-blocking scripts; run **Lighthouse** (Chrome DevTools) and **Google Search Console → Core Web Vitals** to monitor LCP, INP, CLS. Fix any “Poor” or “Needs improvement” URLs.

---

## Off-site and general (outside this repo)

### 1. **Google Search Console**
- Add and verify the property (domain or URL prefix).
- Submit `sitemap.xml` (e.g. `https://goquickapp.com.ng/sitemap.xml`).
- Fix any crawl errors or indexing issues reported.
- Use “URL inspection” for important URLs to request indexing after big changes.

### 2. **Google Business Profile**
- If you have a physical office or service area, create/claim a Business Profile for “GoQuick” in Lagos.
- Add site URL, phone, hours, short description; link to app download.
- Helps local and brand searches.

### 3. **Backlinks and mentions**
- Get listed in relevant Nigerian/local directories (startups, apps, delivery, Lagos business).
- Press, blogs, “best errand/delivery app” roundups.
- Partner or runner pages that link to goquickapp.com.ng.
- Quality over quantity: one strong editorial link beats many low-quality links.

### 4. **Content and keywords**
- Align page titles and descriptions with what people search (e.g. “errand app Lagos”, “delivery runner Lagos”, “pickup and delivery”).
- Add a simple blog or “Help” content around: “how to send package in Lagos”, “hire someone for errands”, “same-day delivery Lagos”, etc.
- Use clear headings (H1, H2) and one main keyword per page where it fits naturally.

### 5. **Technical and hosting**
- Use HTTPS everywhere (you likely already do).
- Keep the site fast and stable; use a CDN if most traffic is in Nigeria.
- Ensure `NEXT_PUBLIC_SITE_URL` (and any canonical/OG URLs) use the live domain (e.g. `https://goquickapp.com.ng`) in production.

### 6. **Analytics and iteration**
- Use Google Analytics 4 (or similar) to see which pages and keywords drive traffic.
- Use Search Console to see queries that show your site, CTR, and average position.
- Iterate on titles, descriptions, and content based on that data.

---

## Quick checklist before launch

- [ ] `NEXT_PUBLIC_SITE_URL` set to production URL (e.g. `https://goquickapp.com.ng`).
- [ ] Add and verify site in Google Search Console; submit sitemap.
- [x] **OG image** — Layout already references `og-image.png` (1200×630). Add your image file to `public/og-image.png` (see `public/ASSETS.md`). Fallback: `appicon.png`.
- [x] **LocalBusiness/Service schema** — Implemented on the homepage (`page.tsx`). Optional env: `NEXT_PUBLIC_BUSINESS_ADDRESS`, `NEXT_PUBLIC_BUSINESS_AREA_SERVED` (default: "Lagos, Nigeria").
- [ ] After launch: request indexing for homepage and key pages in Search Console; monitor coverage and Core Web Vitals.

Ranking “as soon as possible” still depends on indexing time, competition, and backlinks. Having a clean, crawlable site with good metadata and a sitemap (as you do now) puts you in a good position; the rest is submission, content, and off-site signals.
