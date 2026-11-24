
import fs from "fs/promises";
import path from "path";

const BASE_URL =
  (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000")
    .replace(/\/$/, "");

export default async function handler(req, res) {
  try {
    // Leer los datos del archivo JSON
    const filePath = path.join(
      process.cwd(),
      "data",
      "pages.json"
    );

    const fileContent = await fs.readFile(filePath, "utf8");
    const pages = JSON.parse(fileContent);

    // Obtener solamente las páginas publicadas
    const publishedPages = pages.filter(
      (page) => page.published === true
    );

    // Generar las direcciones XML
    const urls = publishedPages
      .map((page) => {
        const route = page.slug
          ? `/${page.slug}`
          : "/";

        return `
          <url>
            <loc>${BASE_URL}${route}</loc>
            <lastmod>${page.lastModified}</lastmod>
          </url>
        `;
      })
      .join("");

    // Construir el Sitemap
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${urls}
      </urlset>
    `;

    res.setHeader(
      "Content-Type",
      "application/xml; charset=utf-8"
    );

    res.status(200).send(sitemap);

  } catch (error) {
    console.error("Error al generar Sitemap:", error);

    res.status(500).json({
      message: "No se pudo generar el Sitemap"
    });
  }
}
