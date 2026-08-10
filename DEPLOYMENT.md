# Deploy GoQuick landing page (aaPanel)

The landing app uses Next.js **static export** (`output: "export"` in `next.config.ts`).

That means:

- Build outputs static files to **`out/`**
- Nginx serves **`out/`** directly
- **Do not use PM2** or `next start` (they will fail with: `"next start" does not work with "output: export"`)

| Domain | Site root in aaPanel |
|--------|----------------------|
| `goquickapp.com.ng` | `/www/wwwroot/goquick/landing/out` |

Related sites (separate):

| Domain | How it runs |
|--------|-------------|
| `api.goquickapp.com.ng` | Laravel → `backend/public` |
| `app.goquickapp.com.ng` | Vite SPA → `web/dist` |

---

## 1. Prerequisites

- VPS with aaPanel + Nginx
- Domain DNS **A record** → server IP (e.g. `186.240.159.88`)
- Node.js **20.19+** or **22.12+** (Vite/Next builds; aaPanel Node Manager is fine)
- Project at `/www/wwwroot/goquick/landing` (or your actual path)

Use the Node binary from aaPanel if system Node is old:

```bash
export PATH=/www/server/nodejs/v24.19.0/bin:$PATH
node -v
```

---

## 2. Create the aaPanel site

1. **Website → Add site** → `goquickapp.com.ng` (and `www` if needed)
2. **Do not** attach this domain to the admin or API site
3. Enable **SSL → Let’s Encrypt** (force HTTPS)
4. After the first build (section 4), set **Site directory** to:

```text
/www/wwwroot/goquick/landing/out
```

5. **No reverse proxy** and **no PM2** for landing

---

## 3. Environment variables

```bash
cd /www/wwwroot/goquick/landing
nano .env.production
```

Example:

```env
NEXT_PUBLIC_SITE_URL=https://goquickapp.com.ng
NEXT_PUBLIC_WEB_APP_URL=https://app.goquickapp.com.ng
NEXT_PUBLIC_API_BASE_URL=https://api.goquickapp.com.ng/api/v1
```

`NEXT_PUBLIC_*` values are baked in at **build time**. Changing them requires a rebuild.

---

## 4. First-time build

aaPanel often creates a protected `out/.user.ini`. Remove it before every build:

```bash
export PATH=/www/server/nodejs/v24.19.0/bin:$PATH
cd /www/wwwroot/goquick/landing

chattr -i out/.user.ini 2>/dev/null
rm -f out/.user.ini
rm -rf out

npm ci
npm run build

ls out   # should show index.html
```

Then in aaPanel set site root to `/www/wwwroot/goquick/landing/out`.

---

## 5. Nginx rewrite (required)

**Website → goquickapp.com.ng → Config** (or URL rewrite). Use:

```nginx
location / {
    try_files $uri $uri/ $uri/index.html /index.html;
}
```

The app uses `trailingSlash: true`, so paths like `/about/` map to `about/index.html`.

Save, then:

```bash
nginx -t && nginx -s reload
```

Optional full example: `nginx-landing.conf.example` in this folder (static section).

---

## 6. Verify

On the server:

```bash
curl -I https://goquickapp.com.ng
ls /www/wwwroot/goquick/landing/out/index.html
```

In a browser (or phone on mobile data): open https://goquickapp.com.ng

If your PC times out but the site works elsewhere, check `C:\Windows\System32\drivers\etc\hosts` for a bad override (must resolve to your real VPS IP, not a stale IP like `34.x.x.x`).

---

## 7. Deploy updates (after you push new changes)

Whenever you push landing changes:

```bash
export PATH=/www/server/nodejs/v24.19.0/bin:$PATH
cd /www/wwwroot/goquick/landing

# Pull latest code (adjust remote/branch if needed)
git pull

# Clear aaPanel lock + old build
chattr -i out/.user.ini 2>/dev/null
rm -f out/.user.ini
rm -rf out

# Install deps if package.json changed, then rebuild
npm ci
npm run build

# Nginx already points at out/ — no PM2 restart
nginx -t && nginx -s reload
```

### One-liner script (optional)

Save as `/www/wwwroot/goquick/landing/deploy.sh`:

```bash
#!/bin/bash
set -e
export PATH=/www/server/nodejs/v24.19.0/bin:$PATH
cd /www/wwwroot/goquick/landing
git pull
chattr -i out/.user.ini 2>/dev/null || true
rm -f out/.user.ini
rm -rf out
npm ci
npm run build
nginx -t && nginx -s reload
echo "Landing deploy done."
```

```bash
chmod +x /www/wwwroot/goquick/landing/deploy.sh
./deploy.sh
```

---

## 8. Checklist

- [ ] DNS A record → VPS IP
- [ ] Site created for `goquickapp.com.ng` only (not mixed with admin)
- [ ] `.env.production` set, then `npm run build`
- [ ] Site root = `.../landing/out`
- [ ] No PM2 / no proxy to port 3002
- [ ] `try_files` rewrite in place
- [ ] SSL enabled
- [ ] After each push: pull → clear `out` / `.user.ini` → `npm run build`

---

## 9. Troubleshooting

| Issue | Fix |
|-------|-----|
| `next start` / PM2 error: `output: export` | Expected — use static `out/`, not PM2 |
| Build fails on `out/.user.ini` (`ENOTDIR` / `EPERM`) | `chattr -i out/.user.ini; rm -f out/.user.ini; rm -rf out` then rebuild |
| 403 / blank page | Site root must be `.../landing/out` (folder with `index.html`) |
| Soft routes 404 on refresh | Add `try_files $uri $uri/ $uri/index.html /index.html;` |
| Timeout on your PC only | Bad hosts/DNS override; site may already work publicly |
| Env / API URL wrong in browser | Update `.env.production`, rebuild (values are build-time) |
| Wrong site (admin login on root domain) | Root domain must be its own site → `out/`, not admin |

---

## 10. What not to do

- Do **not** run `pm2 start` / `next start` for this app
- Do **not** reverse-proxy to `127.0.0.1:3002`
- Do **not** point the site root at `/www/wwwroot/goquick/landing` (project root) — use **`out/`**
- Do **not** skip clearing `.user.ini` before rebuild on aaPanel
