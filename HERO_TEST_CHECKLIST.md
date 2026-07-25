# ✅ Hero Section - Testing Checklist

## 🧪 Manual Testing

### **Visual Tests:**
- [ ] Hero section displays at full viewport height
- [ ] Background image visible with dark overlay
- [ ] Main heading "Manufacturer & Supplier" visible
- [ ] Product heading changes when clicking cards
- [ ] Product description changes when clicking cards
- [ ] 4 product cards visible at bottom
- [ ] Product thumbnails load correctly
- [ ] Active card has blue border
- [ ] CTA buttons visible and styled correctly

### **Animation Tests:**
- [ ] Background zooms slowly (Ken Burns effect)
- [ ] Product cards fade up on page load
- [ ] Cards stagger (appear one after another)
- [ ] Content fades smoothly when switching products
- [ ] Background fades when switching products
- [ ] Hover on cards: lifts upward
- [ ] Hover on cards: image scales
- [ ] Hover on cards: bottom border animates
- [ ] Hover on buttons: lifts upward
- [ ] Arrow icon pulses on primary button

### **Interaction Tests:**
- [ ] Click wooden pallets card → content changes
- [ ] Click plastic pallets card → content changes
- [ ] Click wooden crates card → content changes
- [ ] Click jumbo bags card → content changes
- [ ] Active card highlighted correctly
- [ ] Click "Get Free Quote" → opens WhatsApp
- [ ] Click "View Products" → navigates to /products
- [ ] Multiple clicks don't break animations

### **Responsive Tests:**

#### Desktop (1920x1080):
- [ ] 4 cards in one row
- [ ] Text readable
- [ ] Scroll indicator visible
- [ ] All animations smooth

#### Laptop (1366x768):
- [ ] 4 cards in one row
- [ ] Text fits properly
- [ ] No overflow

#### Tablet (768x1024):
- [ ] 2 cards per row (2x2 grid)
- [ ] Text adjusts size
- [ ] Touch works on cards

#### Mobile (375x667):
- [ ] 1 card per column (stacked)
- [ ] Text readable
- [ ] Buttons stack vertically
- [ ] Touch targets large enough
- [ ] No horizontal scroll

---

## 🔍 Browser Tests

### **Chrome:**
- [ ] Animations smooth
- [ ] Backdrop blur works
- [ ] Images load
- [ ] No console errors

### **Firefox:**
- [ ] Animations smooth
- [ ] Backdrop blur works
- [ ] Images load
- [ ] No console errors

### **Safari (Mac/iOS):**
- [ ] Animations smooth
- [ ] Backdrop blur works
- [ ] Images load
- [ ] No console errors
- [ ] Touch gestures work (iOS)

### **Edge:**
- [ ] Animations smooth
- [ ] Backdrop blur works
- [ ] Images load
- [ ] No console errors

---

## ⚡ Performance Tests

### **Lighthouse Audit:**
Run: `npm run build && npm run preview`
Then run Lighthouse in Chrome DevTools

- [ ] Performance Score: 90+
- [ ] Accessibility Score: 95+
- [ ] Best Practices: 95+
- [ ] SEO Score: 100

### **Network Tests:**

#### Fast 4G:
- [ ] Hero loads < 2s
- [ ] Animations start immediately
- [ ] Images progressive load

#### Slow 3G:
- [ ] Hero loads < 5s
- [ ] Low-quality images shown first
- [ ] No layout shift

### **Image Optimization:**
- [ ] Background images < 200KB each
- [ ] Thumbnails < 50KB each
- [ ] Using WebP format (recommended)
- [ ] Correct dimensions (1920x1080 for backgrounds)

---

## 🐛 Error Tests

### **Console Checks:**
Open Browser DevTools Console

- [ ] No React errors
- [ ] No PropTypes warnings
- [ ] No 404 image errors
- [ ] No framer-motion errors

### **Network Checks:**
Open Browser DevTools Network tab

- [ ] All images load (200 status)
- [ ] No failed requests
- [ ] Reasonable file sizes
- [ ] Correct caching headers

### **Accessibility Checks:**

#### Keyboard Navigation:
- [ ] Tab to "Get Free Quote" button
- [ ] Tab to "View Products" button
- [ ] Tab to first product card
- [ ] Tab through all product cards
- [ ] Enter key activates cards
- [ ] Enter key clicks buttons

