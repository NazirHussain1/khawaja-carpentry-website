# 🖼️ Cloudinary Images - Website Mapping

## ✅ Images Updated from Admin Panel

All images have been fetched from your Cloudinary admin panel and mapped to the website.

---

## 📸 **Hero Section Images**

### **Wooden Pallets:**
- **Thumbnail:** `new refurbished 100 cm x 120 cm.webp`
  - URL: `https://res.cloudinary.com/dqrldug5h/image/upload/v1786417210/khawaja-carpentry/kk2edvzkvabmqansnste.webp`
- **Background:** `Wooden pallets supplier pic for hero section.webp`
  - URL: `https://res.cloudinary.com/dqrldug5h/image/upload/v1785002181/khawaja-carpentry/e1cyyteykkwwsye24ilm.webp`

### **Plastic Pallets:**
- **Thumbnail:** `100 cm x 120 cm heavy duty new plastic pallet.webp`
  - URL: `https://res.cloudinary.com/dqrldug5h/image/upload/v1785003467/khawaja-carpentry/lajb63fxhcwjvtk0xzcx.webp`
- **Background:** `new plastic pallet normal duty.webp`
  - URL: `https://res.cloudinary.com/dqrldug5h/image/upload/v1785003867/khawaja-carpentry/d7jqiagljk0korncdhkr.webp`

### **Wooden Crates:**
- **Thumbnail:** `IPPC 110 cm x 130 cm.webp`
  - URL: `https://res.cloudinary.com/dqrldug5h/image/upload/v1785003768/khawaja-carpentry/ccintlyjzmq5ouocl71b.webp`
- **Background:** `IPPC 110 cm x 130 cm.webp` (same as thumbnail)
  - URL: `https://res.cloudinary.com/dqrldug5h/image/upload/v1785003768/khawaja-carpentry/ccintlyjzmq5ouocl71b.webp`

### **Plastic Jumbo Bags:**
- **Thumbnail:** `CP3 Pallets.webp`
  - URL: `https://res.cloudinary.com/dqrldug5h/image/upload/v1785003706/khawaja-carpentry/zmohrfj5occsegwwl97q.webp`
- **Background:** `CP3 Pallets.webp` (same as thumbnail)
  - URL: `https://res.cloudinary.com/dqrldug5h/image/upload/v1785003706/khawaja-carpentry/zmohrfj5occsegwwl97q.webp`

---

## 📦 **Available Product Images (From Admin Panel)**

### **Wooden Pallets:**
1. ✅ `new refurbished white euro 80 x 120 cm.webp` (960x1280)
2. ✅ `new refurbished 100 cm x 120 cm.webp` (1200x1600) - **Used in Hero**
3. ✅ `heavy duty new 100 cm x 120 cm frontside.webp` (960x1280)
4. ✅ `black euro used frontside.webp` (1200x1600)
5. ✅ `120cm x 120cm wooden pallet.webp` (1600x2133)
6. ✅ `114 cm x 114 cm.webp` (1600x2133)
7. ✅ `110cm x 110cm.webp` (1600x1200)
8. ✅ `110 cm x 110 cm new two way heavy duty.webp` (960x1280)
9. ✅ `100cm x 120cm.webp` (1600x1200)
10. ✅ `100 cm x 120 cm Heavy Duty.webp` (1600x2133)
11. ✅ `100 cm x 110 cm heavy duty refurbished.webp` (960x1280)
12. ✅ `90 cm x 90 cm.webp` (1600x2133)
13. ✅ `80cm x 80cm.webp` (1600x2133)
14. ✅ `80 cm x 200 cm heavy duty.webp` (1200x1600)
15. ✅ `Wooden pallets supplier pic for hero section.webp` (1600x2133) - **Used in Hero Background**

### **Plastic Pallets:**
1. ✅ `new plastic pallet normal duty.webp` (810x1080) - **Used in Hero Background**
2. ✅ `100 cm x 120 cm heavy duty new plastic pallet.webp` (560x560) - **Used in Hero Thumbnail**

### **Wooden Crates:**
1. ✅ `IPPC 110 cm x 130 cm.webp` (1600x2133) - **Used in Hero**

### **Plastic Jumbo Bags:**
1. ✅ `CP3 Pallets.webp` (1600x2133) - **Used in Hero**

---

## 🎯 **Where Images Are Used**

### **Hero Section (Homepage):**
- File: `src/data/heroData.js`
- **4 product cards** with thumbnails
- **4 background images** that rotate

### **Products Preview (Homepage):**
- File: `src/components/home/ProductsPreview.jsx`
- Uses managed products from admin panel OR fallback images

### **About Preview (Homepage):**
- File: `src/components/home/AboutPreview.jsx`
- Currently uses Unsplash image (can be replaced)

---

## 🔄 **How to Add More Images**

### **Option 1: Using Admin Panel**
1. Go to `/admin`
2. Login with: `Nazir` / `@Nazir9697`
3. Click "Media Library" tab
4. Upload new images
5. Copy the Cloudinary URL
6. Update the code with new URL

### **Option 2: Update Products via Admin**
1. Go to `/admin`
2. Click "Products CMS" tab
3. Edit existing product
4. Click "Select Uploaded Image"
5. Choose from uploaded images
6. Save product

---

## 📝 **Image Sizes Recommended**

| Location | Recommended Size | Format |
|----------|-----------------|--------|
| Hero Background | 1920x1080 or 1600x1200 | WebP |
| Hero Thumbnail | 200x200 to 400x400 | WebP |
| Product Cards | 800x600 to 1200x900 | WebP |
| About Section | 1200x800 | WebP |

---

## 🎨 **Image Optimization Tips**

1. **Convert to WebP:** Smaller file size, better quality
2. **Compress:** Use tools like TinyPNG or ImageOptim
3. **Resize:** Don't upload 4K images for thumbnails
4. **Lazy Load:** Already implemented in code
5. **Alt Text:** Always add descriptive alt text

---

## 📊 **Current Image Statistics**

- Total images uploaded: **20**
- Format breakdown:
  - WebP: 19 images (95%)
  - JPG: 1 image (5%)
- Average file size: ~300KB
- Largest image: 665KB
- Smallest image: 47KB

---

## ✅ **Images Now Using Cloudinary**

All hero section images are now loading from Cloudinary:
- ✅ No more Unsplash placeholder images
- ✅ Real product photos from your admin panel
- ✅ Properly optimized WebP format
- ✅ Fast loading from Cloudinary CDN

---

## 🔧 **To Replace More Images**

### **Replace About Section Image:**
```javascript
// File: src/components/home/AboutPreview.jsx
// Line ~46
src="https://res.cloudinary.com/dqrldug5h/image/upload/v1785002181/khawaja-carpentry/YOUR_IMAGE_ID.webp"
```

### **Replace Service Section Icons:**
Currently using Lucide icons. Can add product images if needed.

### **Replace Product Page Images:**
Update in respective product page files:
- `src/pages/WoodenPallets.jsx`
- `src/pages/PlasticPallets.jsx`
- `src/pages/WoodenCrates.jsx`
- `src/pages/PlasticJumboBags.jsx`

---

## 📞 **Need Help?**

If you want to replace more images:
1. Tell me which section
2. Tell me which Cloudinary image to use (filename)
3. I'll update the code

**Your images are now live on the website! 🎉**
