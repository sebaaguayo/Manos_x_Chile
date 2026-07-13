"use client";

import React, { useEffect, useState } from "react";

type Theme = "light" | "dark";

/**
 * Botón circular para alternar modo claro/oscuro.
 * El tema vive en <html data-theme> (lo fija un script inline en el
 * layout antes de pintar) y se persiste en localStorage("mxc-theme").
 */
export function ThemeToggle({ style }: { style?: React.CSSProperties }) {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "dark" ? "dark" : "light");
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("mxc-theme", next);
    } catch {
      /* almacenamiento no disponible */
    }
    setTheme(next);
  };

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      title={theme === "dark" ? "Modo claro" : "Modo oscuro"}
      style={style}
    >
      {/* Se renderiza vacío hasta montar para no desincronizar la hidratación */}
      {theme === "dark" ? (
        /* Sol */
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
          <circle cx="12" cy="12" r="4.5" />
          <line x1="12" y1="2" x2="12" y2="4.5" />
          <line x1="12" y1="19.5" x2="12" y2="22" />
          <line x1="2" y1="12" x2="4.5" y2="12" />
          <line x1="19.5" y1="12" x2="22" y2="12" />
          <line x1="4.6" y1="4.6" x2="6.4" y2="6.4" />
          <line x1="17.6" y1="17.6" x2="19.4" y2="19.4" />
          <line x1="4.6" y1="19.4" x2="6.4" y2="17.6" />
          <line x1="17.6" y1="6.4" x2="19.4" y2="4.6" />
        </svg>
      ) : theme === "light" ? (
        /* Luna */
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z" />
        </svg>
      ) : (
        <span style={{ width: 18, height: 18 }} />
      )}
    </button>
  );
}
