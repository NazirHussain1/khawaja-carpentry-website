# Mujahid Hussain Carpentry

React/Vite website with an Express backend for a UAE wooden pallet, wooden crate, plastic pallet, and jumbo bag supplier.

## Features

- Responsive industrial B2B website
- Quote and contact forms connected to `/api/inquiries`
- Inquiry validation, sanitization, honeypot spam protection, and IP rate limiting
- Local inquiry tracking in `server/data/inquiries.jsonl`
- Optional SMTP email notifications to `mujahidhussaincarpentry@gmail.com`
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
INQUIRY_TO_EMAIL="mujahidhussaincarpentry@gmail.com"
```

If SMTP is not configured, the backend still accepts and saves inquiries locally.

## Production

Production domain configuration and deployment checklist are in `PRODUCTION_DEPLOYMENT.md`.

## Structure

- `public/images`: image folders for hero, products, gallery, and logo assets
- `src/components`: reusable UI sections
- `src/pages`: route-level pages
- `src/data`: editable site content
- `src/styles`: global and responsive CSS
- `server`: Express API, inquiry handling, analytics event capture, and email integration

## Notes

Runtime inquiry and analytics logs are written under `server/data` and ignored by Git.
