# Quick Setup Guide

## 5-Minute Setup

### Step 1: Install Dependencies
```bash
cd portfolio-website
npm install
```

### Step 2: Add Your Profile Image
1. Create or use your profile photo
2. Save as `profile.jpg` (800×800px recommended)
3. Place in `public/` folder
4. Path should be: `portfolio-website/public/profile.jpg`

### Step 3: Update Your Information
Edit `src/data/cvData.js`:
- Change name, email, phone
- Update social media links
- Modify experience, education, projects
- Update skills and certifications

### Step 4: Run Locally
```bash
npm run dev
```
Visit: http://localhost:3000

### Step 5: Deploy
```bash
npm run build
# Test locally first
npm start
```

Then deploy to Vercel or your preferred platform.

---

## File Locations Reference

```
public/profile.jpg                    ← Add your image here
src/data/cvData.js                    ← Update all your data
src/components/Hero.jsx               ← Customize typewriter text
src/styles/globals.css               ← Modify styles if needed
```

---

## Common Updates

### Change Your Name
`src/data/cvData.js` (Line 1-5):
```javascript
personal: {
  name: "YOUR NAME",           // ← Change here
  title: "AI Engineer",         // ← And here
}
```

### Add Social Links
`src/data/cvData.js` (Line 15-20):
```javascript
social: {
  github: "https://github.com/YOUR_USERNAME",      // Update
  linkedin: "https://linkedin.com/in/YOUR_PROFILE", // Update
  whatsapp: "https://wa.me/YOUR_NUMBER",           // Update
}
```

### Add Projects
`src/data/cvData.js` (projects array):
```javascript
{
  id: 4,
  title: "Your Project Title",
  description: "Project description",
  duration: "Month Year - Month Year",
  technologies: ["Tech1", "Tech2", "Tech3"],
  highlights: ["Point 1", "Point 2"],
  link: "#projects",
}
```

### Customize Colors
`tailwind.config.js`:
```javascript
colors: {
  // Modify the color scheme
}
```

---

## Deployment Commands

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Build Only
```bash
npm run build
npm start
```

---

## Checklist Before Launch

- [ ] Profile image added to `public/profile.jpg`
- [ ] Updated all personal information
- [ ] Verified all social media links work
- [ ] Tested locally: `npm run dev`
- [ ] Built successfully: `npm run build`
- [ ] Mobile responsiveness checked
- [ ] All sections have proper content
- [ ] Chatbot knowledge base updated

---

## Troubleshooting

**Port 3000 already in use?**
```bash
# Use different port
npm run dev -- -p 3001
```

**Image not showing?**
- Ensure `profile.jpg` exists in `public/` folder
- Check file is actual image (not renamed text file)
- Try clearing browser cache

**Changes not showing?**
```bash
# Restart dev server
Ctrl+C
npm run dev
```

---

**Need help?** Check README.md for detailed documentation.
