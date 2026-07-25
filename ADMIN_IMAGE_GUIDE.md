# 📸 Admin Panel - Image Management Guide

## 🔐 Admin Access

**URL**: http://127.0.0.1:5173/admin (Local) or https://yourdomain.com/admin (Production)

**Credentials** (from .env):
- Username: `Nazir`
- Password: `@Nazir9697`

---

## 📊 Admin Dashboard Overview

The admin panel has **3 main tabs**:

1. **Inquiries** - Customer quote requests
2. **Products CMS** - Manage product catalogue
3. **Media Library** - Upload & manage images (Cloudinary)

---

## 🖼️ How Images Are Stored

### Storage System: **Cloudinary CDN**

**Configuration** (from .env):
```env
CLOUDINARY_CLOUD_NAME="dqrldug5h"
CLOUDINARY_API_KEY="353911612528378"
CLOUDINARY_API_SECRET="Fo5ZNkmessqLLRq6Ucm3WFJDT8U"
CLOUDINARY_FOLDER="khawaja-carpentry"
```

### Why Cloudinary?
✅ **Public CDN** - Images accessible worldwide  
✅ **Fast Delivery** - Global edge servers  
✅ **Auto Optimization** - Automatic format conversion (WebP)  
✅ **Image Transformations** - Resize, crop, compress on-the-fly  
✅ **Permanent Storage** - Images never deleted unless you remove them  
✅ **Direct URLs** - Each image gets a public URL

---

## 📤 How to Upload Images (Step-by-Step)

### Method 1: Upload via Media Library Tab

1. **Login to Admin Panel**
   - Go to: http://127.0.0.1:5173/admin
   - Enter username: `Nazir` and password

2. **Click "Media Library" Tab**
   - You'll see upload form on left side
   - Existing images on right side

3. **Upload New Image**
   - Click "Choose File" or drag image
   - (Optional) Add Alt Text for SEO
   - Click "Upload to Cloudinary"

4. **What Happens**:
   ```
   Browser → Server → Cloudinary
   ↓
   Cloudinary generates public URL
   ↓
   URL saved in MongoDB
   ↓
   Image appears in Media Library
   ```

5. **Image URL Generated**:
   ```
   https://res.cloudinary.com/dqrldug5h/image/upload/v1234567890/khawaja-carpentry/image-name.jpg
   ```

### Method 2: Use Uploaded Image in Products

1. **After uploading**, scroll down in Media Library
2. **Click on any image thumbnail**
3. **Image URL automatically copied to Product Form**
4. **Go to "Products CMS" tab**
5. **Create or Edit product**
6. **Image URL already filled in!**

---

## ✏️ How to Edit/Add/Remove Product Images

### ✨ Add Image to New Product

1. Go to **"Products CMS"** tab
2. Fill in product details:
   - Title (e.g., "Wooden Pallets 100x120")
   - Slug (e.g., "wooden-pallets-100x120")
   - Summary, Description, etc.

3. **For Image URL**, you have 3 options:

   **Option A**: Upload new image
   - Switch to "Media Library" tab
   - Upload image
   - Go back to "Products CMS"
   - Click small image thumbnail to select

   **Option B**: Use existing image
   - Scroll down in product form
   - See "Select Uploaded Image" section
   - Click any thumbnail
   - URL auto-fills

   **Option C**: Paste external URL
   - If image already on Cloudinary
   - Paste URL directly in "Image URL" field

4. Click **"Save Product"**

### 🔄 Change Product Image

1. Click **Edit icon** (pencil) on product card
2. Product loads in left form
3. **Change Image URL**:
   - Method 1: Click different thumbnail below
   - Method 2: Upload new image in Media Library
   - Method 3: Paste new URL manually
4. Click **"Save Product"**

### 🗑️ Remove Product Image

**Note**: This removes product, NOT the image file

1. Click **Trash icon** on product card
2. Confirm deletion
3. Product removed from database
4. **Image still exists** in Cloudinary & Media Library

---

## 🗂️ Media Library Features

### View All Uploaded Images

1. Go to **"Media Library"** tab
2. See grid of all images
3. Shows:
   - Image preview
   - Original filename
   - Upload date
   - Alt text
   - File size
   - Dimensions

### Use Image in Product

1. Scroll through Media Library
2. Click **"Use in Product"** button on any image
3. Switches to Products tab
4. Image URL pre-filled

---

## 🔍 Where Are Images Stored?

### 1. **Cloudinary CDN** (Physical Storage)
- Location: Cloud-based (Cloudinary servers)
- Folder: `khawaja-carpentry`
- Access: Public URLs
- Example:
  ```
  https://res.cloudinary.com/dqrldug5h/image/upload/v1234567890/khawaja-carpentry/wooden-pallet.jpg
  ```

### 2. **MongoDB Atlas** (Metadata Only)
- Collection: `media`
- Stores:
  ```json
  {
    "id": "abc123",
    "url": "https://res.cloudinary.com/...",
    "publicId": "khawaja-carpentry/wooden-pallet",
    "width": 1920,
    "height": 1080,
    "format": "jpg",
    "bytes": 245678,
    "originalName": "wooden-pallet.jpg",
    "alt": "Wooden pallet 100x120",
    "createdAt": "2024-12-20T10:30:00Z"
  }
  ```

### 3. **Local Fallback** (Development Only)
- File: `server/data/media.json`
- Used when MongoDB not configured
- Only for local testing

---

