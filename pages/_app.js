
import { Inter } from "next/font/google";
import "@/styles/globals.css";

// Configuración de la fuente Inter
const inter = Inter({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
