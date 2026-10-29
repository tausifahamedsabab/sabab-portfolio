export type Project = {
  slug: string;
  name: string;
  eyebrow: string;
  description: string;
  fullDescription: string;
  stack: string[];
  image: string;
  live: string;
  repo: string;
  challenge: string;
  improvements: string[];
  number: string;
};
export const projects: Project[] = [
  {
    slug: "moviehub",
    name: "MovieHub",
    eyebrow: "DISCOVER · SAVE · EXPLORE",
    description:
      "A cinematic movie discovery experience for finding trending titles, exploring genres, and saving favorites.",
    fullDescription:
      "MovieHub is a movie discovery web app built around a dark, cinematic interface. Visitors can browse trending and top-rated titles, search the catalog, explore genres, and keep a personal favorites list. The project focuses on reusable UI, routing, API integration, and a polished responsive experience.",
    stack: ["React", "TypeScript", "Vite", "TMDB API", "CSS"],
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1200&q=85",
    live: "https://github.com/tausifahamedsabab/movie-app",
    repo: "https://github.com/tausifahamedsabab/movie-app",
    challenge:
      "Managing API loading and error states while keeping navigation, search, and favorites consistent across multiple routes.",
    improvements: [
      "Add richer movie recommendations and filters.",
      "Improve automated tests and accessibility.",
      "Finish account-based syncing for favorites.",
    ],
    number: "01",
  },
  {
    slug: "bazar-dor",
    name: "Bazar-Dor",
    eyebrow: "SMARTER EVERYDAY SHOPPING",
    description:
      "A marketplace-style web experience designed to help users explore products with a clean shopping flow.",
    fullDescription:
      "Bazar-Dor is a product-focused marketplace project. It brings together a clear browsing experience, reusable product UI, and a foundation for authentication and data-backed features. The interface is designed to keep product discovery simple on both desktop and mobile.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Better Auth"],
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=85",
    live: "https://github.com/tausifahamedsabab/b14-a7-bazar-dor-project",
    repo: "https://github.com/tausifahamedsabab/b14-a7-bazar-dor-project",
    challenge:
      "Connecting the UI to product data and planning authentication and environment variables across local development and deployment.",
    improvements: [
      "Complete and test the full checkout flow.",
      "Add stronger form validation and loading states.",
      "Improve product filtering and search.",
    ],
    number: "02",
  },
  {
    slug: "fitlog",
    name: "FitLog",
    eyebrow: "BUILD HEALTHIER HABITS",
    description:
      "A fitness logging interface for organizing workout activity and making progress easier to follow.",
    fullDescription:
      "FitLog is a fitness-focused project built to make activity tracking feel approachable. The project emphasizes a straightforward layout, reusable components, and clear presentation of workout information.",
    stack: ["Next.js", "JavaScript", "Tailwind CSS", "REST API"],
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85",
    live: "https://github.com/tausifahamedsabab/b14-a6-fit-log-project",
    repo: "https://github.com/tausifahamedsabab/b14-a6-fit-log-project",
    challenge:
      "Keeping component structure manageable while shaping a useful interface for workout information and user interaction.",
    improvements: [
      "Add progress charts and workout history.",
      "Add user profiles and persistent data.",
      "Improve mobile interaction and empty states.",
    ],
    number: "03",
  },
];
export const skills = [
  {
    title: "Frontend",
    items: [
      ["HTML5", 92],
      ["CSS3", 88],
      ["JavaScript", 82],
      ["TypeScript", 76],
      ["React", 82],
      ["Next.js", 75],
      ["Tailwind CSS", 88],
    ],
  },
  {
    title: "Backend & Data",
    items: [
      ["Node.js", 58],
      ["Express.js", 55],
      ["REST API Integration", 78],
      ["MongoDB", 52],
    ],
  },
  {
    title: "Tools & Workflow",
    items: [
      ["Git & GitHub", 82],
      ["Responsive Design", 86],
      ["Debugging", 70],
      ["Figma to UI", 68],
    ],
  },
];
