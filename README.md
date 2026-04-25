# 🚀 Interactive Portfolio - Nobab Khan

A stunning, interactive portfolio built with React, TypeScript, and Tailwind CSS featuring parallax effects and an animated bee that navigates around text.

## ✨ Features

### 🎨 Visual Effects
- **Parallax Scrolling**: Multiple layers move at different speeds creating depth
- **Animated Bee**: A cute bee that flies around avoiding text collisions
- **Glass Morphism**: Modern frosted glass design elements
- **Gradient Backgrounds**: Beautiful color transitions throughout
- **Smooth Animations**: Fade-in effects and hover transitions

### 📱 Responsive Design
- **Mobile-First**: Optimized for all screen sizes
- **Touch-Friendly**: Works great on touch devices
- **Adaptive Layout**: Content adjusts to any screen

### 🎯 Sections
1. **Hero** - Eye-catching introduction with floating elements
2. **About** - Personal story with animated statistics
3. **Skills** - Categorized technical skills showcase
4. **Projects** - 6 featured projects with status badges
5. **Experience** - Timeline of professional journey
6. **Contact** - Easy ways to connect

## 🛠️ Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Tailwind CSS 4** - Utility-first CSS framework
- **PostCSS** - CSS transformation

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- Git installed

### Installation

```bash
# Clone the repository
git clone https://github.com/Nobabkh/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see your portfolio!

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

## 🎮 How It Works

### The Bee Effect
The bee uses collision detection to navigate around text elements:
1. **Movement**: Bee moves in random directions
2. **Collision Detection**: Checks for overlaps with text elements
3. **Avoidance**: Changes direction when approaching text
4. **Boundary Check**: Stays within viewport bounds

### Parallax Scrolling
Multiple parallax layers create depth:
- **Background**: Pattern moves slowly (10% speed)
- **Content**: Moves at medium speed (30% speed)
- **Foreground**: Elements move faster (50% speed)

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Hero.tsx          # Hero section
│   │   ├── About.tsx         # About section
│   │   ├── Skills.tsx        # Skills showcase
│   │   ├── Projects.tsx      # Projects grid
│   │   ├── Experience.tsx    # Experience timeline
│   │   ├── Contact.tsx       # Contact section
│   │   └── Bee.tsx           # Animated bee component
│   ├── App.tsx               # Main app with bee logic
│   ├── main.tsx              # Entry point
│   └── index.css             # Global styles
├── public/                   # Static assets
├── tailwind.config.js        # Tailwind configuration
├── vite.config.ts           # Vite configuration
└── package.json             # Dependencies
```

## 🎨 Customization

### Update Content
Edit component files in `src/components/`:
- `Hero.tsx` - Update introduction
- `About.tsx` - Modify personal info
- `Skills.tsx` - Add/remove skills
- `Projects.tsx` - Update projects
- `Experience.tsx` - Add work history
- `Contact.tsx` - Change contact info

### Change Colors
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: '#3B82F6',    // Your primary color
      secondary: '#8B5CF6',  // Your secondary color
      accent: '#F59E0B',     // Your accent color
    },
  },
}
```

### Adjust Bee Behavior
Edit `src/App.tsx`:
```typescript
// Change bee speed
setBeePosition((prev) => {
  let newX = prev.x + beeDirection.x * 2; // Change 2 to adjust speed
  // ...
});

// Modify collision detection
const isColliding = (beeRect: any, textRect: DOMRect) => {
  // Adjust collision logic here
};
```

## 🌐 Deployment

### GitHub Pages

1. Create a new repository on GitHub named `portfolio`
2. Push your code:
```bash
git remote add origin git@github.com:Nobabkh/portfolio.git
git push -u origin main
```

3. Enable GitHub Pages:
   - Go to Settings → Pages
   - Select Source: `Deploy from a branch`
   - Select Branch: `main` and folder: `/dist`
   - Click Save

4. Your portfolio will be available at:
   `https://Nobabkh.github.io/portfolio/`

See [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md) for detailed instructions.

## 📱 Screenshots

*Add screenshots of your portfolio here*

## 🐛 Troubleshooting

### Bee Not Moving
- Check browser console for errors
- Verify collision detection logic
- Ensure DOM elements are loaded

### Styles Not Loading
- Clear browser cache
- Check Tailwind configuration
- Verify PostCSS setup

### Build Fails
- Run `npm install` to ensure dependencies
- Check TypeScript errors
- Verify all imports are correct

## 📄 License

MIT License - feel free to use this portfolio for your own projects!

## 🙏 Acknowledgments

- Inspired by modern portfolio designs
- Built with amazing open-source tools
- Bee animation created with pure SVG

## 📞 Contact

- **Email**: nobab.khan.nirob@gmail.com
- **LinkedIn**: linkedin.com/in/nobab
- **GitHub**: github.com/NobabKh

---

**Made with ❤️ by Nobab Khan**

*Building the future with AI & Code*
