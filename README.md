# Portfolio Website

<p align="center">
  <img src="/public/favicon.svg" width="50" alt="Logo" />
</p>

<h3 align="center">Personal portfolio for Mufutau Umar Olamilekan (VoidSynth)</h3>

[![Site preview](/public/site-preview.png)](https://voidsynth-iota.vercel.app)

A modern, interactive portfolio website showcasing projects and work. Built with [Remix](https://remix.run/), [React 18](https://react.dev/), [Three.js](https://threejs.org/), and [Framer Motion](https://www.framer.com/motion/).

**Live Site:** [voidsynth-iota.vercel.app](https://voidsynth-iota.vercel.app)

## ✨ Features

- **3D Graphics**: Interactive Three.js models and animations
- **Smooth Animations**: Framer Motion for fluid transitions
- **MDX Support**: Write articles and content in Markdown
- **Component Library**: Storybook for component development
- **Responsive Design**: Mobile-first, accessible design
- **Theme Support**: Light and dark mode
- **Performance Optimized**: Fast loading with Vite bundling

## 🚀 Tech Stack

- **Framework**: [Remix](https://remix.run/) (React 18)
- **Styling**: CSS Modules + PostCSS
- **3D Graphics**: Three.js with Draco compression
- **Animations**: Framer Motion
- **Content**: MDX
- **Build Tool**: Vite
- **Component Docs**: Storybook

## 📦 Installation

### Prerequisites

- Node.js `19.9.0` or higher
- npm `9.6.3` or higher

### Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:7777`

## 🛠️ Development

### Run Storybook

View and develop components in isolation:

```bash
npm run dev:storybook
```

Storybook will be available at `http://localhost:6006`

### Build for Production

```bash
npm run build
```

## 🌐 Deployment

This project can be deployed to various platforms:

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in [Vercel](https://vercel.com)
3. Add environment variables if needed
4. Deploy!

### Netlify

1. Push your code to GitHub
2. Import the project in [Netlify](https://netlify.com)
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `build/client`
4. Add environment variables
5. Deploy!

### Railway

1. Push your code to GitHub
2. Create a new project in [Railway](https://railway.app)
3. Connect your GitHub repository
4. Add environment variables
5. Deploy!

## 📝 Environment Variables

For local development, create a `.env` file in the root directory:

```env
# Session (required)
SESSION_SECRET=your-random-secret-key-here

# Optional: Email service (if you want to use AWS SES)
AWS_ACCESS_KEY_ID=your-aws-key
AWS_SECRET_ACCESS_KEY=your-aws-secret
EMAIL=your-email@gmail.com
FROM_EMAIL=your-verified-ses-email@domain.com
```

**Note**: The contact form currently uses mailto links, so no email service configuration is required.

## 🎨 Customization

### Update Personal Information

Edit `app/config.json` to update:
- Name, role, and disciplines
- Social media links (GitHub, Figma, etc.)
- Portfolio URL

### Change Theme Colors

Edit the theme tokens in `app/components/theme-provider/theme.js`

### Modify 3D Models

Replace GLTF models in `public/models/` and update references in components.

## 📄 License & Permissions

This project is open source. You're welcome to:

- ✅ Use the code or parts of it for your own site
- ✅ Learn from it and adapt it
- ✅ Modify the theme and components to make it your own

**Please note:**
- If you're using the site's design largely unmodified, please credit the original designer
- Do not present any of the projects shown here as your own (these are real projects from the portfolio owner)

## ❓ FAQs

<details>
  <summary>How do I change the color on the DisplacementSphere (blobby rotating thing in the background)?</summary>
  
  You'll need to edit the fragment shader. Check out the shader files in the component directory and modify the color values in the fragment shader code.
</details>

<details>
  <summary>How does the contact form work?</summary>
  
  The contact form currently uses mailto links, which opens the user's default email client with a pre-filled email. No backend service is required. If you want to implement a server-side contact form, you can use AWS SES, Resend, or another email service.
</details>

<details>
  <summary>How do I add new articles/blog posts?</summary>
  
  Create new `.mdx` files in `app/routes/articles/` directory. The articles will automatically be picked up and displayed on the articles page.
</details>

## 👤 Author

**Mufutau Umar Olamilekan (VoidSynth)**

- Portfolio: [voidsynth-iota.vercel.app](https://voidsynth-iota.vercel.app)
- GitHub: [@void-synth](https://github.com/void-synth)
- Figma: [@voidsynth](https://www.figma.com/@voidsynth)

## 🙏 Acknowledgments

- Built with amazing open source tools and libraries

---

⭐ If you find this project helpful, please consider giving it a star!
