import type { APIRoute } from "astro";

const robotsTxt = `
User-agent: *
Allow: /

Sitemap: https://www.ethansoftwaredeveloper.com/sitemap-index.xml
Sitemap: https://www.ethansoftwaredeveloper.com/sitemap.xml
`.trim();

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
