# Portfolio Website - Complete Setup & Customization Guide

## 📁 Project Overview

Your AI Engineer portfolio is now ready! It includes:
- ✅ Modern black & white design (Apple-style)
- ✅ Fully responsive layout (mobile, tablet, desktop)
- ✅ Smooth animations & transitions
- ✅ Hero section with typewriter effect
- ✅ About, Experience, Projects, Education, Skills sections
- ✅ AI Chatbot with knowledge base
- ✅ Social media integration
- ✅ All extracted from your CV

---

## 🖼️ Adding Your Profile Image

### What You Need
- A high-quality profile photo
- Recommended: 800x800 pixels (but any size works)
- Formats: JPG, PNG, or WebP

### How to Add

1. **Prepare your image:**
   - Save your profile photo as `profile.jpg`
   - Or `profile.png` or `profile.webp`

2. **Place it in the correct location:**
   ```
   portfolio-website/
   └── public/
       └── profile.jpg  ← Place your image here
   ```

3. **Verify it works:**
   ```bash
   npm run dev
   ```
   Visit http://localhost:3000 and check:
   - Hero section (right side)
   - About section (left side)

4. **If image doesn't appear:**
   - Check filename matches exactly: `profile.jpg`
   - Clear browser cache (Ctrl+Shift+Delete)
   - Check browser console for errors
   - Restart dev server: `npm run dev`

---

## ✏️ Updating Your Information

All your information is in **one file**: `src/data/cvData.js`

### Personal Information

```javascript
personal: {
  name: "Qaiser Farooq",           // ← Your name
  title: "AI Engineer",             // ← Your title
  email: "qaiserfarooq285@gmail.com", // ← Your email
  phone: "+92 315 0635980",         // ← Your phone
  location: "Pakistan",             // ← Your location
  bio: "Master's student...",  // ← Your bio (edit as needed)
  social: {
    github: "https://github.com/Qaiserfarooq285",
    linkedin: "https://www.linkedin.com/in/qaiserfarooq285",
    whatsapp: "https://wa.me/923150635980",
    instagram: "https://instagram.com", // ← Optional
  },
}
```

**To Update:** Replace all placeholder values with your actual information.

### Hero Section Typewriter Text

Change the text that cycles in the typewriter effect:

```javascript
// In Hero.jsx component, line ~18
const typewriterTexts = [
  'I build AI systems',                    // ← Customize these
  'I work on Machine Learning',
  'I create intelligent solutions',
];
```

### Experience Section

Update your work experience:

```javascript
experience: [
  {
    id: 1,
    role: "Junior AI Engineer",
    company: "DH Solutions",
    duration: "November 2023 - Present",
    description: "Description of your role...",
    highlights: [
      "Achievement 1",
      "Achievement 2",
      "Achievement 3",
    ],
  },
  // Add more jobs as needed
]
```

### Projects Section

Add or update your projects:

```javascript
projects: [
  {
    id: 1,
    title: "Your Project Name",
    description: "What you built and why",
    duration: "Start Date - End Date",
    technologies: ["Python", "TensorFlow", "NLP"],
    highlights: [
      "Key feature 1",
      "Key feature 2",
      "Key feature 3",
    ],
    link: "#projects",
  },
  // Add more projects
]
```

### Education Section

Update your education:

```javascript
education: [
  {
    id: 1,
    degree: "Master of Science",
    field: "Artificial Intelligence",
    institution: "Comsats University Islamabad",
    location: "Islamabad, Pakistan",
    duration: "September 2024 - September 2026",
    cgpa: "3.95",
    status: "Continuing",
  },
  // Add more education entries
]
```

### Skills Section

Update your technical skills:

```javascript
skills: {
  languages: ["Python", "C/C++", "HTML", "CSS", "JavaScript"],
  frameworks: ["TensorFlow", "Keras", "PyTorch", "React", "Scikit-learn"],
  tools: ["Docker", "Git", "MySQL", "Jupyter", "PyCharm", "VS Code"],
  soft: ["Problem Solving", "Communication", "Leadership"],
}
```

### Chatbot Knowledge Base

Update what the chatbot can answer:

```javascript
export const chatbotKnowledge = {
  availability: "Yes, I'm available for...",
  skills_summary: "I specialize in...",
  education_summary: "I'm pursuing...",
  experience_summary: "I'm a...",
  projects_summary: "My recent projects include...",
};
```

---

## 🚀 Running the Project

### First Time Setup

```bash
# Navigate to project
cd portfolio-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

### Daily Development

```bash
npm run dev
```

### Build for Production

```bash
npm run build
npm start
```

---

## 🎨 Customization Options

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  dark: {
    50: '#f9fafb',
    // ... modify as needed
  }
}
```

