import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Manos x Chile — Ecomadera Circular de Chiloé",
  description:
    "Evitamos que el plástico llegue al mar. Lo rescatamos de playas de la Patagonia y lo transformamos en Ecomadera de alta durabilidad en Chiloé.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL" className="h-full antialiased" suppressHydrationWarning>
      <head>
        {/* Fija el tema guardado (o el del sistema) antes del primer pintado */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('mxc-theme');if(t!=='dark'&&t!=='light'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){}})();",
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--paper)] text-[var(--ink-900)] selection:bg-[var(--green-500)] selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
