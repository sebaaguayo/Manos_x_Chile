"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "./design-system";

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  const links = [
    { href: "/proceso", label: "Cómo Funciona" },
    { href: "/productos", label: "Productos" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        height: 84,
        background: "rgba(255,254,254,0.9)",
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
        }}
      >
        <Link href="/" style={{ display: "flex" }}>
          <Image
            src="/assets/logo.png"
            alt="manos CHILE"
            width={121}
            height={42}
            style={{ height: 42, width: "auto" }}
            priority
          />
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: "2.25rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "2.25rem" }} className="hidden md:flex">
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
          <Button size="sm" onClick={() => router.push("/contacto")}>
            Cotizar
          </Button>
        </div>
      </div>
    </nav>
  );
}
