# Deploy GoQuick landing page with aaPanel and PM2

This guide walks you through hosting the Next.js landing site on your own server using **aaPanel** (web panel) and **PM2** (Node.js process manager). It assumes you have a Linux server (e.g. Ubuntu 20.04/22.04) with root or sudo access.

---

## 1. Prerequisites

- **Server:** VPS or dedicated server with a public IP.
- **Domain:** A domain pointed to your server (e.g. `goquickapp.com.ng` → your server IP).
- **aaPanel:** Installed and accessible (e.g. `http://your-server-ip:8888`). If not, install from [aaPanel](https://www.aapanel.com/).
- **Node.js:** v18 or v20 (required for Next.js 16).

---

## 2. Install Node.js (if needed)

On the server, install Node.js 20 LTS:

```bash
# Ubuntu/Debian – NodeSource
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Check
node -v   # v20.x.x
npm -v
```

Or use aaPanel: **App Store → Node.js Version Manager** (if available) and install Node 20.

---

## 3. Install PM2

```bash
sudo npm install -g pm2
pm2 -v
```

---

## 4. Upload the project to the server

**Option A – Git (recommended)**

```bash
# On server, e.g. in /www/wwwroot/ or your preferred path
cd /www/wwwroot
sudo git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git goquick-landing
cd goquick-landing/landing
```

If the repo is private, set up SSH keys or a deploy key on the server.

**Option B – Upload files**

- Zip the `landing` folder (including `node_modules` is not recommended; see below).
- Upload via aaPanel **Files** or SFTP to e.g. `/www/wwwroot/goquick-landing`.

Then on the server:

```bash
cd /www/wwwroot/goquick-landing
npm install --production=false
```

---

## 5. Environment variables

Create a production env file so the app knows its URL and any API endpoints:

```bash
cd /www/wwwroot/goquick-landing/landing
nano .env.production
```

Add (adjust values for your setup):

```env
NEXT_PUBLIC_SITE_URL=https://goquickapp.com.ng
NEXT_PUBLIC_API_BASE_URL=https://api.goquickapp.com.ng/v1
NEXT_PUBLIC_APP_DOWNLOAD_URL=https://goquickapp.com.ng
```

Save and exit. Do **not** commit `.env.production` if it contains secrets; keep it only on the server.

---

## 6. Build the Next.js app

```bash
cd /www/wwwroot/goquick-landing/landing
npm ci
npm run build
```

If the build fails, fix any errors (e.g. missing env, TypeScript or lint issues) before continuing.

---

## 7. Run with PM2

**Critical:** PM2 must run from the directory that contains the landing app’s **package.json** (the `landing` folder). If you start from the wrong directory, you’ll get `ENOENT: no such file or directory, open '/package.json'`.

Start the app and keep it running:

```bash
# Use the path where your landing app actually lives (e.g. .../goquickapp.com.ng/landing or .../goquick-landing/landing)
cd /www/wwwroot/goquick-landing/landing
PORT=3002 pm2 start npm --name "goquick-landing" -- start
pm2 save
```
(Use port **3002** so it doesn’t conflict with other apps on 3000. Nginx must proxy to this same port — see section 8.)

Or use an **ecosystem file** so the working directory is always correct (recommended):

```bash
cd /www/wwwroot/goquick-landing/landing
nano ecosystem.config.cjs
```

Paste (set **cwd** to the path where this `landing` app lives):

```js
module.exports = {
  apps: [
    {
      name: "goquick-landing",
      cwd: "/www/wwwroot/goquick-landing/landing",  // must be the folder that contains package.json and next
      script: "node_modules/next/dist/bin/next",
      args: "start",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "500M",
      env: {
        NODE_ENV: "production",
        PORT: 3002,
      },
    },
  ],
};
```

Then:

```bash
pm2 start ecosystem.config.cjs
```

Useful PM2 commands:

```bash
pm2 status
pm2 logs goquick-landing
pm2 restart goquick-landing
pm2 stop goquick-landing
```

Set PM2 to start on server reboot:

```bash
pm2 startup
# Run the command it prints (usually with sudo)
pm2 save
```

The app will be listening on **http://127.0.0.1:3002** (change `PORT` in the ecosystem file or when starting if you use another port).

---

## 8. aaPanel – add site and Nginx reverse proxy

**Important: landing and admin must be separate sites.**  
If `goquickapp.com.ng` opens the Admin Login instead of the landing page, the root domain is almost certainly attached to the **admin** site in aaPanel. You need two sites:

| Domain | Site in aaPanel | Reverse proxy target | Purpose |
|--------|-----------------|----------------------|---------|
| `goquickapp.com.ng` (and `www` if used) | **One site** (e.g. “GoQuick Landing”) | `http://127.0.0.1:3002` | This Next.js landing |
| `admin.goquickapp.com.ng` | **A different site** (e.g. “GoQuick Admin”) | Your admin app (e.g. `http://127.0.0.1:5173` or Laravel port) | Admin panel |

- Do **not** add `goquickapp.com.ng` to the same site as `admin.goquickapp.com.ng`.
- Create a **dedicated site** for `goquickapp.com.ng` and proxy it **only** to the landing app (port 3002).

Then:

1. **Login** to aaPanel.
2. **Website → Add site**
   - Domain: **only** `goquickapp.com.ng` (and `www.goquickapp.com.ng` if you use it). Do not add `admin.goquickapp.com.ng` here.
   - Root directory: can leave default or point to a folder (e.g. `/www/wwwroot/goquickapp.com.ng`); we will not serve files from here, only proxy.
   - PHP: **No** (not needed for Next.js).
   - Create database: optional (not needed for this static/Next app).
3. After the site is created, open **Settings** for that site.
4. Go to **Reverse proxy** (or **Proxy**).
5. **Add reverse proxy**
   - Proxy name: e.g. `Next.js`
   - Target URL: `http://127.0.0.1:3002`
   - Send domain: usually **Yes** (so Next.js receives the correct Host).
   - Optional: enable **WebSocket** if you use it later.
6. Save. Optional: disable the default “root” or “index” so all traffic goes to the proxy (depends on your aaPanel version).

**Or edit Nginx config by hand (aaPanel: Site → Config):**

```nginx
location / {
    proxy_pass http://127.0.0.1:3002;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_cache_bypass $http_upgrade;
}
```

Reload Nginx (aaPanel usually does this when you save).

---

## 9. SSL (HTTPS) with aaPanel

1. For your site in aaPanel, open **SSL**.
2. Choose **Let’s Encrypt**, enter your domain, request the certificate.
3. Optionally force HTTPS (redirect HTTP → HTTPS).

Your site should be available at **https://goquickapp.com.ng**.

---

## 10. Deployment workflow (updates)

When you push new code:

```bash
cd /www/wwwroot/goquick-landing
git pull
cd landing
npm ci
npm run build
pm2 restart goquick-landing
```

You can put this in a script, e.g. `deploy.sh`:

```bash
#!/bin/bash
set -e
cd /www/wwwroot/goquick-landing
git pull
cd landing
npm ci
npm run build
pm2 restart goquick-landing
echo "Deploy done."
```

Run: `chmod +x deploy.sh` and then `./deploy.sh` when you want to deploy.

---

## 11. Checklist

- [ ] Node.js 18+ installed
- [ ] PM2 installed and app running (`pm2 status`)
- [ ] `.env.production` set (especially `NEXT_PUBLIC_SITE_URL`)
- [ ] `npm run build` succeeds
- [ ] Nginx reverse proxy to `http://127.0.0.1:3002` (or whatever PORT the landing app uses)
- [ ] SSL enabled and HTTPS works
- [ ] `pm2 startup` and `pm2 save` so app restarts after reboot

---

## 12. Troubleshooting

| Issue | What to check |
|-------|----------------|
| **goquickapp.com.ng opens Admin Login** | (1) Landing may be **crashing**: run `pm2 show goquick-landing` — if restarts are high and uptime is 0, check `pm2 logs goquick-landing --err` or `cat /root/.pm2/logs/goquick-landing-error.log` and fix the error. (2) Root domain on wrong site: ensure `goquickapp.com.ng` has its own site in aaPanel and reverse proxy to `http://127.0.0.1:3002` (or the PORT you set for landing). |
| **Landing keeps restarting (uptime 0)** | Check error log: `pm2 logs goquick-landing --err`. Common causes: wrong **cwd** (PM2 must run from the folder that contains `package.json` and the `next` app — e.g. `/www/wwwroot/goquick-landing/landing` or `.../goquickapp.com.ng/landing`), missing `.env.production`, or build missing — run `npm run build` in that folder, then `pm2 restart goquick-landing`. |
| **502 Bad Gateway** | See **502 checklist** below. |
| Blank or wrong page | `NEXT_PUBLIC_SITE_URL` and other `NEXT_PUBLIC_*` in `.env.production`, then rebuild and restart. |
| Build fails | Run `npm run build` on the server and fix the reported errors (env, TypeScript, missing deps). |
| CORS / API errors | Configure API base URL in `.env.production` and CORS on your API server for your domain. |

### 502 Bad Gateway – step-by-step

Nginx returns 502 when it can’t reach the app. On the **server**, run these in order:

1. **Is the landing app running?**
   ```bash
   pm2 status
   ```
   If `goquick-landing` is **stopped** or **errored**, start or restart it:
   ```bash
   cd /www/wwwroot/goquickapp.com.ng/landing   # or your actual path
   PORT=3002 pm2 start npm --name "goquick-landing" -- start
   # or: pm2 restart goquick-landing
   ```

2. **Is the app listening on 3002?**
   ```bash
   sudo ss -tlnp | grep 3002
   ```
   You should see `node` (or similar) on `0.0.0.0:3002` or `127.0.0.1:3002`. If nothing appears, the app isn’t binding to 3002 — check **step 3**.

3. **Why isn’t it staying up?** (if restarts are high or uptime is 0)
   ```bash
   pm2 logs goquick-landing --err --lines 50
   ```
   If you see **`ENOENT ... open '/package.json'`**, PM2 is using the wrong directory. Delete and restart from the **landing** folder, or use an ecosystem file with the correct **cwd** (see section 7).

4. **Does Nginx proxy to the same port?**
   In aaPanel → site for **goquickapp.com.ng** → **Reverse proxy** (or Nginx config): target must be **`http://127.0.0.1:3002`** (same as the PORT the app uses). If it still says 3000 or 3001, change it to 3002 and save, then reload Nginx.

5. **Test the app directly on the server**
   ```bash
   curl -I http://127.0.0.1:3002
   ```
   If this returns HTTP 200 (or 304), the app is fine and the issue is Nginx config (step 4). If connection refused, the app isn’t listening (steps 1–3).

If you use **firewall** (e.g. ufw), allow 80, 443, and 8888 (aaPanel). You do **not** need to expose the landing app’s port (e.g. 3002) publicly; Nginx proxies to it locally.
