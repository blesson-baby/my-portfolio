# My Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. Perfect for showcasing your projects, skills, and experience to potential employers and clients.

## Features

✨ **Modern Design** - Clean, professional, and responsive layout
🎨 **Tailwind CSS** - Beautiful styling with utility-first CSS
⚡ **Fast Performance** - Built with Vite for lightning-fast development and builds
📱 **Mobile Responsive** - Looks great on all device sizes
🎯 **SEO Friendly** - Optimized for search engines
♿ **Accessible** - WCAG compliant
🚀 **Easy Deployment** - Ready for Vercel, Netlify, or any static host

## Sections Included

- **Hero** - Eye-catching introduction
- **About** - Your professional background
- **Skills** - Technical skills and technologies
- **Experience** - Work history and achievements
- **Projects** - Showcase of your best work
- **Contact** - Contact form and information
- **Navigation** - Smooth scrolling and responsive navbar

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone or navigate to the project directory:
```bash
cd "my portfolio"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will open at `http://localhost:3000`

### Customization

#### Update Personal Information
Edit the following components to add your information:

- `src/components/Hero.jsx` - Your name and headline
- `src/components/About.jsx` - Your bio and quick facts
- `src/components/Skills.jsx` - Your technical skills
- `src/components/Experience.jsx` - Your work experience
- `src/components/Projects.jsx` - Your projects
- `src/components/Contact.jsx` - Your contact information

#### Customize Colors
Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  primary: "#0f172a",      // Main background
  secondary: "#1e293b",    // Secondary background
  accent: "#3b82f6"        // Accent color (blue)
}
```

#### Add Your Projects
Replace the sample projects in `src/components/Projects.jsx` with your actual projects. Add:
- Project title
- Description
- Technologies used
- Live link and GitHub link

## Building for Production

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your project to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect it's a Vite project
5. Click Deploy!

### Deploy to Netlify

1. Install Netlify CLI: `npm install -g netlify-cli`
2. Run: `netlify deploy --prod --dir=dist`
3. Or connect your GitHub repo for automatic deployments

### Deploy to GitHub Pages

1. Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/your-repo-name/',
  // ... rest of config
})
```

2. Build and deploy:
```bash
npm run build
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **React Icons** - Icon library
- **PostCSS** - CSS processing

## Tips for Best Results

1. **Add High-Quality Images** - Replace placeholder images with your own professional photos
2. **Write Compelling Copy** - Use clear, concise language that highlights your achievements
3. **Link Everything** - Make sure all project links, GitHub links, and social media work
4. **Mobile Testing** - Test on various devices to ensure responsiveness
5. **Performance** - Optimize images and keep the site fast
6. **SEO** - Update meta tags in `index.html` for better search engine visibility

## Next Steps

- [ ] Replace "Your Name" with your actual name
- [ ] Add your professional photo
- [ ] Update skills with your actual technologies
- [ ] Add your real project links
- [ ] Update contact information
- [ ] Set up form submission (emailjs, formspree, etc.)
- [ ] Deploy to Vercel
- [ ] Set up custom domain
- [ ] Add Google Analytics

## License

This project is open source and available for personal use.

## Support

For questions or issues, feel free to reach out!

---

Happy building! 🚀
