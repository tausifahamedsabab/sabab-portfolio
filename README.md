# Sabab Portfolio

A responsive dark cinematic portfolio built with React, TypeScript, Vite, React Router, Lucide icons, and custom CSS.

## Run locally

1. Install Node.js (LTS).
2. Extract this folder and open it in VS Code.
3. Open the terminal in the project folder.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL printed by Vite.

## Personalize before submission

- **Photo:** In `src/App.tsx`, replace the `.portrait-placeholder` block with an `<img>` using your own professional photo. Keep the `portrait-frame` wrapper for the styling.
- **Resume:** Put your actual PDF at `public/resume.pdf`. The hero button already points to this path. The placeholder text file is only an instruction and is not a resume.
- **Projects:** Check `src/data.ts`. Update project descriptions, live URLs, and repository URLs to the correct destinations. Links currently point to GitHub repositories when a verified live deployment was not supplied.
- **Contact:** Replace the email in `src/App.tsx` if needed. A phone/WhatsApp number is omitted because one was not provided.
- **Education/experience:** The current content reflects HSC completion and ongoing learning; update any detail that has changed.
- **Skills:** Skill percentages are illustrative self-assessments. Adjust them honestly.

## Build for production

```bash
npm run build
npm run preview
```

## Deploy (Vercel)

1. Push the project folder to a new GitHub repository.
2. Import that repository at https://vercel.com.
3. Use the Vite defaults: build command `npm run build`, output directory `dist`.
4. Deploy and open the generated URL to test the home page and every `/projects/<slug>` page.

For static hosting, configure SPA fallback/rewrites so React Router project-detail URLs resolve to `index.html`.

## Important submission checklist

- Add `public/resume.pdf`.
- Replace the illustrated photo placeholder with your real photo.
- Verify project live URLs, especially if the assignment requires live demos.
- Test the deployed site on mobile and desktop.
- A source-code package is not the same as a hosted live website; deploy it before submitting.
