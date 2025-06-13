# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**Development server with Turbopack:**

```bash
pnpm dev
```

**Build for production:**

```bash
pnpm build
```

**Start production server:**

```bash
pnpm start
```

**Lint code:**

```bash
pnpm lint
```

## Architecture

This is a slugify.it application - a single-page tool that converts text to SEO-friendly slugs using Next.js 15 with App Router architecture.

**Application Features:**

- Real-time slug conversion as user types
- Copy-to-clipboard functionality with toast notifications
- Apple Liquid Glass UI design with backdrop blur effects
- Dark/light mode support with theme toggle
- Animated liquid background with floating gradients
- Input validation and error handling

**Key structure:**

- `src/app/page.tsx` - Main slugify component with glass styling and theme support
- `src/app/layout.tsx` - Root layout with ThemeProvider and Toaster
- `src/app/globals.css` - Custom glass effects and liquid animations
- `src/components/ui/` - shadcn/ui components (Card, Input, Button, Sonner)
- `src/components/theme-provider.tsx` - next-themes wrapper component
- `src/components/theme-toggle.tsx` - Dark/light mode toggle button
- `src/lib/utils.ts` - Utility functions for component styling

**Tech stack:**

- Next.js 15 with App Router
- React 19 with client components
- TypeScript with strict mode
- Tailwind CSS v4 with custom glass effects
- shadcn/ui components with Sonner toasts
- slugify package for text conversion
- Lucide React for icons
- Geist font family (Sans and Mono variants)

**Path aliases:**

- `@/*` maps to `./src/*` for cleaner imports
