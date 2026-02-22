<!-- README: AYSHAMAY ATELIER WEBSITE -->

# Ayshamay Atelier | World-Class Nigerian Bespoke Couture Website

## 🎨 Brand Overview

**Ayshamay Atelier** is a luxury Nigerian fashion house specializing in bespoke wedding dresses, aso-ebi collections, and handcrafted couture. This website embodies:

- **Cinematic storytelling** inspired by veekeejames.com
- **Minimalist design** inspired by Airbnb
- **Visual luxury** inspired by Pinterest's editorial style
- **Nigerian cultural pride** throughout every element
- **World-class craftsmanship** in code and design

---

## 📁 Project Structure

```
AYSHAMAY ATELIER/
├── index.html          # Main website (complete semantic HTML)
├── styles.css          # World-class styling (animations, typography, responsive)
├── script.js           # Interactive features & scroll animations
├── README.md           # This file
└── images/             # Image assets directory
    ├── hero-bride.jpg
    ├── aso-ebi-1.jpg
    ├── bride-moment.jpg
    ├── gele-beading.jpg
    ├── full-dress-shot.jpg
    ├── lace-detail.jpg
    ├── aso-oke.jpg
    ├── silk-movement.jpg
    ├── beading-close.jpg
    ├── bridal-collection.jpg
    ├── aso-ebi-collection.jpg
    ├── mother-collection.jpg
    ├── gala-collection.jpg
    └── woman-walking.jpg
```

---

## 🎯 Design Philosophy

