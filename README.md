# Egriano Aristianto - Portfolio

A modern, responsive personal portfolio website built with React, TypeScript, Material UI, and Tailwind CSS.

## ✨ Features

- 🎨 **Clean & Minimalist Design** - Professional blue color palette with modern aesthetics
- 🌓 **Dark/Light Mode** - Seamless theme switching with persistent preferences
- 🌍 **Internationalization** - Full support for English and Indonesian (Bahasa Indonesia)
- 📱 **Fully Responsive** - Optimized for all devices from mobile to desktop
- ✨ **Smooth Animations** - Fade-in effects and parallax scrolling using Framer Motion
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development and optimized builds
- 🚀 **GitHub Pages Ready** - Automated deployment with GitHub Actions

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **UI Library**: Material UI (MUI)
- **Styling**: Tailwind CSS + Emotion
- **Animations**: Framer Motion
- **Internationalization**: react-i18next
- **Deployment**: GitHub Pages

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

## 🚀 Deployment

### Automatic Deployment (Recommended)

This project uses GitHub Actions for automatic deployment. When you push to the `main` branch, it will automatically build and deploy to GitHub Pages.

1. Go to your repository Settings → Pages
2. Under "Build and deployment", select "GitHub Actions" as the source
3. Push to `main` branch - your site will be automatically deployed!

### Manual Deployment

```bash
npm run deploy
```

## 📝 Customization

### Update Content

Edit the translation files to customize content:
- English: `src/locales/en.json`
- Indonesian: `src/locales/id.json`

### Modify Theme

Edit the theme configuration in `src/ThemeProvider.tsx` to customize colors, typography, and component styles.

### Add/Remove Sections

Modify `src/App.tsx` to add or remove sections from your portfolio.

## 📄 License

© 2026 Egriano Aristianto. All rights reserved.

## 🤝 Connect

- **Email**: EgrianoA@gmail.com
- **LinkedIn**: [linkedin.com/in/egrianoaristianto](https://www.linkedin.com/in/egrianoaristianto/)
- **GitHub**: [github.com/EgrianoA](https://github.com/EgrianoA)

