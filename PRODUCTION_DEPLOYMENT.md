# Production Deployment

Domain: `mujahidhussaincarpentry.store`

## Recommended Hosting

Use a Node hosting provider because the website includes a working Express backend for `/api/inquiries`.

Supported production start:

```bash
npm install
npm run build
npm start
```

Health check:

```text
/api/health
```

## Required Environment Variables

```bash
NODE_ENV=production
PORT=5000
ALLOWED_ORIGINS=https://mujahidhussaincarpentry.store,https://www.mujahidhussaincarpentry.store
INQUIRY_TO_EMAIL=nh534392@gmail.com
ADMIN_USERNAME=admin
ADMIN_PASSWORD=use-a-long-secure-password
MONGODB_URI=mongodb+srv://USER:PASSWORD@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
MONGODB_DB=khawaja_carpentry
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
CLOUDINARY_FOLDER=khawaja-carpentry
SMTP_HOST=
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=
SMTP_PASS=
SMTP_FROM="Mujahid Hussain Carpentry <no-reply@mujahidhussaincarpentry.store>"
VITE_SITE_NAME="Mujahid Hussain Carpentry"
VITE_API_BASE_URL=""
VITE_WHATSAPP_NUMBER=971509253127
VITE_CONTACT_PHONE="+971 50 92 53127"
VITE_CONTACT_SECONDARY_PHONE="+971 52 51 73794"
VITE_CONTACT_EMAIL=nh534392@gmail.com
VITE_GA_MEASUREMENT_ID=
VITE_GTM_ID=
VITE_FACEBOOK_PIXEL_ID=
```

## DNS

Point the domain to the selected hosting provider:

- Apex `mujahidhussaincarpentry.store`: use the provider A records or ALIAS/ANAME target.
- `www.mujahidhussaincarpentry.store`: use the provider CNAME target.

Enable SSL/HTTPS in the host dashboard after DNS resolves. The Express server also enforces HTTPS when `NODE_ENV=production` and the host sends `x-forwarded-proto`.

## SEO Setup

Submit:

```text
https://mujahidhussaincarpentry.store/sitemap.xml
```

Verify these files after deployment:

```text
https://mujahidhussaincarpentry.store/robots.txt
https://mujahidhussaincarpentry.store/sitemap.xml
```

Google Search Console, Google Analytics, Google Tag Manager, Facebook Pixel, and Google Business Profile require account access. Add the IDs to environment variables before the production build.

## Route Checklist

- `/`
- `/about`
- `/products`
- `/products/wooden-pallets`
- `/products/wooden-crates`
- `/products/plastic-pallets`
- `/products/plastic-jumbo-bags`
- `/gallery`
- `/testimonials`
- `/contact`

## Functional Checklist

- WhatsApp buttons open direct chat.
- Phone buttons use `tel:`.
- Email links use `mailto:`.
- Contact forms submit to `/api/inquiries`.
- Admin works at `/admin` with `ADMIN_USERNAME` and `ADMIN_PASSWORD`.
- Admin inquiries are stored in MongoDB Atlas when `MONGODB_URI` is configured.
- Admin product CMS controls product cards on the home page and `/products`.
- Admin media uploads go to Cloudinary when Cloudinary variables are configured.
- Google map iframe loads for Industrial Area Al Sajja, Sharjah, UAE.
- Product dropdown opens above content.
- Scroll-to-top button appears after scrolling.

## Admin Data Storage

The backend uses MongoDB Atlas as the primary database when `MONGODB_URI` is set. Collections:

- `inquiries`: quote requests, status, and follow-up notes.
- `products`: admin-managed product catalogue cards.
- `media`: Cloudinary image metadata.

If MongoDB is not configured, the server falls back to local files under `server/data`. This fallback is useful for development only and should not be treated as permanent production storage.

## Image Storage

Admin image uploads use Cloudinary. Uploaded images are saved in the `CLOUDINARY_FOLDER` folder and the public URL is stored in MongoDB. The product CMS can then use the Cloudinary URL for product cards.

## Gmail SMTP Example

Use a Google App Password, not the normal Gmail account password:

```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=nh534392@gmail.com
SMTP_PASS=your-16-character-google-app-password
SMTP_FROM="Mujahid Hussain Carpentry <nh534392@gmail.com>"
INQUIRY_TO_EMAIL=nh534392@gmail.com
```

After setting these variables, open `/admin` and click `Test Email`.
