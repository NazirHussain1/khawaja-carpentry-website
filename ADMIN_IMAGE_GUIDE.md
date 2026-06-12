# Admin Image Guide

## Why Images May Not Load

Product detail images use this environment variable:

```bash
VITE_PRODUCT_IMAGE_BASE_URL="https://mujahidhussaincarpentry.store/images/"
```

This URL must point to a folder that contains the same image filenames used in the product pages, for example:

- `100cm x 120cm.jpg`
- `wooden boxes.jpeg`
- `plastic pallets.jpeg`
- `CP3 Pallets.jpg`

If Vercel still has `VITE_PRODUCT_IMAGE_BASE_URL` set to `https://fiasal-fareed-woods.vercel.app/images/`, images will not load because this project does not store product images in `public/images`.

## Change Product Card Images From Admin

1. Open `/admin`.
2. Login with the admin username and password from Vercel environment variables.
3. Open `Media Library`.
4. Upload the image.
5. Click `Use in Product`.
6. Open `Products CMS`.
7. Edit the product.
8. Confirm `Image URL` has the uploaded Cloudinary URL.
9. Click `Save Product`.

This changes product cards on the home page and `/products`.

## Change Product Detail Page Images

The detail pages like `/products/wooden-pallets`, `/products/wooden-crates`, `/products/plastic-pallets`, and `/products/plastic-jumbo-bags` use fixed image filenames in code.

To change those images without code changes:

1. Upload replacement images to the folder configured in `VITE_PRODUCT_IMAGE_BASE_URL`.
2. Keep the exact same filenames.
3. Redeploy the site if the environment variable was changed.

To use different filenames, update the image names in these files:

- `src/pages/WoodenPallets.jsx`
- `src/pages/WoodenCrates.jsx`
- `src/pages/PlasticPallets.jsx`
- `src/pages/PlasticJumboBags.jsx`
- `src/pages/Products.jsx`

## Required Image Upload Environment Variables

Cloudinary upload from admin requires:

```bash
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
CLOUDINARY_FOLDER=khawaja-carpentry
```

Admin product/inquiry saving in production requires:

```bash
MONGODB_URI=
MONGODB_DB=khawaja_carpentry
ADMIN_USERNAME=
ADMIN_PASSWORD=
```