### Visual Direction
- **Color Palette**: Dominant black (#0a0a0a), white backgrounds, subtle gold accents (#c9a961)
- **Typography**: Space Grotesk (modern sans-serif) for clean, confident text
- **Imagery**: High-quality, intentional Nigerian fashion photography
- **Spacing**: Editorial-style generous white space
- **Animations**: Subtle, smooth reveal and fade animations on scroll

### Key Features
✨ **Cinematic Hero Section** - Powerful, minimal intro
✨ **Scroll Storytelling** - Narrative unfolds as you scroll
✨ **Parallax Effects** - Full-width images respond to scroll
✨ **Responsive Design** - Seamless on mobile, tablet, and desktop
✨ **Smooth Interactions** - Elegant transitions throughout
✨ **Accessibility** - Semantic HTML, focus states, ARIA-ready
✨ **Performance** - Lazy loading, optimized animations

---

## 🖼️ CRITICAL: Adding Images

The website is built to showcase high-quality Nigerian fashion photography. You **MUST** replace placeholder image paths with actual images.

### Required Images (14 total)

#### Hero & Main
1. **hero-bride.jpg** (1920x600px) - Bride in stunning Ayshamay couture
2. **full-dress-shot.jpg** (1920x800px) - Full-length dress moment
3. **woman-walking.jpg** (1920x900px) - Woman in motion/presence shot

#### Gallery Section
4. **aso-ebi-1.jpg** (600x600px) - Aso-ebi styling
5. **bride-moment.jpg** (600x600px) - Bride entrance or first look
6. **gele-beading.jpg** (600x600px) - Close-up beading detail

#### Craft Section
7. **lace-detail.jpg** (500x400px) - Hand-selected lace closeup
8. **aso-oke.jpg** (500x400px) - Aso-oke weaving texture
9. **silk-movement.jpg** (500x400px) - Silk fabric flow
10. **beading-close.jpg** (500x400px) - Detailed beading work

#### Collections Section
11. **bridal-collection.jpg** (600x800px) - Bridal dress showcase
12. **aso-ebi-collection.jpg** (600x800px) - Aso-ebi collection
13. **mother-collection.jpg** (600x800px) - Mother of the occasion
14. **gala-collection.jpg** (600x800px) - Gala & event gowns

### Image Sources Recommended
- **Pinterest**: Search "Nigerian bridal fashion", "aso-ebi modern", "Yoruba wedding dress"
- **Instagram**: Nigerian fashion designers (@veekeejames, @ladyacc, etc.)
- **High-res sites**: Pexels, Unsplash (search "luxury fashion Nigeria")
- **Custom photography**: Professional shoot with Nigerian models in aso-oke, lace, beading

### Image Quality Standards
- **Resolution**: Minimum 1920x1080 for hero, 1000x1000 for grid items
- **Format**: JPG or WebP for performance
- **Style**: Clean, editorial, intentional (not cluttered stock photos)
- **Diversity**: Show different occasions, models, occasions
- **Authenticity**: Real Nigerian fashion, celebration moments

---

## 🔧 Customization Guide

### 1. Update Logo/Branding
In `index.html`, line 29:
```html
<div class="logo">
    <span class="logo-text">Ayshamay</span>
</div>
```
Replace "Ayshamay" or add a logo image here.

### 2. Update Contact Information
In `index.html`, scroll to footer section (line ~280):
- Update email address
- Update studio location (Lagos, Nigeria)
- Update phone number if needed

### 3. Update Navigation Links
In `index.html`, lines 32-37:
```html
<li><a href="#story" class="nav-link">The Story</a></li>
<li><a href="#collections" class="nav-link">Collections</a></li>
<li><a href="#craft" class="nav-link">Craftsmanship</a></li>
<li><a href="#contact" class="nav-link">Get In Touch</a></li>
```

### 4. Add Interactive Features
Edit `script.js` to add:
- Contact form functionality
- Instagram feed integration
- Booking/Consultation system
- Newsletter signup
- Client testimonials carousel

### 5. Customize Colors (Optional)
In `styles.css`, line 8-15:
```css
:root {
    --primary-black: #0a0a0a;     /* Change if needed */
    --accent-gold: #c9a961;        /* Precious metal tone */
    /* ... other colors ... */
}
```

---

## 📱 Responsive Breakpoints

- **Desktop**: 1400px (max-width container)
- **Tablet**: 960px and below
- **Mobile**: 768px and below
- **Small Mobile**: 480px and below

All designs automatically adapt. Test on:
- iPhone 12 (390px)
- iPad (768px)
- Desktop (1920px)

---

## ⚡ Performance Optimizations

✅ **Implemented:**
- Lazy loading images with Intersection Observer
- CSS animations (GPU-accelerated)
- Debounced scroll events
- Optimized font loading
- Mobile-first responsive design
- Minimal JavaScript (no frameworks)

✅ **To Further Optimize:**
- Use WebP format for images with JPG fallback
- Minify CSS and JavaScript for production
- Use a CDN for image delivery
- Add service workers for offline support
- Implement critical CSS inlining

---

## 🚀 Deployment

### Option 1: GitHub Pages (Free)
```bash
1. Create GitHub repository
2. Push files to main branch
3. Enable GitHub Pages in settings
4. Site goes live at username.github.io/ayshamay-atelier
```

### Option 2: Netlify (Free + Pro)
```bash
1. Connect GitHub repo to Netlify
2. Set build command: (none needed, static site)
3. Set publish directory: /
4. Deploy
```

### Option 3: Custom Domain
```bash
1. Purchase domain (godaddy.com, namecheap.com)
2. Point nameservers to hosting provider
3. Deploy static files to hosting
4. Set up SSL certificate
```

### Option 4: Professional Hosting (Recommended)
- **Kinsta**, **WP Engine**, or **Bluehost**
- Ensure they support static HTML
- Use caching for maximum speed

---

## 📊 Analytics & Tracking

Add Google Analytics (replace `YOUR_MEASUREMENT_ID`):

```html
<!-- Add to <head> in index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_MEASUREMENT_ID');
</script>
```

---

## 🎬 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ⚠️ IE11 (minimal features, consider redirect)

---

## 📋 Checklist Before Launch

- [ ] Replace all placeholder images with high-quality Nigerian fashion photos
- [ ] Update contact information and social media links
- [ ] Test on mobile, tablet, desktop
- [ ] Test forms and CTAs
- [ ] Set up email contact system
- [ ] Add Google Analytics
- [ ] Set up SSL certificate (HTTPS)
- [ ] Optimize images (compress without losing quality)
- [ ] Test page load speed (aim for <3 seconds)
- [ ] Set up email verification for inquiries
- [ ] Create FAQ page or contact form responses
- [ ] Add Instagram feed integration (optional)

---

## 🎨 Design System

### Typography Scale
- **H1**: Clamp(3rem, 8vw, 7rem) - Hero titles
- **H2**: Clamp(2rem, 5vw, 4.5rem) - Section titles
- **H3**: Clamp(1.5rem, 3vw, 2.5rem) - Subsections
- **Body**: 1rem - Default text
- **Small**: 0.9rem - Secondary text

### Spacing Scale (in CSS Variables)
- xs: 0.5rem
- sm: 1rem
- md: 2rem
- lg: 4rem
- xl: 6rem
- 2xl: 8rem

---

## 🔒 Security

- [ ] Use HTTPS (SSL certificate)
- [ ] Validate all form input
- [ ] Sanitize user uploads
- [ ] Keep dependencies updated
- [ ] Regular security audits
- [ ] Privacy policy and terms

---

## 📞 Support & Maintenance

### Regular Tasks
- Update images seasonally
- Monitor analytics for user behavior
- Respond to inquiries promptly
- Test forms monthly
- Check for broken links
- Update collection images as new pieces available

### Troubleshooting

**Images not showing?**
- Verify file paths match exactly
- Check file exists in `/images/` folder
- Ensure image format is supported

**Animations not working?**
- Check browser compatibility
- Verify JavaScript is enabled
- Test on different browsers

**Responsive design issues?**
- Test with browser DevTools
- Check viewport meta tag is present
- Verify CSS media queries are correct

---

## 💡 Future Enhancements

🔄 **Consider Adding:**
- E-commerce integration for direct sales
- Virtual try-on (AR/VR feature)
- Client testimonials carousel
- Blog for fashion tips
- Video testimonials
- Before/after consultation gallery
- Fabric swatches & texture samples (interactive)
- Booking calendar integration
- Stockist/affiliate locations map
- Press coverage & mentions section
- Lookbook PDF downloads
- Monthly collection drops (seasonal updates)

---

## 📞 Contact & Customization

For additional customization:
- Modify `styles.css` for unique color schemes
- Update `script.js` for enhanced interactivity
- Extend `index.html` with new sections
- Add CMS integration (optional)

---

## ✨ Final Notes

This website is built to be:
- **Legendary**: World-class design that stands out
- **Authentic**: Deeply rooted in Nigerian culture
- **Intentional**: Every element has purpose
- **Emotional**: Moves visitors and inspires booking

The code is clean, maintainable, and ready for growth. Remember:

> "In our culture, we do not 'dress up.' We show up."
> — Ayshamay Atelier

---

**Built with pride for Nigerian luxury. Crafted for the unforgettable.**

*Last Updated: February 2025*
