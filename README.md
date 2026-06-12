# FIASAL FAREED WOODS TR L.L.C

React/Vite website with an Express backend for FIASAL FAREED WOODS TR L.L.C, a UAE wooden pallet, wooden crate, plastic pallet, and jumbo bag supplier.

Location: Sajja Industrial, Sharjah-U.A.E  
TRN: 105168940200003

## Features

- Responsive industrial B2B website
- Quote and contact forms connected to `/api/inquiries`
- Inquiry validation, sanitization, honeypot spam protection, and IP rate limiting
- Admin dashboard for inquiries, product cards, and Cloudinary image uploads
- MongoDB Atlas support for persistent inquiries, product CMS data, and media metadata
- Local file fallback in `server/data` for development when MongoDB is not configured
- Optional SMTP email notifications to `nh534392@gmail.com`
- WhatsApp, call, email, Google Maps, and conversion event tracking hooks

## Run

```bash
npm install
npm run dev
```

Run the backend API:

```bash
npm run dev:server
```

For a production-style server after building:

```bash
npm run build
npm start
```

## Build

```bash
npm run build
```

## Email Setup

Copy `.env.example` to `.env` and configure SMTP:

```bash
SMTP_HOST="smtp.example.com"
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER="your-smtp-user"
SMTP_PASS="your-smtp-password"
INQUIRY_TO_EMAIL="nh534392@gmail.com"
```

If SMTP is not configured, the backend still accepts and saves inquiries locally.

For Gmail delivery, create a Google App Password and use:

```bash
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER="nh534392@gmail.com"
SMTP_PASS="your-16-character-google-app-password"
SMTP_FROM="FIASAL FAREED WOODS TR L.L.C <nh534392@gmail.com>"
INQUIRY_TO_EMAIL="nh534392@gmail.com"
```

After deployment, use the Admin dashboard `Test Email` button to confirm SMTP is working.

## Admin, Database, and Images

Admin URL:

```text
/admin
```

Set secure credentials in `.env`:

```bash
ADMIN_USERNAME="admin"
ADMIN_PASSWORD="use-a-long-secure-password"
```

For production persistence, configure MongoDB Atlas:

```bash
MONGODB_URI="mongodb+srv://USER:PASSWORD@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority"
MONGODB_DB="khawaja_carpentry"
```

For image uploads in the admin media library, configure Cloudinary:

```bash
CLOUDINARY_CLOUD_NAME=""
CLOUDINARY_API_KEY=""
CLOUDINARY_API_SECRET=""
CLOUDINARY_FOLDER="khawaja-carpentry"
```

MongoDB collections used by the backend:

- `inquiries`: customer quote requests, statuses, and notes
- `products`: admin-managed product cards shown on the home page and `/products`
- `media`: Cloudinary upload metadata

## Production

Production domain configuration and deployment checklist are in `PRODUCTION_DEPLOYMENT.md`.

## Admin Image Notes

Product cards on the home page and `/products` can be changed from `/admin`:

1. Open `Media Library` and upload an image.
2. Click `Use in Product`.
3. Open `Products CMS`, edit the product, and save.

Product detail pages such as `/products/wooden-pallets` use fixed image filenames from `VITE_PRODUCT_IMAGE_BASE_URL`. To change those images without code changes, upload replacement files to that image folder using the same filenames. If the image base URL changes in Vercel, redeploy the site.

## Structure

- Product images load from `VITE_PRODUCT_IMAGE_BASE_URL` or admin-managed Cloudinary URLs
- `src/components`: reusable UI sections
- `src/pages`: route-level pages
- `src/data`: shared site content used by routes and contact helpers
- `src/styles`: global and responsive CSS
- `server`: Express API, inquiry handling, analytics event capture, and email integration

## Notes

Runtime inquiry and analytics logs are written under `server/data` and ignored by Git.