### Change Fonts

Edit `tailwind.config.js` (currently using Inter from Google Fonts):

```javascript
fontFamily: {
  sans: ['Your Font', 'system-ui', 'sans-serif'],
}
```

### Modify Animations

Edit `src/styles/globals.css` and `tailwind.config.js`

### Change Spacing

Edit `tailwind.config.js` for custom spacing, margins, padding values

---

## 📤 Deployment

### Option 1: Vercel (Recommended & Easiest)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - That's it! Your site is live!

### Option 2: Netlify

1. Build locally: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `.next` folder
4. Your site is live!

### Option 3: Your Own Server

```bash
npm run build
npm start
# Your site runs on port 3000
```

---

## 📋 Pre-Launch Checklist

Before launching your portfolio, verify:

- [ ] Profile image is in `public/profile.jpg`
- [ ] All personal information updated in `cvData.js`
- [ ] Experience entries are accurate and up-to-date
- [ ] Projects are added and descriptions are compelling
- [ ] Education info is correct
- [ ] Skills reflect your actual abilities
- [ ] Chatbot responses feel personal
- [ ] Social media links are correct
- [ ] Tested on mobile (use DevTools)
- [ ] All sections display properly
- [ ] Animations work smoothly
- [ ] No console errors (`F12` → Console)
- [ ] Typewriter text is customized

---

## 🐛 Troubleshooting

### Image Not Showing

**Problem:** Profile image placeholder appears instead of your photo

**Solutions:**
1. Check file exists: `portfolio-website/public/profile.jpg`
2. Check exact filename (case-sensitive)
3. Ensure it's an actual image file
4. Try different format: `profile.png` or `profile.webp`
5. Clear cache: Ctrl+Shift+Delete
6. Restart: `npm run dev`

### Changes Not Appearing

**Problem:** You updated `cvData.js` but changes don't show

**Solutions:**
1. Save the file (Ctrl+S)
2. Restart dev server: Stop with Ctrl+C, then `npm run dev`
3. Hard refresh browser: Ctrl+Shift+R
4. Check syntax in JavaScript file (missing commas, quotes)

### Build Errors

**Problem:** `npm run build` fails

**Solutions:**
```bash
# Clear and reinstall
rm -rf node_modules .next package-lock.json
npm install
npm run build
```

### Port 3000 Already in Use

**Problem:** "Port 3000 is already in use"

**Solutions:**
```bash
# Use different port
npm run dev -- -p 3001
```

### Slow on Mobile

**Problem:** Site feels sluggish on phone

**Solutions:**
1. Make sure images are optimized
2. Check for console errors (DevTools)
3. Try on different mobile browser
4. Build and test production: `npm run build && npm start`

---

## 📚 File Reference

Key files you might want to customize:

| File | Purpose |
|------|---------|
| `src/data/cvData.js` | All your profile data |
| `src/app/page.jsx` | Main page layout |
| `src/components/Hero.jsx` | Hero section |
| `src/components/About.jsx` | About section |
| `src/styles/globals.css` | Global styles |
| `tailwind.config.js` | Color & design config |
| `public/profile.jpg` | Your profile image |

---

## 💡 Pro Tips

1. **Test Responsiveness:**
   - Open DevTools (F12)
   - Click device icon (top-left)
   - Test on iPhone, iPad, etc.

2. **Performance:**
   - Use high-quality but compressed images
   - Validate syntax regularly
   - Test production build: `npm run build && npm start`

3. **SEO:**
   - All metadata is in `src/app/layout.jsx`
   - Update title and description
   - Ensure social links work

4. **Maintenance:**
   - Keep `cvData.js` updated
   - Update projects as you complete new ones
   - Review chatbot responses regularly

---

## 🆘 Need Help?

1. **Check README.md** - Full documentation
2. **Check SETUP.md** - Quick start guide
3. **Browser Console** - Press F12, check for errors
4. **GitHub Issues** - Search for similar problems

---

## 📝 Next Steps

1. ✅ Add your profile image
2. ✅ Update all information in `cvData.js`
3. ✅ Test locally: `npm run dev`
4. ✅ Verify everything looks good
5. ✅ Build: `npm run build`
6. ✅ Deploy to Vercel/Netlify
7. ✅ Share your portfolio!

---

**Your portfolio is now ready! Customize it with your information and launch it to the world. Good luck! 🚀**

---

## Version Info

- Next.js: 14.0.0
- Tailwind CSS: 3.3.0
- Framer Motion: 10.16.4
- Node.js Required: 18+

Have fun building! 🎉
