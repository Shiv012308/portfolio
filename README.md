# AK — Graphic Designer Portfolio

A premium, interactive graphic designer portfolio built with **Next.js 14, React Three Fiber, GSAP ScrollTrigger, Framer Motion and Tailwind CSS**.

This first build covers the signature core experience end-to-end and working:

- Preloader (progress + "Creative chaos ready.")
- Sticky navbar + fullscreen mobile menu
- 3D Hero Studio (floating posters, folder, abstract shapes, smooth lerp camera parallax, scroll-reactive camera)
- Custom cursor (GSAP `quickTo`, contextual labels: VIEW / OPEN / GO)
- Animated marquee
- Editorial introduction
- **3D interactive design folder archive** (hover lift, click-to-select transition overlay)
- Selected/Featured Work editorial grid
- Skills (hover-reveal list)
- Tools of the trade
- About (parallax portrait, details grid)
- Contact CTA (bold red banner)
- Contact (social links)
- Footer

Everything is real, working code — not a mockup. It builds cleanly with `next build`.

> Not yet built out in this pass: individual `/work/[category]` and `/project/[slug]` pages, the 3D Designer Workspace scene, Creative Playground drag section, Creative Process timeline, testimonials, and fun client-comments block. The structure (routes, data files, component folders) is already in place to add these next — ask and I'll build any of them out fully.

---

## 1. Install

```bash
npm install
```

Requires Node 18+ (Node 20/22 recommended).

## 2. Run locally (VS Code or any terminal)

```bash
npm run dev
```

Open **http://localhost:3000**. Hot reload is on — edit any file in `src/` and it updates instantly.

## 3. Build for production

```bash
npm run build
npm run start
```

`npm run build` type-checks, lints, and statically prerenders the site. If it fails on fonts with a "Please check if the network is available" error, that means the machine building it has no internet access to fonts.googleapis.com — it will work normally on your machine, in CI, or on Vercel.

## 4. Deploy to Vercel

```bash
npm i -g vercel
vercel
```

Or push this folder to a GitHub repo and import it at vercel.com/new — zero config needed, Vercel auto-detects Next.js.

---

## 5. Adding / editing portfolio projects

Edit `src/data/projects.js`. Each entry needs:

```js
{
  id: 7,
  title: "Project Name",
  slug: "project-name",       // used in /project/[slug] once that route is built
  category: "Branding",
  year: "2026",
  featured: true,              // true = shows in Selected Work
  cover: "/images/branding/project-name-cover.webp",
  description: "One or two sentence summary.",
  tools: ["Illustrator", "Figma"],
}
```

Drop the matching image into `public/images/<category>/` and point `cover` at it.

## 6. Adding / removing design folders (3D Archive)

Edit `src/data/categories.js`:

```js
{ name: "Motion Graphics", slug: "motion-graphics", count: 5, accent: "#275DFF" }
```

The 3D scene (`src/components/three/FolderArchiveScene.jsx`) automatically lays out however many categories you give it, evenly spaced. `accent` controls that folder's color in the scene.

## 7. Replacing placeholder artwork

All current images are generated SVG placeholders in `public/images/placeholder/`. To swap in real artwork:

1. Export designs as **WebP or AVIF**, ideally under ~300–500KB each.
2. Put them in `public/images/<category>/`.
3. Update the `cover` path in `src/data/projects.js`.
4. For the About portrait, replace the placeholder `<div>` in `src/components/sections/About.jsx` with a Next.js `<Image>` pointing at your photo.

## 8. Using GLTF/GLB 3D models instead of primitives

Right now every 3D object (folders, posters, shapes) is built from Three.js primitives (`RoundedBox`, `Torus`, etc.) — no external models needed, which keeps load times fast. If you want to bring in real `.glb` models (e.g. a rendered mockup, a more detailed folder):

1. Compress with Draco:
   ```bash
   npx gltf-pipeline -i model.glb -o model-draco.glb -d
   ```
2. Keep each model under ~2–4MB.
3. Put it in `public/models/`.
4. Load it with `useGLTF` from `@react-three/drei`, wrapped in `<Suspense>`:
   ```jsx
   import { useGLTF } from "@react-three/drei";
   const { scene } = useGLTF("/models/model-draco.glb");
   ```
5. Preload if it's above the fold: `useGLTF.preload("/models/model-draco.glb")`.

## 9. Optimizing image textures

- Keep 3D poster textures at **1024–1600px**, not 4K.
- Use `next/image` everywhere in HTML (already done) — it handles WebP/AVIF conversion and responsive sizing automatically.
- For textures fed into Three.js materials, use `useTexture` from `@react-three/drei` and pre-compress the source file (WebP/JPEG, not PNG, for photographic content).

## 10. Mobile performance

Already applied:

- Custom cursor is disabled on touch devices (`(hover: none)` check).
- `prefers-reduced-motion` disables Lenis smooth scroll, camera parallax, and CSS marquee animation globally (see `globals.css` and `CameraRig.jsx`).
- `Canvas` uses `dpr={[1, 1.5]}` everywhere (never defaults to 2+).
- 3D scenes are dynamically imported with `ssr: false` and only mount when their section is in the DOM.

If you add the Designer Workspace or Playground scenes, follow the same pattern used in `Hero.jsx`/`Archive.jsx`: `dynamic(() => import(...), { ssr: false })`, primitives over heavy geometry, and gate extra lights/shadows behind a `window.innerWidth > 768` check.

## 11. Debugging WebGL / Three.js issues

- **Blank canvas / nothing renders:** open DevTools console. R3F throws readable errors for bad geometry args or missing `<Suspense>` around anything async (`useGLTF`, `useTexture`, `Text` from drei, which fetches a font).
- **"Text" component network errors:** `@react-three/drei`'s `<Text>` fetches a font from a CDN on first render. If you're offline or self-hosting, pass a local `font="/fonts/your-font.woff"` prop.
- **Low FPS:** check how many `pointLight`s/`spotLight`s are active — each is expensive. Reduce shadow-casting lights first; static-looking lights don't need to move every frame.
- **Camera jumps instead of gliding:** confirm you're using `THREE.MathUtils.lerp` (as in `CameraRig.jsx`) rather than setting `camera.position` directly from raw mouse/scroll values.
- **GSAP ScrollTrigger not firing after route change:** call `ScrollTrigger.refresh()` on route change, and always `ctx.revert()` in the `useEffect` cleanup (already done in `Hero.jsx`) to avoid duplicate triggers.

---

## Project structure

```
src/
  app/
    layout.js          — fonts, global providers
    page.js             — assembles all sections behind the preloader
    globals.css
  components/
    layout/             — Navbar, MobileMenu, Footer
    sections/           — Hero, Marquee, Introduction, Archive, FeaturedWork,
                           Skills, Tools, About, ContactCTA, Contact
    three/               — HeroScene, CameraRig, SceneLights,
                           FloatingPoster, FolderArchiveScene, DesignFolder3D
    ui/                  — Preloader, CustomCursor, MagneticButton, SmoothScroll
  data/
    projects.js, categories.js, skills.js
public/
  images/placeholder/    — swap these out (see §7)
```

## Tech stack

Next.js 14 · React 18 · Three.js · @react-three/fiber · @react-three/drei · GSAP + ScrollTrigger · Framer Motion · Lenis · Tailwind CSS · Lucide React
