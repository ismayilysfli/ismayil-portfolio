# Ismayil Yusifli — Portfolio

A static, responsive AI/ML engineering portfolio built with Next.js, TypeScript, and Tailwind CSS. It exports to plain static files and is ready to deploy on Vercel.

## Run locally

Requires Node.js 20 or later.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validate and build

```bash
npm run lint
npm run build
```

The production build is statically exported to `out/`.

## Deploy to Vercel

1. Import this repository in Vercel.
2. Keep the detected framework as **Next.js**.
3. Deploy with the default build command, `npm run build`.

No environment variables, database, authentication, or backend are required.

## Edit portfolio content

Repeated content is stored as typed data rather than duplicated component markup:

- `src/data/site.ts` — profile links, resume path, optional email, and navigation
- `src/data/projects.ts` — featured and additional projects
- `src/data/experience.ts` — experience entries
- `src/data/skills.ts` — grouped skills
- `src/data/achievements.ts` — achievements

### Add or reorder a project

Edit the `projects` array in `src/data/projects.ts`. Add, remove, or reorder one project object; the UI renders the list automatically. Optional verified links use this shape:

```ts
links: [
  { label: "Repository", href: "https://github.com/your-verified-url" },
  { label: "Live demo", href: "https://your-verified-demo-url" },
]
```

Leave `links` out when a repository or demo URL is not verified.

### Replace the resume

1. Add the PDF as `public/resume.pdf`.
2. Change `resumeUrl` in `src/data/site.ts` from `/resume-placeholder.txt` to `/resume.pdf`.
3. Remove `public/resume-placeholder.txt` if it is no longer needed.

### Add an email address

Set `email` in `src/data/site.ts`. The Contact section will show an email link automatically. Leave it empty to keep email hidden.

## Project structure

```text
src/
  app/          Page, metadata, and global styles
  components/   Reusable section and UI components
  data/         Editable portfolio content
public/         Resume and other static files
```
