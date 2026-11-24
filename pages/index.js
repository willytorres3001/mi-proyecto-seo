
import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";

// Componente cargado dinámicamente
const DynamicComponent = dynamic(
  () => import("../components/LargeComponent"),
  {
    ssr: false,
    loading: () => <p>Cargando componente...</p>,
  }
);

export default function Home() {
  return (
    <>
      {/* Paso 1: Meta Tags SEO */}
      <Head>
        <title>Mi Sitio Optimizado - Home</title>

        <meta
          name="description"
          content="Aprende sobre optimización SEO y rendimiento en Next.js."
        />

        <meta
          name="keywords"
          content="Next.js, SEO, optimización web"
        />

        <meta
          property="og:title"
          content="Mi Sitio Optimizado"
        />

        <meta
          property="og:description"
          content="Descubre técnicas avanzadas para mejorar tu web con Next.js."
        />

        <meta
          property="og:image"
          content="/images/seo-image.png"
        />

        <meta property="og:type" content="website" />
      </Head>

       <main
        style={{
          padding: "40px",
        }}
      >
        <h1>Bienvenido a mi página optimizada</h1>

        <p>
          Aprende cómo mejorar el rendimiento y SEO
          en Next.js.
        </p>

        {/* Paso 3: Imagen optimizada */}
        <Image
          src="/images/seo-image.png"
          width={800}
          height={400}
          alt="Ejemplo de imagen optimizada para SEO"
          priority
          style={{
            maxWidth: "100%",
            height: "auto",
            borderRadius: "10px",
            marginTop: "20px",
          }}
        />

        {/* Paso 4: Lazy Loading */}
        <DynamicComponent />
      </main>
    </>
  );
}