## 🌐 How Product Images Work on Website

### Frontend Display Flow:

1. **Product Page Loads**
   ```jsx
   // Products.jsx
   const products = await fetchManagedProducts();
   ```

2. **API Call to Backend**
   ```
   GET /api/products
   ↓
   Returns: [{ imageUrl: "https://cloudinary.com/..." }]
   ```

3. **Image Renders**
   ```jsx
   <img src={product.imageUrl} alt={product.title} />
   ```

4. **Browser Fetches from Cloudinary**
   ```
   Browser → Cloudinary CDN → Image displayed
   ```

### Static Images (Product Detail Pages)

Some images are hardcoded:
```javascript
// Uses base URL from .env
const imageBase = 'https://mujahidhussaincarpentry.store/images/'
const imageUrl = imageBase + '100cm x 120cm.jpg'
```

**These are NOT in admin!** They're externally hosted.

---

## ⚙️ Image Upload Technical Details

### Backend Implementation (server/index.js)

```javascript
// Upload endpoint
app.post('/api/admin/media', requireAdmin, upload.single('image'), async (req, res) => {
  // 1. Multer receives file (5MB limit)
  // 2. File stored in memory (buffer)
  // 3. Uploaded to Cloudinary
  const uploaded = await uploadToCloudinary(req.file);
  
  // 4. Metadata saved to MongoDB
  await saveMedia({
    url: uploaded.secure_url,
    publicId: uploaded.public_id,
    ...
  });
  
  // 5. Return image data to frontend
  res.json({ ok: true, media });
});
```

### Upload Limits

- **Max File Size**: 5 MB
- **Allowed Types**: Images only (jpg, png, webp, gif)
- **Validation**: Server-side + client-side
- **Security**: Admin authentication required

---

## 🔒 Security Features

### 1. **Admin Authentication**
- Basic Auth with username/password
- Session storage (browser)
- Required for all admin operations

### 2. **File Validation**
- Only image MIME types allowed
- Max 5MB file size
- Filename sanitization

### 3. **Cloudinary Security**
- API keys in .env (server-only)
- Upload signed requests
- Folder restrictions

### 4. **MongoDB Access**
- Connection string in .env
- Server-side only
- No direct frontend access

---

## 🚨 Common Issues & Solutions

### Issue 1: "Cloudinary is not configured"
**Cause**: Missing env variables  
**Solution**: Check .env file has:
```env
CLOUDINARY_CLOUD_NAME="..."
CLOUDINARY_API_KEY="..."
CLOUDINARY_API_SECRET="..."
```

### Issue 2: Image not displaying
**Cause**: Invalid URL or network issue  
**Solution**:
1. Check URL in browser directly
2. Verify Cloudinary account active
3. Check CORS settings

### Issue 3: Upload fails
**Cause**: File too large or wrong type  
**Solution**:
1. Max 5MB
2. Images only (jpg, png, webp)
3. Check server logs

### Issue 4: Can't login to admin
**Cause**: Wrong credentials  
**Solution**: Check .env:
```env
ADMIN_USERNAME="Nazir"
ADMIN_PASSWORD="@Nazir9697"
```

---

## 📈 Best Practices

### Image Optimization

1. **Before Upload**:
   - Resize large images (max 1920x1080)
   - Compress using TinyPNG/ImageOptim
   - Use WebP format when possible

2. **Naming Convention**:
   - Descriptive names: `wooden-pallet-100x120.jpg`
   - No spaces, use hyphens
   - Lowercase

3. **Alt Text**:
   - Always add for SEO
   - Describe the image
   - Include keywords

### Product Management

1. **Image URLs**: Always use Cloudinary URLs (not local paths)
2. **Consistency**: Same aspect ratio for all product images
3. **Backup**: Download images from Cloudinary periodically
4. **Testing**: Test on mobile after adding images

---

## 🔗 Related Files

### Frontend
- `src/pages/Admin.jsx` - Admin panel UI
- `src/utils/productsApi.js` - API calls

### Backend
- `server/index.js` - API endpoints
- `server/data/media.json` - Local fallback

### Configuration
- `.env` - Cloudinary credentials
- `vercel.json` - Deployment config

---

## 📞 Quick Reference

| Task | Location | Action |
|------|----------|--------|
| Upload image | Media Library tab | Click "Choose File" → Upload |
| Use in product | Media Library | Click image thumbnail |
| Edit product image | Products CMS | Edit → Change URL → Save |
| View all images | Media Library | See grid view |
| Delete product | Products CMS | Click trash icon |

---

## 🎯 Workflow Example

**Scenario**: Add new wooden pallet product with custom image

1. **Upload Image**
   - Admin → Media Library
   - Choose `wooden-pallet-120x100.jpg`
   - Add alt: "Wooden pallet 120x100 cm"
   - Click "Upload to Cloudinary"
   - ✅ Image uploaded!

2. **Create Product**
   - Switch to "Products CMS"
   - Click image thumbnail (auto-fills URL)
   - Fill form:
     - Title: "Wooden Pallet 120x100 cm"
     - Slug: "wooden-pallet-120x100"
     - Summary: "Heavy duty wooden pallet..."
     - Description: "..."
   - Click "Save Product"
   - ✅ Product created!

3. **Verify**
   - Go to website: http://127.0.0.1:5173/products
   - See new product with image
   - ✅ Working!

---

**Need Help?** Check server logs or contact developer.

**Cloudinary Dashboard**: https://cloudinary.com/console/
