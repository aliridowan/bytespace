# ByteSpace

A responsive implementation of the **ByteSpace New** website from the provided Figma design, built for the Doin Tech Limited Jr. Software Engineer (Frontend) assessment.

**Live site:** https://bytespace.aliridowan.com

## What was built

### 1. Landing page (required)
The full landing page from the Figma "Home" frame, section by section:

- **Navbar**: fixed header that shrinks and gets a blurred background on scroll, active-section highlighting (scroll-spy), and a mobile menu.
- **Hero**: search bar (submitting scrolls to the course list), 3D shapes and floating stat cards.
- **Partners**: logo strip.
- **Discover Your Passion**: category chips that filter the course cards.
- **Explore Diverse Learning Paths**: category cards.
- **Your Path to Professional Growth** and **Create & Manage Courses Easily**.
- **Creator CTA** and **Testimonials**.
- **Footer** with a newsletter form.
- **Custom 404 page** from the Figma "404 Not Found" frame.

### 2. Login and Signup pages (bonus)
- `/sign-in` and `/sign-up` from the Figma "Login" and "Register" frames, with their own layout (logo bar only, no site navbar or footer).
- Forms built with **React Hook Form** and validated with **Zod** schemas: email format, password of at least 8 characters, full name of 2–20 characters. Errors appear under each field.
- Password field with a show/hide toggle.
- On submit, a **Server Action** validates the data again with the same schema, then redirects (sign-in → home, sign-up → sign-in). **Sonner** toasts confirm the result.

## Code and Git

- **Public repository:** https://github.com/aliridowan/bytespace
- **Branching:** all work was done on feature branches and merged into `main` through pull requests:
  - `feature/landing-page` → PR #1 (landing page) and PR #3 (favicon)
  - `feature/auth-pages` → PR #2 (login and signup pages, plus landing page fixes)
- **Commits** follow the Conventional Commits style (`feat:`, `fix:`, `refactor:`, `chore:`), one change per commit.
- **Reusable components:** shared UI such as `Button`, `Container`, `CourseCard`, `SectionHeading`, `AvatarGroup`, `FloatingCard`, `HappyStudentsCard`, `TextField` and `PasswordField` are used across sections. Content (courses, links, testimonials) lives in `src/data`, separate from the markup.

### Tech stack
- **Next.js 16** (App Router, Server Components, Server Actions) with **TypeScript** in strict mode
- **React 19**
- **Tailwind CSS v4** with the Figma colors and text styles as design tokens (`src/app/globals.css`)
- **React Hook Form** + **Zod** for forms, **Sonner** for toasts, **lucide-react** for general icons
- Fonts: Poppins (headings) and Satoshi (body, self-hosted), loaded with `next/font`

### Project structure
```
src/
├── app/
│   ├── (main)/          # landing page + layout with navbar and footer
│   ├── (auth)/          # sign-in, sign-up, their layout and server actions
│   ├── layout.tsx       # root layout: fonts, metadata, toaster
│   └── not-found.tsx    # custom 404 page
├── components/
│   ├── sections/        # page sections (hero, courses, footer, auth, …)
│   ├── ui/              # reusable components
│   └── icons/           # SVG icons exported from Figma
├── data/                # page content
├── hooks/               # useScrolled, useActiveSection
└── zodSchema/           # form validation schemas
```

### Run locally
```bash
npm ci
npm run dev      # http://localhost:3000
npm run lint
npm run build
```

## Deployment
Deployed on **Vercel** from the `main` branch: https://bytespace.aliridowan.com

## Notes for the reviewer
- **Responsive design:** the Figma file only has 1440px designs. Desktop (1280px and up) follows the Figma measurements; tablet and mobile layouts are my own decisions (for example, the category chips wrap on tablets and scroll sideways on phones, and the auth page collage is hidden below 1280px).
- **No backend:** the sign-in and sign-up forms are validated on the client and again on the server, then redirect. No accounts or sessions are created. The Facebook and Google buttons show an info message.
- **Search:** the hero search doesn't filter yet; it scrolls to the course list. Filtering by the typed text would be the next step.
- **Placeholder links:** the design has links to pages that aren't part of the task (`/cart`, `/search`, footer links such as `/about` and `/privacy`). They lead to the custom 404 page.
- **Small intentional changes:** the footer newsletter button says "Subscribe" (Figma: "Search"), and the copyright shows the current year instead of "2023".
- **Accessibility:** semantic HTML, labelled form fields with linked error messages, `aria-pressed` on the category filters, keyboard focus styles, and reduced-motion support for animations.