#### Screen Reader:
- [ ] Hero heading announced
- [ ] Product headings announced
- [ ] Buttons have clear labels
- [ ] Images have alt text
- [ ] Active card state announced

---

## 📊 Code Quality Tests

### **ESLint:**
```bash
npm run lint
```
- [ ] No errors
- [ ] No warnings

### **PropTypes:**
- [ ] HeroProductCard has PropTypes
- [ ] No PropTypes warnings in console

### **File Structure:**
- [ ] heroData.js exists
- [ ] HeroProductCard.jsx exists
- [ ] HeroSection.jsx updated
- [ ] No unused imports
- [ ] Clean code (no console.logs)

---

## 🎯 Business Logic Tests

### **Data Validation:**
- [ ] 4 products in heroProducts array
- [ ] Each product has all required fields
- [ ] Thumbnail URLs valid
- [ ] Background image URLs valid
- [ ] Link URLs valid
- [ ] WhatsApp number correct
- [ ] Button text correct

### **Content Tests:**
- [ ] Main heading matches requirement
- [ ] Main description matches requirement
- [ ] Product headings match requirement
- [ ] Product descriptions match requirement
- [ ] Subtitles match requirement

---

## 🔄 Integration Tests

### **Routing:**
- [ ] Clicking logo navigates to home
- [ ] "View Products" uses SPA navigation (no page reload)
- [ ] Browser back button works
- [ ] Direct URL access works

### **Other Components:**
- [ ] Services section appears below hero
- [ ] About section appears below services
- [ ] Footer visible
- [ ] Navbar functional

---

## 📱 Device Tests

Test on actual devices if possible:

### **iPhone:**
- [ ] iPhone 13 Pro
- [ ] iPhone SE
- [ ] Safari browser
- [ ] Touch works
- [ ] Smooth scrolling

### **Android:**
- [ ] Samsung Galaxy S21
- [ ] Google Pixel
- [ ] Chrome browser
- [ ] Touch works
- [ ] Smooth scrolling

### **Tablet:**
- [ ] iPad Pro
- [ ] iPad Mini
- [ ] Android Tablet

---

## 🎨 Visual Regression Tests

### **Screenshot Comparison:**
Take screenshots at:
1. Desktop 1920x1080
2. Laptop 1366x768
3. Tablet 768x1024
4. Mobile 375x667

Compare:
- [ ] Hero height consistent
- [ ] Text alignment correct
- [ ] Cards positioned correctly
- [ ] No layout shifts

---

## ⏱️ Timing Tests

### **Animation Timing:**
Use DevTools Performance tab

- [ ] Background zoom: ~1.2s
- [ ] Card stagger: 0.1s per card
- [ ] Hover animations: 0.3-0.5s
- [ ] Content fade: 0.5s
- [ ] Total page load: < 3s

---

## 🚨 Edge Cases

### **No JavaScript:**
- [ ] Fallback content shown
- [ ] First product visible
- [ ] Buttons still clickable

### **Slow Network:**
- [ ] Placeholder shown while loading
- [ ] No broken layout
- [ ] Progressive enhancement

### **Old Browsers:**
- [ ] Graceful degradation
- [ ] Backdrop blur fallback
- [ ] Basic functionality works

---

## 📝 Test Results Template

```
Test Date: _______________
Tester: _______________
Environment: Production / Staging / Local

✅ Passed: ___/100
❌ Failed: ___/100
⚠️  Warnings: ___

Critical Issues:
- 
- 

Minor Issues:
- 
- 

Notes:
- 
- 

Overall Status: PASS / FAIL / NEEDS REVIEW
```

---

## 🎯 Quick Smoke Test (5 minutes)

If short on time, test these essentials:

1. [ ] Hero loads without errors
2. [ ] Click each product card once
3. [ ] Check mobile view
4. [ ] Click both CTA buttons
5. [ ] Check console for errors

---

## 🆘 If Tests Fail

### **Hero doesn't appear:**
1. Check if HeroSection imported in Home.jsx
2. Check for JavaScript errors
3. Verify heroData.js exports correctly

### **Animations jerky:**
1. Check CPU usage
2. Reduce animation complexity
3. Test on different device

### **Cards not clickable:**
1. Check z-index
2. Remove any overlapping elements
3. Verify onClick handler

### **Images don't load:**
1. Check URLs in heroData.js
2. Verify CORS headers
3. Check network tab for 404s

---

**Testing Complete? Deploy with confidence! 🚀**
