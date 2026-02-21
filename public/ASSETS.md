# Required assets in `public/`

Place these files in the `landing/public/` folder so images load correctly:

| File | Used on |
|------|--------|
| `logo.png` | Header, Footer |
| `appstore.jpg` | Home hero, CTA section, Footer (App Store badge) |
| `playstore.png` | Home hero, CTA section, Footer (Google Play badge) |
| `goquick-image.png` | Home about, CTA, About page (phone/app screenshot) |
| `hero-image2.png` | Home hero |
| `for-runner.png` | Home services & runners sections |
| `element.png` | ServiceCards component |

## App Store and Google Play badges

- **App Store:** Download the official "Download on the App Store" badge from [Apple’s Marketing Resources](https://developer.apple.com/app-store/marketing/guidelines/#images). Save it as `appstore.jpg` (or `.png`) in `public/`.
- **Google Play:** Download the "Get it on Google Play" badge from [Google Play Badges](https://play.google.com/intl/en_us/badges/). Save it as `playstore.png` in `public/`.

If you use different filenames (e.g. `appstore.png`), update the `src` in:
- `src/app/page.tsx`
- `src/components/CTASection.tsx`
- `src/components/Footer.tsx`
