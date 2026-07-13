import type { Metadata } from "next";
import Link from "next/link";
import { Card, Tag } from "@/components/design-system";
import { NEWS } from "@/data/noticias";

export const metadata: Metadata = {
  title: "Noticias — Manos x Chile",
  description:
    "Novedades de Manos x Chile: ferias, seminarios y el trabajo que realizamos por la economía circular en Chiloé.",
};

export default function Noticias() {
  const wrap = { maxWidth: 1280, margin: "0 auto", padding: "0 2rem" };

  return (
    <div>
      {/* HERO */}
      <section style={{ padding: "4rem 0 3rem", textAlign: "center" }}>
        <span
          style={{
            display: "inline-block",
            fontSize: "0.72rem",
            fontWeight: 800,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#fff",
            background: "var(--green-500)",
            padding: "0.45rem 1rem",
            borderRadius: "var(--radius-full)",
            marginBottom: "1.5rem",
          }}
        >
          Novedades y comunidad
        </span>
        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: 900,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "var(--ink-900)",
            margin: 0,
            lineHeight: 1,
          }}
          className="text-4xl sm:text-5xl"
        >
          Noticias
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            fontWeight: 500,
            color: "var(--ink-500)",
            maxWidth: 620,
            margin: "1.5rem auto 0",
          }}
          className="text-base sm:text-lg px-4"
        >
          Lo que estamos haciendo por la economía circular, desde Chiloé.
        </p>
      </section>

      {/* LISTADO */}
      <section style={{ padding: "1rem 0 7rem" }}>
        <div style={wrap}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {NEWS.map((n, i) => (
              <Link key={n.slug} href={`/noticias/${n.slug}`} style={{ textDecoration: "none" }}>
                <Card
                  ring={i % 2 ? "blue" : "green"}
                  interactive
                  padding="0.9rem"
                  style={{ overflow: "hidden", height: "100%" }}
                >
                  <div style={{ borderRadius: "var(--radius-lg)", overflow: "hidden", marginBottom: "1.25rem" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/assets/${n.image}`}
                      alt={n.imageAlt}
                      style={{ width: "100%", height: 320, objectFit: "cover", display: "block" }}
                    />
                  </div>
                  <div style={{ padding: "0 0.5rem 0.75rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.9rem", flexWrap: "wrap" }}>
                      <Tag variant={i % 2 ? "blue" : "green"}>{n.category}</Tag>
                      <span
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: "var(--ink-400)",
                        }}
                      >
                        {n.date}
                      </span>
                    </div>
                    <h2
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: 800,
                        letterSpacing: "0.04em",
                        textTransform: "uppercase",
                        color: "var(--ink-900)",
                        lineHeight: 1.3,
                        margin: "0 0 0.6rem",
                      }}
                    >
                      {n.title}
                    </h2>
                    <p style={{ fontSize: "0.95rem", color: "var(--ink-500)", fontWeight: 500, lineHeight: 1.6, margin: "0 0 1rem" }}>
                      {n.excerpt}
                    </p>
                    <span
                      style={{
                        fontSize: "0.78rem",
                        fontWeight: 800,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: i % 2 ? "var(--blue-500)" : "var(--green-500)",
                      }}
                    >
                      Leer noticia →
                    </span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
