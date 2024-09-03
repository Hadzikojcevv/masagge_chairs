 import chairs from '../data/Data/massageChairs'

export async function GET() {
  const baseUrl = 'https://masagge-chairs.vercel.app'; // Replace with your actual domain

  // Static routes
  const staticPages = [`${baseUrl}/`];

  // Dynamic product pages
  const dynamicPages = chairs.map((chair) => {
    return `${baseUrl}/${chair.title}`;
  });

  const allPages = [...staticPages, ...dynamicPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allPages
        .map((url) => {
          return `
          <url>
            <loc>${url}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>0.8</priority>
          </url>
        `;
        })
        .join('')}
    </urlset>
  `;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}