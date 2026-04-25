# GitHub Pages Setup Instructions

## 🚀 Deploy Your Portfolio to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `portfolio`
3. Description: `Interactive portfolio with parallax effects and bee navigation`
4. Set as **Public**
5. **Do NOT** initialize with README, .gitignore, or license
6. Click "Create repository"

### Step 2: Push to GitHub

Once the repository is created, run:

```bash
cd ~/portfolio
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Build and deployment**, select **Source**: `GitHub Actions`
4. Click **Configure** next to GitHub Actions
5. Select **Static HTML** workflow
6. Click **Commit changes**

Or, use the simpler approach:

1. Go to **Settings** → **Pages**
2. Under **Build and deployment**, select **Source**: `Deploy from a branch`
3. Select **Branch**: `main` and folder: `/ (root)` or `/dist`
4. Click **Save**

### Step 4: Wait for Deployment

GitHub will automatically build and deploy your portfolio. This usually takes 1-3 minutes.

### Step 5: Access Your Portfolio

Once deployed, your portfolio will be available at:
```
https://Nobabkh.github.io/portfolio/
```

## 🎨 Features of Your Portfolio

### Interactive Elements
- **Animated Bee**: Flies around the screen, avoiding text collisions as you scroll
- **Parallax Scrolling**: Multiple layers move at different speeds for depth effect
- **Smooth Animations**: Fade-in effects as sections come into view

### Sections
1. **Hero**: Eye-catching introduction with floating elements
2. **About**: Personal information with animated stats
3. **Skills**: Categorized technical skills with hover effects
4. **Projects**: 6 featured projects with status badges
5. **Experience**: Timeline of your work history
6. **Contact**: Easy ways to reach you

### Design Features
- **Glass Morphism**: Modern frosted glass effects
- **Gradient Backgrounds**: Beautiful color transitions
- **Mobile Responsive**: Looks great on all devices
- **Smooth Scrolling**: Enhanced user experience

## 🔧 Customization

### Update Content
Edit these files to customize your portfolio:
- `src/components/Hero.tsx` - Hero section
- `src/components/About.tsx` - About section
- `src/components/Skills.tsx` - Skills section
- `src/components/Projects.tsx` - Projects section
- `src/components/Experience.tsx` - Experience section
- `src/components/Contact.tsx` - Contact section

### Change Colors
Edit `src/index.css` and `tailwind.config.js` to customize:
- Gradient colors
- Background patterns
- Color schemes

### Adjust Bee Behavior
Edit `src/App.tsx` to modify:
- Bee speed
- Collision detection
- Movement patterns

## 📱 Testing Locally

```bash
cd ~/portfolio
npm run dev
```

Visit `http://localhost:5173` to see your portfolio locally.

## 🔄 Updating Your Portfolio

After making changes:

```bash
cd ~/portfolio
git add .
git commit -m "Your commit message"
git push
```

GitHub Pages will automatically rebuild and deploy your changes.

## 🐛 Troubleshooting

### Build Fails
- Check for TypeScript errors: `npm run build`
- Verify Tailwind CSS configuration
- Check console for error messages

### Styles Not Loading
- Clear browser cache
- Check `tailwind.config.js` content paths
- Verify PostCSS configuration

### Bee Not Moving
- Check browser console for JavaScript errors
- Verify collision detection logic in `src/App.tsx`
- Ensure all DOM elements are loaded

## 📊 Performance

Your portfolio is optimized for:
- **Fast Loading**: Minified CSS and JS
- **Smooth Animations**: Hardware-accelerated transforms
- **Mobile Performance**: Responsive design with mobile-first approach

## 🎯 Next Steps

1. ✅ Create GitHub repository
2. ✅ Push code to GitHub
3. ✅ Enable GitHub Pages
4. ✅ Customize content
5. ✅ Share your portfolio!

## 🌟 Share Your Portfolio

Once deployed, share it:
- **LinkedIn**: Add to your profile
- **Resume**: Include in contact section
- **Email**: Add to signature
- **Social Media**: Share with your network

---

**Need help?** Check the GitHub documentation or reach out for support!
