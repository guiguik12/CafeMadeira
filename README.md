<div align="center">

![Favicon](./public/favicon.ico)

[English](./README.md) | [Português (Brasil)](./README.pt-br.md)

</div>

# AURA CUP — Digital Menu

AURA CUP — Digital Menu is a modern, section-based frontend application that showcases a coffee shop experience through an interactive digital interface.

The visual identity is inspired by the award-winning "AURA CUP" branding project available on [Behance](https://www.behance.net/gallery/245065107/AURA-CUP-I-COFFEE-I-brand-identity).

## Objectives

- Create an engaging, multi-section experience showcasing the coffee shop brand
- Implement sophisticated animations and visual effects (Plasma shaders, blur text effects, shiny effects)
- Deliver a fully responsive, mobile-first design experience
- Demonstrate modern frontend architecture with component-based design and state management
- Translate premium branding into an interactive digital product

## Branding & Inspiration

The design is inspired by _“AURA CUP”_ by Богдана Собко [Behance](https://www.behance.net/gallery/245065107/AURA-CUP-I-COFFEE-I-brand-identity).

The concept emphasizes coffee as a moment of pause and reflection, expressed through minimalism, soft visual elements, and a refined color palette.

All UI decisions (typography, colors, spacing) were adapted from this concept into a functional digital interface.

## Motivation

This project explores the transformation of premium branding into an interactive web experience.  
It serves as a portfolio showcase demonstrating expertise in:

- Advanced React patterns (Context API, Hooks)
- Complex animations (GSAP timelines, Framer Motion)
- WebGL graphics programming (OGL shader effects)
- Responsive, mobile-first design
- Modern build tooling and optimization
- Component architecture and code organization

## Key Features

- **Multi-Section Navigation**: Seamless transitions between Menu, About, Gallery, Testimonials, and Location sections
- **Advanced Animations**:
  - Plasma shader effects (WebGL-powered)
  - Blur text reveal animations (BlurText component)
  - Shiny text effects (ShinyText component)
  - GSAP timeline-based navigation menu
  - Spring-physics hover animations
- **Responsive Design**: Mobile-first approach with optimized breakpoints
- **State Management**: React Context API for section-based routing
- **Interactive Components**: Circular gallery, menu cards with hover effects, dynamic pricing display

## Tech Stack

| Technology        | Purpose                              |
| ----------------- | ------------------------------------ |
| React 18+         | UI library                           |
| TypeScript        | Static typing                        |
| Vite              | Build tool and dev server            |
| Tailwind CSS      | Utility-first CSS framework          |
| Framer Motion     | React component animations           |
| GSAP              | Advanced timeline animations         |
| OGL (WebGL)       | WebGL graphics engine                |
| Lucide React      | Icon library                         |
| React Icons       | Icon library (Font Awesome, Feather) |
| Radix UI Icons    | Icon library                         |
| React Context API | State management                     |
| Shadcn/ui         | Component library                    |

## Deployment

The `dist/` folder can be deployed to:

- GitHub Pages
- Vercel

If deploying under a subpath, configure the `base` option in `vite.config.js`.

## Credits

**Design inspiration:**

- “AURA CUP” — Богдана Собко [Behance](https://www.behance.net/gallery/245065107/AURA-CUP-I-COFFEE-I-brand-identity)

This project is a frontend reinterpretation of the original branding concept.

## License

MIT License
