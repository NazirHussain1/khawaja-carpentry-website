# FIASAL FAREED WOODS TR L.L.C

Professional business website for FIASAL FAREED WOODS TR L.L.C, a leading supplier of wooden pallets, wooden crates, plastic pallets, and jumbo bags in the UAE.

**Location:** Sajja Industrial, Sharjah, UAE  
**TRN:** 105168940200003  
**Website:** [https://fiasal-fareed-woods.vercel.app](https://fiasal-fareed-woods.vercel.app)

---

## Features

### Frontend
- Responsive React/Vite application optimized for B2B customers
- 15+ pages including product catalogs, gallery, testimonials, and FAQ
- Dynamic hero section with product showcase
- Mobile-first design with Tailwind CSS
- SEO optimized with structured data (Schema.org)
- WhatsApp, phone, and email integration

### Backend
- Express API server with RESTful endpoints
- MongoDB Atlas integration for data persistence
- Cloudinary integration for image management
- SMTP email notifications for inquiries
- Admin dashboard for content management
- Rate limiting and spam protection
- Input validation and sanitization

### Admin Panel
- Secure authentication system
- Inquiry management (view, update status, add notes)
- Product content management system
- Media library with Cloudinary uploads
- Email configuration testing
- CSV export functionality

---

## Quick Start

### Installation

```bash
npm install
```

### Development

Start the frontend dev server:

```bash
npm run dev
```

Start the backend API server:

```bash
npm run dev:server
```

Access the application at `http://localhost:5173`

### Production Build

```bash
npm run build
npm start
```

---

## Configuration

### Environment Variables

Create a `.env` file based on `.env.example`:

```env
# Site Configuration
VITE_SITE_NAME="FIASAL FAREED WOODS TR L.L.C"
VITE_SITE_URL="https://fiasal-fareed-woods.vercel.app"
VITE_WHATSAPP_NUMBER="971542046121"
VITE_CONTACT_PHONE="+971 58 844 1600"
VITE_CONTACT_SECONDARY_PHONE="+971 54 204 6121"
VITE_CONTACT_EMAIL="faislfareed786@gmail.com"

# Server Configuration
PORT=5000
NODE_ENV=development
INQUIRY_TO_EMAIL="faislfareed786@gmail.com"

# Admin Credentials
ADMIN_USERNAME="admin"
ADMIN_PASSWORD="your-secure-password"

# MongoDB Configuration
MONGODB_URI="mongodb+srv://USER:PASSWORD@cluster.mongodb.net/"
MONGODB_DB="khawaja_carpentry"

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=""
CLOUDINARY_API_KEY=""
CLOUDINARY_API_SECRET=""
CLOUDINARY_FOLDER="khawaja-carpentry"

# SMTP Configuration (Gmail)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER="faislfareed786@gmail.com"
SMTP_PASS="your-gmail-app-password"
SMTP_FROM="FIASAL FAREED WOODS TR L.L.C <faislfareed786@gmail.com>"
```

### Gmail Setup

1. Enable 2-Step Verification: [https://myaccount.google.com/security](https://myaccount.google.com/security)
2. Generate App Password: [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
3. Use the 16-character password in `SMTP_PASS`

### MongoDB Setup

1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster and database
3. Get connection string and add to `MONGODB_URI`

### Cloudinary Setup

1. Create account at [Cloudinary](https://cloudinary.com)
2. Get credentials from dashboard
3. Add to environment variables

---

## Project Structure

```
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── common/     # Header, Footer, Navbar
│   │   ├── contact/    # Contact forms
│   │   ├── home/       # Homepage sections
│   │   └── products/   # Product components
│   ├── pages/          # Route pages
│   ├── data/           # Static content
│   ├── utils/          # Helper functions
│   ├── styles/         # CSS files
│   └── config/         # Configuration
├── server/             # Express backend
│   ├── data/          # Local data storage
│   └── index.js       # API server
├── public/            # Static assets
└── dist/              # Production build
```

---

## Admin Dashboard

Access the admin panel at `/admin`

**Features:**
- View and manage customer inquiries
- Update inquiry status (New, In Progress, Completed)
- Add internal notes to inquiries
- Upload and manage images via Cloudinary
- Edit product information
- Test email configuration
- Export inquiries as CSV

**Default Access:**
- URL: `/admin`
- Credentials: Set in `.env` file

---

## API Endpoints

### Public Endpoints

- `GET /api/products` - Get all products
- `POST /api/inquiries` - Submit inquiry form
- `POST /api/analytics/event` - Track analytics events

### Admin Endpoints (Authentication Required)

- `POST /api/admin/login` - Admin login
- `GET /api/admin/inquiries` - Get all inquiries
- `PUT /api/admin/inquiries/:id` - Update inquiry
- `POST /api/admin/email-test` - Test email configuration
- `GET /api/admin/products` - Get products
- `POST /api/admin/products` - Create product
- `PUT /api/admin/products/:id` - Update product
- `DELETE /api/admin/products/:id` - Delete product
- `POST /api/admin/media/upload` - Upload image
- `GET /api/admin/media` - Get all media
- `DELETE /api/admin/media/:id` - Delete media

---

## Deployment

### Vercel Deployment

1. Connect GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Environment Variables on Vercel

Add all variables from `.env` to Vercel:
- Settings → Environment Variables
- Add each variable for Production, Preview, and Development
- Redeploy after updating variables

---

## Database Collections

### inquiries
- Customer quote requests
- Status tracking
- Admin notes
- Contact information

### products
- Product catalog
- Images and descriptions
- Pricing information
- Category management

### media
- Cloudinary upload metadata
- Image URLs and public IDs
- Upload timestamps

---

## Tech Stack

**Frontend:**
- React 19
- Vite 7
- Tailwind CSS 4
- Framer Motion
- Lucide Icons

**Backend:**
- Node.js
- Express 5
- MongoDB
- Nodemailer
- Cloudinary SDK

**Deployment:**
- Vercel (Frontend)
- Express Server
- MongoDB Atlas
- Cloudinary CDN

---

## Features in Detail

### Security
- Rate limiting on API endpoints
- Honeypot spam protection
- Input validation and sanitization
- Secure admin authentication
- CORS configuration
- Helmet.js security headers

### SEO
- Meta tags optimization
- Open Graph tags
- Twitter Card tags
- Structured data (Schema.org)
- Sitemap.xml
- Robots.txt
- Canonical URLs

### Performance
- Code splitting
- Lazy loading
- Image optimization via Cloudinary
- WebP format support
- Gzip compression
- CDN delivery

---

## Development

### Run Tests

```bash
npm run lint
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## Support

For technical support or inquiries:
- **Email:** faislfareed786@gmail.com
- **Phone:** +971 58 844 1600
- **WhatsApp:** +971 54 204 6121

---

## License

© 2026 FIASAL FAREED WOODS TR L.L.C. All rights reserved.

---

## Changelog

### Version 1.0.0 (2026-08-17)
- Initial production release
- 15 pages fully functional
- Admin panel operational
- MongoDB and Cloudinary integrated
- Email notifications working
- Mobile responsive design
- SEO optimized
