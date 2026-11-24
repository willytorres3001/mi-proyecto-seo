
import Head from "next/head";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog de Tecnología | Mi Sitio Optimizado</title>

        <meta
          name="description"
          content="Descubre artículos, tutoriales y novedades sobre desarrollo web, programación y tecnología."
        />

        <meta
          name="keywords"
          content="blog, tecnología, programación, desarrollo web, Next.js"
        />

        <meta
          property="og:title"
          content="Blog de Tecnología"
        />

        <meta
          property="og:description"
          content="Explora artículos y novedades sobre programación y desarrollo web."
        />

        <meta
          property="og:image"
          content="/images/seo-image.png"
        />

        <meta property="og:type" content="website" />
      </Head>

      <main style={{ padding: "40px" }}>
        <h1>Blog de Tecnología</h1>

        <p>
          Bienvenido a nuestro blog. Aquí encontrarás
          artículos sobre programación, desarrollo web
          y nuevas tecnologías.
        </p>

        <h2>Últimos artículos</h2>

        <ul>
          <li>Introducción al desarrollo con Next.js</li>
          <li>Importancia del SEO en aplicaciones web</li>
          <li>Optimización del rendimiento web</li>
        </ul>
      </main>
    </>
  );
}
