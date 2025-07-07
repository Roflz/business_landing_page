# Business Landing Page Template

A modern, customizable business landing page template built with Next.js, TypeScript, and Tailwind CSS. Perfect for freelance web developers to offer as a service or demo to clients (e.g., on Fiverr).

## ✨ Features
- Modular sections: Hero, About, Features, Services, Portfolio, Testimonials, CTA, Contact, Footer
- Responsive and mobile-friendly
- Smooth fade-in animations
- Color theme switcher (Blue, Green, Dark)
- Clearly marked placeholder content for easy customization
- Clean, professional design

## 🚀 Getting Started

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Run the development server:**
   ```sh
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🛠️ Customization Guide

- **Replace Placeholder Content:**
  - All major sections are in `app/components/` (e.g., `HeroSection.tsx`, `AboutSection.tsx`, etc.).
  - Look for `[Your Business Name]`, `[Feature One]`, `[Service One]`, etc. Replace these with your or your client's real content.
  - Demo/mock data is used for testimonials and portfolio items—swap these for real client data as needed.

- **Color Theme Switcher:**
  - Use the theme dropdown in the navigation bar to preview Blue, Green, or Dark color schemes.
  - You can add more themes by editing the theme options in `app/layout.tsx` and adding CSS variables in `app/globals.css`.

- **Animations:**
  - All sections use a simple fade-in animation. You can add more or use a library like Framer Motion for advanced effects.

- **Mobile & Responsive:**
  - The template is fully responsive. Test on different devices for best results.

## 🌐 Deployment

- **Deploy to Vercel (Recommended):**
  - Push your project to GitHub, then import it into [Vercel](https://vercel.com/).
  - Or run:
    ```sh
    npx vercel
    ```
- **Deploy to Netlify:**
  - Push to GitHub, then import into [Netlify](https://netlify.com/).

## 💡 For Freelancers
- Use this template as a starting point for client projects.
- Show the live demo in your portfolio or Fiverr gig.
- Highlight how easily you can customize colors, content, and sections for each client.

---

**Questions or need help customizing?**
Feel free to reach out!
