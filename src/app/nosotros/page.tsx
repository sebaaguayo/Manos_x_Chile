"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  SectionLabel,
  Button,
  Tag,
  Stat,
  Card,
} from "@/components/design-system";

export default function Nosotros() {
  const router = useRouter();
  const wrap = { maxWidth: 1280, margin: "0 auto", padding: "0 2rem" };
  const narrow = { maxWidth: 860, margin: "0 auto", padding: "0 2rem" };

  const values = [
    {
      t: "Sostenibilidad",
      d: "Transformamos residuos en recursos para frenar el colapso de los vertederos de Chiloé y reducir la huella de carbono de sacar la basura de la isla.",
      ring: "green" as const,
    },
    {
      t: "Calidad",
      d: "Productos duraderos que cumplen con los más altos estándares industriales, certificados ASTM y NCh.",
      ring: "blue" as const,
    },
    {
      t: "Comunidad",
      d: "Generamos empleo local y fortalecemos el desarrollo de Chiloé, manteniendo los recursos y el trabajo en la región.",
      ring: "green" as const,
    },
    {
      t: "Innovación",
      d: "Aplicamos tecnología y procesos innovadores en el reciclaje y la transformación de plásticos.",
      ring: "blue" as const,
    },
  ];

  const impact = [
    { v: "10+", l: "Ton recicladas / mes", c: "blue" as const },
    { v: "15+", l: "Empleos locales", c: "green" as const },
    { v: "100%", l: "Compromiso con Chiloé", c: "blue" as const },
  ];

  const facilities = ["facility_1.jpg", "facility_2.jpg", "facility_3.jpg", "facility_4.png"];

  return (
    <div>
      {/* HERO */}
      <section style={{ padding: "2.5rem 2rem 0" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            position: "relative",
            height: "58vh",
            minHeight: 440,
            maxHeight: 620,
            overflow: "hidden",
            borderRadius: "var(--radius-2xl)",
            boxShadow: "var(--ring-card-green)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/chiloe_landscape.jpg"
            alt="Paisaje de Chiloé"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "var(--overlay-hero)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ textAlign: "center", color: "#fff", maxWidth: 800, padding: "0 2rem" }}>
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
                Desde Chiloé
              </span>
              <h1
                style={{
                  fontSize: "3.4rem",
                  fontWeight: 900,
                  lineHeight: 1.04,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  margin: "0 0 1.25rem",
                }}
                className="text-4xl sm:text-5xl"
              >
                Nosotros
              </h1>
              <p
                style={{ fontSize: "1.25rem", fontWeight: 500, lineHeight: 1.5, opacity: 0.95, margin: 0 }}
                className="text-base sm:text-lg"
              >
                Transformando los residuos de nuestras playas en un futuro sostenible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section style={{ padding: "6rem 0 5rem" }}>
        <div style={narrow}>
          <div style={{ textAlign: "center" }}>
            <SectionLabel>Nuestra misión</SectionLabel>
            <h2
              style={{
                fontSize: "2.3rem",
                fontWeight: 900,
                lineHeight: 1.12,
                letterSpacing: "0.02em",
                textTransform: "uppercase",
                color: "var(--ink-900)",
                margin: "1rem 0 2rem",
              }}
              className="text-3xl sm:text-4xl"
            >
              Rescatamos el plástico antes de que llegue al mar
            </h2>
          </div>
          <p
            style={{
              fontSize: "1.15rem",
              lineHeight: 1.75,
              color: "var(--ink-500)",
              fontWeight: 500,
              margin: "0 0 1.5rem",
              textAlign: "center",
            }}
            className="text-base sm:text-lg"
          >
            En Manos x Chile recuperamos residuos plásticos de las playas, la industria de la
            acuicultura y el uso doméstico, y los transformamos en productos sostenibles de alta calidad.
          </p>
          <p
            style={{
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: "var(--ink-500)",
              fontWeight: 500,
              margin: 0,
              textAlign: "center",
            }}
            className="text-sm sm:text-base"
          >
            Operamos desde Ruta W-450 Camino Piruquina, en Chiloé, y Puerto Montt, contribuyendo
            activamente a la economía circular y al desarrollo local de nuestra región.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ padding: "6rem 0", background: "var(--surface-1)" }}>
        <div style={wrap}>
          <SectionLabel color="blue">Nuestros valores</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {values.map((v) => (
              <Card key={v.t} ring={v.ring} interactive padding="2rem">
                <h3
                  style={{
                    fontSize: "1.15rem",
                    fontWeight: 800,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "var(--ink-900)",
                    margin: "0 0 0.75rem",
                  }}
                >
                  {v.t}
                </h3>
                <p style={{ fontSize: "0.95rem", color: "var(--ink-500)", fontWeight: 500, lineHeight: 1.65, margin: 0 }}>
                  {v.d}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section style={{ padding: "6.5rem 0" }}>
        <div style={{ ...wrap, textAlign: "center" }}>
          <SectionLabel>Nuestro impacto</SectionLabel>
          <div style={{ display: "flex", gap: "4rem", justifyContent: "center", flexWrap: "wrap", marginTop: "3rem" }}>
            {impact.map((s) => (
              <Stat key={s.l} value={s.v} label={s.l} color={s.c} size="lg" align="center" />
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES */}
      <section style={{ padding: "0 0 7rem" }}>
        <div style={wrap}>
          <SectionLabel color="blue">Nuestras instalaciones</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            {facilities.map((f, i) => (
              <div
                key={f}
                style={{
                  borderRadius: "var(--radius-xl)",
                  overflow: "hidden",
                  boxShadow: i % 2 ? "var(--ring-card-green)" : "var(--ring-card-blue)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/assets/${f}`}
                  alt="Instalación Manos x Chile"
                  style={{ width: "100%", aspectRatio: "4 / 3", objectFit: "cover", display: "block" }}
                />
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
            <Button variant="eco" size="lg" onClick={() => router.push("/productos")}>
              Ver Productos
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
