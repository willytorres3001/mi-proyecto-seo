
import Head from "next/head";

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Contacto | Mi Sitio Optimizado</title>

        <meta
          name="description"
          content="Ponte en contacto con nosotros para resolver tus consultas sobre desarrollo web y tecnología."
        />

        <meta
          name="keywords"
          content="contacto, soporte, desarrollo web, tecnología"
        />

        <meta
          property="og:title"
          content="Contacto - Mi Sitio Optimizado"
        />

        <meta
          property="og:description"
          content="Contáctanos para obtener más información sobre nuestros servicios tecnológicos."
        />

        <meta
          property="og:image"
          content="/images/seo-image.png"
        />

        <meta property="og:type" content="website" />
      </Head>

      <main style={{ padding: "40px" }}>
        <h1>Contáctanos</h1>

        <p>
          ¿Tienes alguna consulta sobre desarrollo web
          o tecnología? Estamos aquí para ayudarte.
        </p>

        <h2>Información de contacto</h2>

        <p>
          Correo: contacto@misitio.com
        </p>

        <p>
          Horario de atención: Lunes a viernes.
        </p>
      </main>
    </>
  );
}
