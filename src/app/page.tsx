"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Button,
  SectionLabel,
  BenefitCard,
  Tag,
  Stat,
  Card,
} from "@/components/design-system";
import { WavesIcon, ShieldIcon, LocationIcon, MedalIcon } from "@/components/Icons";

export default function Home() {
  const router = useRouter();

  const benefits = [
    {
      number: "01",
      title: "Rescatado de playas",
      ring: "blue" as const,
      icon: <WavesIcon size={32} />,
      description:
        "Recuperamos plástico de las costas y la industria acuícola de la Patagonia antes de que llegue al mar.",
      stats: [
        { value: "100%", label: "Reciclado" },
        { value: "0", label: "Residuos al vertedero" },
      ],
    },
    {
      number: "02",
      title: "Durabilidad",
      ring: "green" as const,
      icon: <ShieldIcon size={32} />,
      description:
        "Vida útil superior a 25 años y resistencia IP65 a la intemperie.",
      stats: [
        { value: "25+", label: "Años" },
        { value: "IP65", label: "Resistencia" },
      ],
    },
    {
      number: "03",
      title: "Impacto Local",
      ring: "blue" as const,
      icon: <LocationIcon size={32} />,
      description:
        "Producción 100% en Chiloé. 15 empleos locales y economía regional.",
      stats: [
        { value: "15", label: "Empleos" },
        { value: "0km", label: "Producción" },
      ],
    },
    {
      number: "04",
      title: "Calidad",
      ring: "green" as const,
      icon: <MedalIcon size={32} />,
      description:
        "La calidad de nuestros productos está evaluada y estudiada por el laboratorio DICTUC S.A. de la Universidad Católica de Chile.",
      stats: [
        { value: "DICTUC", label: "Laboratorio UC" },
        { value: "-60%", label: "CO₂" },
      ],
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Rescate",
      desc: "Recolectamos plástico de playas, costas y la industria acuícola.",
      image: "rescate.png",
      alt: "Ilustración del rescate de plástico en la costa",
    },
    {
      number: "02",
      title: "Transformación",
      desc: "Lavado, molienda y extrusión de alta tecnología.",
      image: "transformacion.png",
      alt: "Ilustración del proceso de transformación del plástico",
    },
    {
      number: "03",
      title: "Ecomadera",
      desc: "Tablas y mobiliario duraderos con una segunda vida.",
      image: "ecomadera.png",
      alt: "Ilustración de productos de ecomadera terminados",
    },
  ];

  const wrap = { maxWidth: 1280, margin: "0 auto", padding: "0 2rem" };

  return (
    <div>
      {/* HERO */}
      <section className="px-4 pt-6 md:px-8 md:pt-10">
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            position: "relative",
            minHeight: 520,
            maxHeight: 720,
            overflow: "hidden",
            borderRadius: "var(--radius-2xl)",
            boxShadow: "var(--ring-card-blue)",
          }}
          className="h-[60vh] md:h-[70vh]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/hero_banner.png"
            alt="Costa de Chiloé de donde se rescata el plástico"
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
            <div style={{ textAlign: "center", color: "#fff", maxWidth: 880, padding: "0 2rem" }}>
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
                  marginBottom: "1.75rem",
                }}
              >
                Rescatado de playas · 100% reciclado
              </span>
              <h1
                style={{
                  fontWeight: 900,
                  lineHeight: 1.04,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  margin: "0 0 1.5rem",
                }}
                className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem]"
              >
                De residuo
                <br />a oportunidad
              </h1>
              <p
                style={{
                  fontSize: "1.3rem",
                  fontWeight: 500,
                  lineHeight: 1.5,
                  opacity: 0.95,
                  margin: "0 auto 2.5rem",
                  maxWidth: 640,
                }}
                className="text-base sm:text-xl"
              >
                Rescatamos plástico para transformarlo en{" "}
                <strong style={{ fontWeight: 800 }}>Ecotablas de larga duración y calidad</strong>
              </p>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <Button size="lg" variant="eco" onClick={() => router.push("/productos")}>
                  Ver Catálogo
                </Button>
                <Button size="lg" variant="outline-light" onClick={() => router.push("/contacto")}>
                  Cotizar Proyecto
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT STRIP */}
      <section style={{ padding: "4rem 0 2rem" }}>
        <div
          style={{
            ...wrap,
            display: "flex",
            gap: "3rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Stat value="25+" label="Años de vida útil" />
          <Stat value="15" label="Empleos en Chiloé" color="blue" />
          <Stat value="-60%" label="Huella de CO₂" />
        </div>
      </section>

      {/* INTRO */}
      <section style={{ padding: "5rem 0 7rem" }}>
        <div
          style={{ ...wrap }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        >
          <div style={{ borderRadius: "var(--radius-xl)", overflow: "hidden", boxShadow: "var(--ring-card-green)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/factory_workers.jpg"
              alt="Taller en Chiloé"
              style={{ width: "100%", height: 420, objectFit: "cover", display: "block" }}
            />
          </div>
          <div>
            <SectionLabel>Nosotros</SectionLabel>
            <h2
              style={{
                fontSize: "2.4rem",
                fontWeight: 900,
                lineHeight: 1.1,
                letterSpacing: "0.02em",
                textTransform: "uppercase",
                color: "var(--ink-900)",
                margin: "1rem 0 1.5rem",
              }}
              className="text-3xl sm:text-4xl"
            >
              Le damos una segunda vida al plástico del mar
            </h2>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.65, color: "var(--ink-500)", fontWeight: 500, margin: "0 0 1.5rem" }}>
              Manos x Chile nace en Chiloé con una misión clara: evitar que los residuos plásticos de
              nuestras playas y de la industria acuícola terminen en el océano. Los rescatamos, los
              reciclamos y los transformamos en Ecomadera de alta calidad.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", marginBottom: "2rem", flexWrap: "wrap" }}>
              <Tag variant="blue">Rescatado de playas</Tag>
              <Tag variant="green">100% reciclado</Tag>
              <Tag variant="green">Hecho en Chiloé</Tag>
            </div>
            <Button variant="outline" onClick={() => router.push("/proceso")}>
              Conoce el proceso
            </Button>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section style={{ padding: "6rem 0", background: "var(--surface-1)" }}>
        <div style={wrap}>
          <SectionLabel style={{ marginBottom: "0.5rem", display: "block" }}>
            Por qué Ecomadera
          </SectionLabel>
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: 900,
              letterSpacing: "0.02em",
              textTransform: "uppercase",
              color: "var(--ink-900)",
              margin: "0 0 3rem",
            }}
          >
            Beneficios
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <BenefitCard key={b.number} {...b} />
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS TEASER */}
      <section style={{ padding: "7rem 0" }}>
        <div style={wrap}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem" }}>
            <div>
              <SectionLabel color="blue">Productos</SectionLabel>
              <h2
                style={{
                  fontSize: "2rem",
                  fontWeight: 900,
                  letterSpacing: "0.02em",
                  textTransform: "uppercase",
                  color: "var(--ink-900)",
                  margin: "0.75rem 0 0",
                }}
              >
                Catálogo
              </h2>
            </div>
            <Button variant="outline" size="sm" onClick={() => router.push("/productos")}>
              Ver todo
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                img: "materiales_construccion.png",
                t: "Materiales para Construcción",
                ring: "var(--ring-card-blue)",
              },
              {
                img: "productos_terminados.png",
                t: "Productos terminados",
                ring: "var(--ring-card-green)",
              },
            ].map((c) => (
              <Link
                key={c.t}
                href="/productos"
                aria-label={`Ver ${c.t}`}
                className="depth-card"
                style={{ boxShadow: c.ring }}
              >
                <div className="depth-media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/assets/${c.img}`} alt={c.t} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS TEASER */}
      <section style={{ padding: "0 0 7rem" }}>
        <div style={wrap}>
          <SectionLabel>Proceso</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {steps.map((s, i) => (
              <Card key={s.number} ring={i === 1 ? "green" : "blue"} padding="2rem">
                <div className="process-illustration" style={{ marginBottom: "1.5rem" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/assets/${s.image}`} alt={s.alt} />
                </div>
                <span
                  style={{
                    fontSize: "2.75rem",
                    fontWeight: 900,
                    color: i === 1 ? "var(--green-500)" : "var(--blue-500)",
                    lineHeight: 1,
                    display: "block",
                    marginBottom: "1.25rem",
                  }}
                >
                  {s.number}
                </span>
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 800,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "var(--ink-900)",
                    margin: "0 0 0.6rem",
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ fontSize: "0.95rem", color: "var(--ink-500)", fontWeight: 500, margin: 0, lineHeight: 1.6 }}>
                  {s.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
