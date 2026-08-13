# 🔧 VERCEL DEPLOYMENT - IMAGE FIX

## ❌ ISSUE:
Images not loading on production (Vercel) because environment variables are missing.

## ✅ SOLUTION:

### **Step 1: Add Environment Variables to Vercel**

1. Go to Vercel Dashboard: https://vercel.com/dashboard
2. Select project: `fiasal-fareed-woods`
3. Go to **Settings** → **Environment Variables**
4. Add these variables:

```bash
# Required for images to load
VITE_PRODUCT_IMAGE_BASE_URL=https://mujahidhussaincarpentry.store/images/

# Site information
VITE_SITE_NAME=FIASAL FAREED WOODS TR L.L.C
VITE_SITE_URL=https://fiasal-fareed-woods.vercel.app

# Contact information
VITE_WHATSAPP_NUMBER=923321716508
VITE_CONTACT_PHONE=03321716508
VITE_CONTACT_SECONDARY_PHONE=03321716508
VITE_CONTACT_EMAIL=nh534392@gmail.com

# Already configured (check if present)
MONGODB_URI=mongodb+srv://Nazir:%40Nazir521315@cluster0.9plm9ji.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
MONGODB_DB=khawaja_carpentry

CLOUDINARY_CLOUD_NAME=dqrldug5h
CLOUDINARY_API_KEY=353911612528378
CLOUDINARY_API_SECRET=Fo5ZNkmessqLLRq6Ucm3WFJDT8U
CLOUDINARY_FOLDER=khawaja-carpentry

ADMIN_USERNAME=Nazir
ADMIN_PASSWORD=@Nazir9697

SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=nh534392@gmail.com
SMTP_PASS=nyhgeumobgffnxxl
SMTP_FROM=FIASAL FAREED WOODS TR L.L.C <nh534392@gmail.com>

INQUIRY_TO_EMAIL=nh534392@gmail.com
ALLOWED_ORIGINS=https://fiasal-fareed-woods.vercel.app
NODE_ENV=production
PORT=5000
```

### **Step 2: Redeploy**

After adding environment variables:
1. Go to **Deployments** tab
2. Click on latest deployment
3. Click **"Redeploy"** button
4. Wait for build to complete (2-3 minutes)

**OR**

Simply push any change to GitHub and it will auto-deploy.

---

## 🎯 QUICK FIX (If above doesn't work):

### **Option 1: Use Git Push**
```bash
git add .
git commit -m "Add environment variables"
git push
```

### **Option 2: Use Vercel CLI**
```bash
vercel --prod
```

---

## 📊 WHICH IMAGES WILL WORK:

### **✅ Already Working (Cloudinary):**
- Homepage hero section
- Homepage products preview
- Homepage about section
- Gallery page (12 images)
- About page
- Testimonials page
- Products page hero

### **⚠️ Need Environment Variable (External Server):**
- Wooden Pallets detail page (20 size images)
- Wooden Crates detail page
- Plastic Pallets detail page (5 size images)
- Plastic Jumbo Bags detail page

**These load from:** `https://mujahidhussaincarpentry.store/images/`

---

## 🔍 HOW TO VERIFY:

### **After Redeployment:**
1. Open: https://fiasal-fareed-woods.vercel.app/wooden-pallets
2. Check if pallet images load
3. Open: https://fiasal-fareed-woods.vercel.app/gallery
4. Check if all 12 gallery images load
5. Open: https://fiasal-fareed-woods.vercel.app/
6. Check if hero section images load

### **If Images Still Don't Load:**
1. Check browser console for errors (F12)
2. Look for CORS errors
3. Check if URLs are correct
4. Verify environment variables in Vercel

---

## 💡 ALTERNATIVE SOLUTION:

### **Upload All Images to Cloudinary:**

If external server images don't work, upload via Admin Panel:

1. Go to: https://fiasal-fareed-woods.vercel.app/admin
2. Login with credentials
3. Go to **Media Library**
4. Upload all product images
5. Update products to use new Cloudinary URLs

**This will make ALL images load from Cloudinary (more reliable).**

---

## 📞 QUICK COMMANDS:

### **To check current environment variables:**
```bash
vercel env ls
```

### **To add environment variable:**
```bash
vercel env add VITE_PRODUCT_IMAGE_BASE_URL
```

### **To remove environment variable:**
```bash
vercel env rm VITE_PRODUCT_IMAGE_BASE_URL
```

---

## ✅ FINAL CHECKLIST:

After fixing:
- [ ] Environment variables added to Vercel
- [ ] Project redeployed
- [ ] Homepage images loading
- [ ] Hero section images loading
- [ ] Gallery images loading (12 images)
- [ ] Product detail page images loading
- [ ] No console errors
- [ ] No broken images

---

## 🎯 EXPECTED RESULT:

All images should load properly including:
- Homepage: 10+ images
- Hero: 4 product images (rotating)
- Gallery: 12 product images
- About: 8+ images
- Product pages: 20+ product images each

**Total: 50+ images across website**

---

*Last Updated: August 13, 2026*  
*Status: Ready to deploy*
