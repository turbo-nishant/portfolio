# Developer Portfolio Website

A modern, colorful developer portfolio built with Next.js, featuring bold gradients, smooth animations, and a unique design that stands out from typical minimalist portfolios.

## Features

- 🎨 **Colorful Design**: Bold gradients with purple, blue, pink, and teal colors
- ✨ **Smooth Animations**: Framer Motion animations and micro-interactions
- 🌙 **Dark/Light Mode**: Theme toggle with system preference support
- 📱 **Fully Responsive**: Optimized for all device sizes
- 🚀 **Performance Optimized**: Built with Next.js App Router
- 🎯 **Easy to Customize**: JSON-based project data management

## Sections

1. **Hero Section**: Animated background with name, tagline, and social links
2. **Projects Section**: Filterable grid of project cards with live demos and GitHub links
3. **About Section**: Personal story, skills with animated progress bars, and highlights
4. **Contact Section**: Contact form and information with glassmorphism effects

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode
- **Deployment**: Vercel

## Getting Started

1. **Clone and Install**:
   \`\`\`bash
   git clone <your-repo-url>
   cd developer-portfolio
   npm install
   \`\`\`

2. **Run Development Server**:
   \`\`\`bash
   npm run dev
   \`\`\`

3. **Open**: http://localhost:3000

## Customization

### Adding/Updating Projects

Edit `data/projects.json` to add or modify projects:

\`\`\`json
{
  "id": "unique-id",
  "title": "Project Name",
  "description": "Project description",
  "image": "/placeholder.svg?height=300&width=400",
  "tags": ["React", "Next.js", "API"],
  "liveUrl": "https://your-live-demo.com",
  "githubUrl": "https://github.com/username/repo",
  "featured": true
}
\`\`\`

### Personalizing Content

1. **Hero Section**: Update name, tagline, and social links in `components/hero-section.tsx`
2. **About Section**: Modify bio, skills, and highlights in `components/about-section.tsx`
3. **Contact Info**: Update contact details in `components/contact-section.tsx`
4. **Metadata**: Update title and description in `app/layout.tsx`

### Color Customization

Modify the color tokens in `app/globals.css`:
- `--primary`: Main brand color
- `--secondary`: Secondary accent color
- `--accent`: Additional accent color

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with zero configuration

### Manual Deployment

\`\`\`bash
npm run build
npm start
\`\`\`

## Project Structure

\`\`\`
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main page combining all sections
│   └── globals.css         # Global styles and design tokens
├── components/
│   ├── hero-section.tsx    # Hero with animated background
│   ├── projects-section.tsx # Project grid with filtering
│   ├── about-section.tsx   # About me with skills
│   ├── contact-section.tsx # Contact form and info
│   ├── navigation.tsx      # Fixed navigation bar
│   └── theme-toggle.tsx    # Dark/light mode toggle
├── data/
│   └── projects.json       # Project data (easily editable)
└── README.md
\`\`\`

## Performance Features

- **Image Optimization**: Next.js Image component with placeholder generation
- **Code Splitting**: Automatic code splitting with Next.js
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Accessibility**: ARIA labels, keyboard navigation, and screen reader support

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this template for your own portfolio!
