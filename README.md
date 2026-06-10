# Blessen Mathew Portfolio

A responsive personal portfolio built with React, Vite, and Tailwind CSS. It highlights my skills, experience, and featured project work for internship and entry-level job applications.

## Features

- Clean single-page layout
- Responsive navigation and sections
- Skills and experience overview
- Featured project showcase
- Contact section with form submission support
- Hover email display in the footer

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- React Icons
- EmailJS
- Node.js

## Project Sections

- Hero
- About
- Skills
- Experience
- Projects
- Contact
- Footer

## Getting Started

### Requirements

- Node.js 18 or higher
- npm

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

The app runs at `http://localhost:3000`.

## Environment Variables

Create a `.env` file in the project root for EmailJS and optional project links:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_FRONTEND_URL=https://your-live-site.com
VITE_BACKEND_URL=https://your-backend.com
VITE_GITHUB_URL=https://github.com/your-username/your-repo
```

## Build

```bash
npm run build
```

## Deployment

### Vercel

1. Push the repo to GitHub
2. Import it on Vercel
3. Leave the build command as `npm run build`
4. Use `dist` as the output directory if needed

### Netlify

1. Push the repo to GitHub
2. Import it on Netlify
3. Use `npm run build` as the build command
4. Use `dist` as the publish directory

## Customization

- Update your name and summary in `src/components/Hero.jsx`
- Update your bio in `src/components/About.jsx`
- Update your experience in `src/components/Experience.jsx`
- Replace project links and descriptions in `src/components/Projects.jsx`
- Update contact details in `src/components/Contact.jsx`
- Update social links in `src/components/Footer.jsx`

## Notes

- `.env` is ignored from git and should stay private
- The project is optimized for showcasing a fresher portfolio

