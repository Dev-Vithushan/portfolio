import type { APIRoute } from 'astro';
import { projects } from '../data/projects';

const site = 'https://dev-vithushan.github.io';
const base = '/portfolio';

const routes = [
  '',
  'writing',
  ...projects.map((project) => `projects/${project.slug}`),
];

export const GET: APIRoute = () => {
  const urls = routes
    .map((route) => {
      const path = route ? `${base}/${route}/` : `${base}/`;
      return `  <url><loc>${new URL(path, site).href}</loc></url>`;
    })
    .join('\n');

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
