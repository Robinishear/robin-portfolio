# Robin Ahmed - Personal Developer Portfolio

Frontend-only portfolio built with Next.js, TypeScript and Tailwind CSS. There is no backend and no database.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Pages

| Route | What it is |
| --- | --- |
| `/` | Public portfolio: Home, About, Skills, Projects, Contact, Footer |
| `/admin/projects` | Project Manager: create, edit, preview, delete, import and export projects |

## What to edit

| I want to change... | File |
| --- | --- |
| Name, title, intro, About text, skills, email, GitHub | `src/data/profile.ts` |
| Project images | put the image in `public/projects/` and use `/projects/your-image.png` |
| Colors and glass look | `src/app/globals.css` and `tailwind.config.ts` |

## Adding a project (permanent)

Each project is one JSON file in `src/data/projects/`.

1. Open `/admin/projects`, fill in the form and click **Download this JSON** (or copy an existing file and edit it).
2. Put the `.json` file in `src/data/projects/`.
3. Open `src/data/projects/index.ts`, import the file and add it to the `rawProjects` list.
4. Commit and deploy.

Example:

```json
{
  "id": "my-project",
  "slug": "my-project",
  "title": "My Project",
  "description": "What the project does, in a sentence or two.",
  "image": "/projects/placeholder.svg",
  "category": "Web App",
  "technologies": ["React", "Node.js"],
  "github": "https://github.com/Robinishear/my-project",
  "liveDemo": "https://my-project.vercel.app",
  "featured": true,
  "status": "completed",
  "order": 5
}
```

`status` must be `completed`, `in-progress` or `planned`. Leave `github` or `liveDemo` as `""` if there is no link yet.

## How the Project Manager works

- A browser cannot write files into your source folder, so the manager keeps its changes in the browser's `localStorage`.
- Those changes show up on the portfolio in the same browser only. Other visitors see the JSON files from the code.
- `localStorage` is not a backup. Use **Export all** or **Download this JSON** and add the files to the repository (steps above).
- **Import JSON** accepts one project file or an array of projects. Invalid files show a validation error and nothing is saved from them.
- **Reset** removes the browser changes and goes back to the JSON files in the code.
- `/admin/projects` has no login (no backend). It is hidden from search engines, but anyone with the link can open it, and changes only affect their own browser.

## Folder structure

```
src/
  app/            routes (/, /admin/projects), layout, global styles
  api/            project data-access layer (static JSON + localStorage)
  components/ui/  shared UI: Navbar, Background, Reveal, SectionHeading
  data/           profile.ts and projects/*.json
  features/
    home/  about/  skills/  projects/  project-manager/  contact/  footer/
```

## Deploy

Push to GitHub and import the repository into Vercel (or any host that supports Next.js). No environment variables are needed.
