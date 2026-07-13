import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button, Tag } from "@/components/design-system";
import { NEWS, getArticle } from "@/data/noticias";

export function generateStaticParams() {
  return NEWS.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: "Noticia no encontrada — Manos x Chile" };
  return {
    title: `${article.title} — Manos x Chile`,
    description: article.excerpt,
  };
}

export default async function Noticia({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const narrow = { maxWidth: 780, margin: "0 auto", padding: "0 2rem" };

  return (
    <div>
      {/* CABECERA */}
      <section style={{ padding: "3.5rem 0 2.5rem" }}>
        <div style={{ ...narrow, textAlign: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.85rem",
              marginBottom: "1.5rem",
              flexWrap: "wrap",
            }}
          >
            <Tag variant="green">{article.category}</Tag>
            <span
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--ink-400)",
              }}
            >
              {article.date}
            </span>
          </div>
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: 900,
              lineHeight: 1.12,
              letterSpacing: "0.03em",
              textTransform: "uppercase",
              color: "var(--ink-900)",
              margin: 0,
            }}
            className="text-3xl sm:text-4xl"
          >
            {article.title}
          </h1>
          <p
            style={{
              fontSize: "1.15rem",
              fontWeight: 600,
              lineHeight: 1.6,
              color: "var(--ink-500)",
              margin: "1.5rem 0 0",
            }}
            className="text-base sm:text-lg"
          >
            {article.excerpt}
          </p>
        </div>
      </section>

      {/* FOTO DESTACADA */}
      <section style={{ padding: "0 0 3rem" }}>
        <div style={{ maxWidth: 980, margin: "0 auto", padding: "0 2rem" }}>
          <div
            style={{
              borderRadius: "var(--radius-2xl)",
              overflow: "hidden",
              boxShadow: "var(--ring-card-green)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/assets/${article.image}`}
              alt={article.imageAlt}
              style={{ width: "100%", maxHeight: 560, objectFit: "cover", display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* CUERPO */}
      <section style={{ padding: "1rem 0 4rem" }}>
        <div style={narrow}>
          {article.body.map((block, i) =>
            block.type === "quote" ? (
              <blockquote
                key={i}
                style={{
                  margin: "2.25rem 0",
                  padding: "1.5rem 1.75rem",
                  borderLeft: "4px solid var(--green-500)",
                  background: "var(--green-50)",
                  borderRadius: "0 var(--radius-lg) var(--radius-lg) 0",
                }}
              >
                <p
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    fontStyle: "italic",
                    lineHeight: 1.65,
                    color: "var(--ink-900)",
                    margin: 0,
                  }}
                >
                  “{block.text}”
                </p>
                {block.author && (
                  <footer
                    style={{
                      marginTop: "0.9rem",
                      fontSize: "0.78rem",
                      fontWeight: 800,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--green-700)",
                    }}
                  >
                    — {block.author}
                  </footer>
                )}
              </blockquote>
            ) : (
              <p
                key={i}
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  color: "var(--ink-700)",
                  fontWeight: 500,
                  margin: "0 0 1.5rem",
                }}
              >
                {block.text}
              </p>
            )
          )}

          <div
            style={{
              marginTop: "3rem",
              paddingTop: "2rem",
              borderTop: "1.5px solid var(--line-soft)",
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Link
              href="/noticias"
              style={{
                fontSize: "0.78rem",
                fontWeight: 800,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                color: "var(--blue-500)",
              }}
            >
              ← Volver a noticias
            </Link>
            <Button as="a" href="/contacto" variant="eco" size="sm">
              Contáctanos
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
