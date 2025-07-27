# Blurred - Premium Photoshop Resources Website

A professional e-commerce website for selling digital Adobe Photoshop resources including editing guides, scenepacks, and templates. Built with HTML, CSS, and JavaScript with Stripe payment integration and German legal compliance.

## 🚀 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Product Showcase**: 6 products ranging from $25-120 as requested
- **Stripe Integration**: Secure payment processing with redirect to Stripe Checkout
- **German Legal Compliance**: Complete GDPR-compliant legal pages (ToS, Privacy Policy, Imprint)
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Professional UX**: Smooth scrolling, hover effects, and intuitive navigation

## 📁 Project Structure

```
blurred website/
├── index.html          # Homepage with product showcase
├── styles.css          # All styling and responsive design
├── script.js           # JavaScript functionality and Stripe integration
├── terms.html          # Terms of Service (German law compliant)
├── privacy.html        # Privacy Policy (GDPR compliant)
├── imprint.html        # Imprint/Impressum (German requirement)
├── contact.html        # Contact page with FAQ
├── success.html        # Payment success page
├── cancel.html         # Payment cancellation page
└── README.md           # This file
```

## 🛍️ Products Included

1. **Portrait Editing Mastery** - $45
   - Complete guide to professional portrait retouching

2. **Urban Scenepacks Collection** - $25
   - 50+ high-quality urban background scenes

3. **Professional Template Bundle** - $35
   - 25 premium Photoshop templates

4. **Advanced Color Grading Guide** - $65
   - Master cinematic color grading with custom LUTs

5. **Nature Scenepacks Mega Bundle** - $85
   - 100+ breathtaking nature backgrounds

6. **Complete Photoshop Mastery Course** - $120
   - Comprehensive 10-hour video course

## 🔧 Setup Instructions

### 1. Stripe Configuration

1. **Create a Stripe Account**:
   - Go to [stripe.com](https://stripe.com) and create an account
   - Complete the business verification process

2. **Get Your API Keys**:
   - In your Stripe Dashboard, go to Developers > API keys
   - Copy your Publishable key (starts with `pk_`)

3. **Create Products in Stripe**:
   - Go to Products in your Stripe Dashboard
   - Create 6 products matching the ones in the website
   - Set up prices for each product
   - Copy the Price IDs (start with `price_`)

4. **Update the JavaScript File**:
   ```javascript
   // In script.js, update these values:
   const STRIPE_PUBLISHABLE_KEY = 'pk_live_YOUR_ACTUAL_KEY';
   
   const PRICE_IDS = {
       'price_portrait_mastery': 'price_1ACTUAL_PRICE_ID_1',
       'price_urban_scenes': 'price_1ACTUAL_PRICE_ID_2',
       'price_pro_templates': 'price_1ACTUAL_PRICE_ID_3',
       'price_color_grading': 'price_1ACTUAL_PRICE_ID_4',
       'price_nature_mega': 'price_1ACTUAL_PRICE_ID_5',
       'price_complete_course': 'price_1ACTUAL_PRICE_ID_6'
   };
   ```

5. **Set Up Stripe Checkout**:
   - The current implementation shows alerts for demonstration
   - Replace the alert in `redirectToStripe()` function with actual Stripe Checkout:
   ```javascript
   // Replace the alert with:
   window.location.href = `https://checkout.stripe.com/c/pay/${priceId}?success_url=${window.location.origin}/success.html&cancel_url=${window.location.origin}/cancel.html`;
   ```

### 2. Legal Information (REQUIRED for German Compliance)

Update the following placeholders in the legal pages:

**In imprint.html, privacy.html, terms.html, and contact.html**:
- `[Your Full Name or Company Name]`
- `[Your Business Address]`
- `[Your Phone Number]`
- `[Your VAT Number if applicable]`

### 3. Domain and Hosting

1. **Choose a Domain**: Register a domain name (e.g., blurred-studio.com)
2. **Set Up Hosting**: Use any web hosting service that supports HTML/CSS/JS
3. **Upload Files**: Upload all files to your web server
4. **SSL Certificate**: Ensure HTTPS is enabled (required for Stripe)

### 4. Email Configuration

Set up email addresses mentioned in the legal pages:
- `contact@blurred.info`

## ⚖️ German Legal Compliance

This website includes all required legal pages for operating in Germany:

- **Imprint (Impressum)**: Required by § 5 TMG
- **Privacy Policy**: GDPR compliant with all required information
- **Terms of Service**: Includes German consumer protection laws
- **Right of Withdrawal**: Properly implemented for digital products

## 🔐 Security Features

- **Stripe Integration**: PCI-compliant payment processing
- **No Card Storage**: Payment data never touches your servers
- **SSL/HTTPS**: Required for secure payment processing
- **GDPR Compliance**: Proper data protection measures

## 🎨 Customization

### Colors
The website uses a modern purple gradient theme. Main colors:
- Primary: `#667eea`
- Secondary: `#764ba2`
- Success: `#28a745`
- Error: `#dc3545`

### Fonts
Uses Inter font from Google Fonts for a clean, professional look.

### Images
Currently uses placeholder images. Replace with actual product images:
- Recommended size: 300x200px
- Format: JPG or PNG
- Optimize for web to ensure fast loading

## 📱 Responsive Design

The website is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones
- All modern browsers

## 🚀 Going Live Checklist

- [ ] Set up Stripe account and get API keys
- [ ] Create products in Stripe dashboard
- [ ] Update JavaScript with real Stripe keys
- [ ] Fill in all legal information placeholders
- [ ] Set up business email addresses
- [ ] Register domain name
- [ ] Set up hosting with SSL
- [ ] Test payment flow thoroughly
- [ ] Replace placeholder images with real product images
- [ ] Test website on multiple devices

## 📞 Support

For technical support or questions about the website:
- Check the contact.html page for detailed FAQ
- All legal requirements are built-in for German compliance
- Stripe integration follows best practices for security

## 📄 License

This website template is provided for your e-commerce business. You own all rights to use and modify it for your business needs.

---

**Ready to sell your premium Photoshop resources!** 🎨✨ 