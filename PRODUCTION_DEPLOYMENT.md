# Production Deployment

Primary preview domain: `https://khawaja-carpentry-woodpallets.vercel.app`

Company: `FIASAL FAREED WOODS TR L.L.C`  
Location: `Sajja Industrial, Sharjah-U.A.E`  
TRN: `105168940200003`

## Recommended Hosting

Use Vercel for the React frontend and serverless Express API routes.

Supported production start:

```bash
npm install
npm run build
npm start
```

Vercel deployment:

```bash
npm install
npm run build
npx vercel --prod
```

Health check:

```text
/api/health
```

## Required Environment Variables

```bash
NODE_ENV=production
PORT=5000
ALLOWED_ORIGINS=https://khawaja-carpentry-woodpallets.vercel.app
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
SMTP_FROM="FIASAL FAREED WOODS TR L.L.C <no-reply@khawaja-carpentry-woodpallets.vercel.app>"
VITE_SITE_NAME="FIASAL FAREED WOODS TR L.L.C"
VITE_SITE_URL="https://khawaja-carpentry-woodpallets.vercel.app"
VITE_API_BASE_URL=""
VITE_PRODUCT_IMAGE_BASE_URL="https://khawaja-carpentry-woodpallets.vercel.app/images/"
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

- For the Vercel preview, use the generated `*.vercel.app` URL.
- For a custom domain later, add it in Vercel Project Settings, then update `VITE_SITE_URL`, `ALLOWED_ORIGINS`, `sitemap.xml`, and `robots.txt`.

Enable SSL/HTTPS in the host dashboard after DNS resolves. The Express server also enforces HTTPS when `NODE_ENV=production` and the host sends `x-forwarded-proto`.

## SEO Setup

Submit:

```text
https://khawaja-carpentry-woodpallets.vercel.app/sitemap.xml
```

Verify these files after deployment:

```text
https://khawaja-carpentry-woodpallets.vercel.app/robots.txt
https://khawaja-carpentry-woodpallets.vercel.app/sitemap.xml
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
- Google map iframe loads for Sajja Industrial, Sharjah-U.A.E.
- Product dropdown opens above content.
- Scroll-to-top button appears after scrolling.

## Admin Data Storage

The backend uses MongoDB Atlas as the primary database when `MONGODB_URI` is set. Collections:

- `inquiries`: quote requests, status, and follow-up notes.
- `products`: admin-managed product catalogue cards.
- `media`: Cloudinary image metadata.

If MongoDB is not configured, the server falls back to local files under `server/data` only outside Vercel. Vercel production must use MongoDB because serverless files are not persistent.

## Image Storage

Admin image uploads use Cloudinary. Uploaded images are saved in the `CLOUDINARY_FOLDER` folder and the public URL is stored in MongoDB. The product CMS can then use the Cloudinary URL for product cards.

For real product/category images, upload through `/admin` after setting Cloudinary variables. For hardcoded category pages, set `VITE_PRODUCT_IMAGE_BASE_URL` to a folder URL that contains the same image filenames, or replace those category records with Cloudinary URLs during the next content pass.

## Gmail SMTP Example

Use a Google App Password, not the normal Gmail account password:

```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=nh534392@gmail.com
SMTP_PASS=your-16-character-google-app-password
SMTP_FROM="FIASAL FAREED WOODS TR L.L.C <nh534392@gmail.com>"
INQUIRY_TO_EMAIL=nh534392@gmail.com
```

After setting these variables, open `/admin` and click `Test Email`.
