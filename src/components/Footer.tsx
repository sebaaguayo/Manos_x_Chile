"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const navigationItems = [
    { label: "Proceso", href: "/proceso" },
    { label: "Catálogo", href: "/productos" },
    { label: "Nosotros", href: "/nosotros" },
  ];

  const contactItems = [
    { label: "Jmtoro@manosxchile.cl", href: "mailto:Jmtoro@manosxchile.cl" },
    { label: "+56 9 9939 3549", href: "tel:+56999393549" },
  ];

  const socialItems = [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ];

  return (
    <footer style={{ background: "var(--ink-900)", padding: "5rem 0 2.5rem", marginTop: "auto" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 2rem" }}>
        <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-12 md:gap-16 mb-16">
          <div>
            <Image
              src="/assets/logo.png"
              alt="manos CHILE"
              width={121}
              height={42}
              style={{ height: 36, width: "auto", marginBottom: "1.5rem", filter: "brightness(0) invert(1)" }}
            />
            <p style={{ fontSize: "0.95rem", lineHeight: 1.6, color: "rgba(255,255,255,0.7)", fontWeight: 500, margin: 0 }}>
              Plástico rescatado de las playas de la Patagonia,
              <br /> con una segunda vida. Desde Chiloé para el mundo.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Navegación */}
            <div>
              <h4 style={{ fontSize: "0.72rem", color: "var(--green-500)", marginBottom: "1.5rem", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase" }}>
                Navegación
              </h4>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {navigationItems.map((it) => (
                  <li key={it.label}>
                    <Link
                      href={it.href}
                      style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.75)", textDecoration: "none", fontWeight: 500 }}
                      className="hover:text-white transition"
                    >
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contacto */}
            <div>
              <h4 style={{ fontSize: "0.72rem", color: "var(--green-500)", marginBottom: "1.5rem", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase" }}>
                Contacto
              </h4>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {contactItems.map((it) => (
                  <li key={it.label}>
                    <a
                      href={it.href}
                      style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.75)", textDecoration: "none", fontWeight: 500 }}
                      className="hover:text-white transition"
                    >
                      {it.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Redes Sociales */}
            <div>
              <h4 style={{ fontSize: "0.72rem", color: "var(--green-500)", marginBottom: "1.5rem", fontWeight: 800, letterSpacing: "0.14em", textTransform: "uppercase" }}>
                Social
              </h4>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.85rem" }}>
                {socialItems.map((it) => (
                  <li key={it.label}>
                    <a
                      href={it.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.75)", textDecoration: "none", fontWeight: 500 }}
                      className="hover:text-white transition"
                    >
                      {it.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div style={{ paddingTop: "2rem", borderTop: "1.5px solid rgba(255,255,255,0.12)", fontSize: "0.78rem", color: "rgba(255,255,255,0.5)", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", fontWeight: 500 }}>
          <span>© {new Date().getFullYear()} Manos x Chile. Todos los derechos reservados.</span>
          <span>Desarrollado por El Faro, desde Puerto Varas</span>
        </div>
      </div>
    </footer>
  );
}
