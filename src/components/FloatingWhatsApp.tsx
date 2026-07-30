"use client";

import React from "react";
import { WhatsAppIcon } from "./Icons";

/**
 * Botón flotante de WhatsApp — fijo en la esquina inferior derecha,
 * presente en todo el sitio. Tamaño táctil adecuado en móvil y
 * respeta el safe-area de los teléfonos con notch.
 */
export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/56999393549"
      target="_blank"
      rel="noopener noreferrer"
      className="wa-fab"
      aria-label="Escríbenos por WhatsApp"
      title="Escríbenos por WhatsApp"
    >
      <WhatsAppIcon size={30} color="#fff" />
    </a>
  );
}
