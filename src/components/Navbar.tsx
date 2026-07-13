"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { href: "/proceso", label: "Cómo Funciona" },
    { href: "/productos", label: "Productos" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/noticias", label: "Noticias" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        height: 84,
        background: "var(--nav-bg)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderBottom: "1.5px solid var(--line)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          width: "100%",
          margin: "0 auto",
          padding: "0 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        <Link href="/" style={{ display: "flex" }} onClick={() => setMobileMenuOpen(false)}>
          <Image
            src="/assets/logo.png"
            alt="manos CHILE"
            width={121}
            height={42}
            style={{ height: 42, width: "auto" }}
            priority
            className="logo-light"
          />
          <Image
            src="/assets/logo_white.png"
            alt="manos CHILE"
            width={121}
            height={42}
            style={{ height: 42, width: "auto" }}
            className="logo-dark"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="nav-desktop">
          {links.map((l) => {
            const isActive = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  color: isActive ? "var(--blue-500)" : "var(--ink-900)",
                  whiteSpace: "nowrap",
                  transition: "color var(--dur-fast) ease",
                }}
                className="hover:text-[var(--blue-500)]"
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        {/* Acciones: cambio de tema (siempre) + hamburguesa (solo móvil) */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              color: "var(--ink-900)",
            }}
            className="nav-hamburger"
            aria-label="Menú principal"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
            >
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: 84,
            left: 0,
            right: 0,
            background: "var(--nav-panel-bg)",
            backdropFilter: "blur(15px)",
            WebkitBackdropFilter: "blur(15px)",
            borderBottom: "1.5px solid var(--line)",
            padding: "2rem",
            flexDirection: "column",
            gap: "1.5rem",
            zIndex: 99,
            boxShadow: "var(--shadow-md)",
          }}
          className="nav-mobile-panel"
        >
          {links.map((l) => {
            const isActive = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  color: isActive ? "var(--blue-500)" : "var(--ink-900)",
                  padding: "0.5rem 0",
                  borderBottom: "1px solid var(--line-soft)",
                  transition: "color var(--dur-fast) ease",
                }}
              >
                {l.label}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
