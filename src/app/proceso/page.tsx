"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  SectionLabel,
  Button,
  Card,
  BenefitCard,
} from "@/components/design-system";
import {
  WavesIcon,
  FunnelIcon,
  GearIcon,
  BoxIcon,
  TruckIcon,
} from "@/components/Icons";
import { IsoRescate, IsoTransformacion, IsoEcomadera } from "@/components/Illustrations";

export default function Proceso() {
  const router = useRouter();
  const wrap = { maxWidth: 1280, margin: "0 auto", padding: "0 2rem" };

  const stages = [
    {
      title: "Rescate",
      illustration: <IsoRescate />,
      ring: "blue" as const,
      description: "Recuperamos el plástico de las costas y la industria acuícola de la Patagonia.",
    },
    {
      title: "Transformación",
      illustration: <IsoTransformacion />,
      ring: "green" as const,
      description: "Lavado, molienda y extrusión de alta tecnología para darle una segunda vida.",
    },
    {
      title: "Ecomadera",
      illustration: <IsoEcomadera />,
      ring: "blue" as const,
      description: "Tablas y mobiliario de larga duración, listos para tu proyecto.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Rescate",
      icon: <WavesIcon size={34} />,
      description:
        "Recolectamos plástico de las playas y costas, de la industria de la acuicultura y de uso doméstico en Chiloé y Puerto Montt.",
    },
    {
      number: "02",
      title: "Clasificación",
      icon: <FunnelIcon size={34} />,
      description:
        "Separamos y clasificamos los plásticos según su tipo y calidad para garantizar productos de excelencia.",
    },
    {
      number: "03",
      title: "Procesamiento",
      icon: <GearIcon size={34} />,
      description:
        "Limpiamos, trituramos y procesamos el material para transformarlo en materia prima de alta calidad.",
    },
    {
      number: "04",
      title: "Transformación",
      icon: <BoxIcon size={34} />,
      description:
        "Moldeamos y fabricamos Ecomadera y productos duraderos con estándares de calidad industrial.",
    },
    {
      number: "05",
      title: "Distribución",
      icon: <TruckIcon size={34} />,
      description:
        "Entregamos a clientes en Chiloé y todo Chile, cerrando el ciclo de la economía circular.",
    },
  ];

  const benefits = [
    {
      number: "01",
      title: "Sostenibilidad",
      ring: "green" as const,
      description: "500+ toneladas de plástico rescatado y reciclado anualmente.",
      stats: [
        { value: "100%", label: "Reciclado" },
        { value: "-60%", label: "CO₂" },
      ],
    },
    {
      number: "02",
      title: "Durabilidad",
      ring: "blue" as const,
      description: "Certificaciones ASTM y NCh. Vida útil superior a 25 años.",
      stats: [
        { value: "25+", label: "Años" },
        { value: "IP65", label: "Resistencia" },
      ],
    },
    {
      number: "03",
      title: "Impacto Local",
      ring: "green" as const,
      description: "Producción 100% en Chiloé. 50+ empleos locales.",
      stats: [
        { value: "50+", label: "Empleos" },
        { value: "0km", label: "Producción" },
      ],
    },
    {
      number: "04",
      title: "Calidad",
      ring: "blue" as const,
      description: "Certificación ISO internacional y control riguroso de cada lote.",
      stats: [
        { value: "ISO", label: "Certificado" },
        { value: "100%", label: "Inspeccionado" },
      ],
    },
  ];

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
            background: "var(--blue-500)",
            padding: "0.45rem 1rem",
            borderRadius: "var(--radius-full)",
            marginBottom: "1.5rem",
          }}
        >
          Economía circular
        </span>
        <h1
          style={{
            fontSize: "3.4rem",
            fontWeight: 900,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: "var(--ink-900)",
            margin: 0,
            lineHeight: 1,
          }}
          className="text-4xl sm:text-5xl"
        >
          Cómo Funciona
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
          De la playa al producto terminado: cinco pasos que cierran el ciclo de vida del plástico.
        </p>
      </section>

      {/* ISOMETRIC STAGES */}
      <section style={{ padding: "1rem 0 2rem" }}>
        <div style={wrap}>
          <SectionLabel>El proceso en 3 etapas</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {stages.map((s) => (
              <Card key={s.title} ring={s.ring} interactive padding="2rem">
                <div
                  style={{
                    background: s.ring === "green" ? "var(--green-50)" : "var(--blue-50)",
                    borderRadius: "var(--radius-lg)",
                    padding: "0.5rem 1rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  {s.illustration}
                </div>
                <h3
                  style={{
                    fontSize: "1.15rem",
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
                  {s.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* STEPS timeline */}
      <section style={{ padding: "3rem 0 6rem" }}>
        <div style={{ ...wrap, marginBottom: "2.5rem" }}>
          <SectionLabel>Paso a paso</SectionLabel>
        </div>
        <div style={wrap}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {steps.map((s, i) => (
              <Card
                key={s.number}
                ring={i % 2 ? "green" : "blue"}
                interactive
                padding="0"
                style={{ overflow: "hidden" }}
              >
                <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] items-center">
                  <div
                    style={{
                      background: i % 2 ? "var(--green-50)" : "var(--blue-50)",
                      alignSelf: "stretch",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.75rem",
                      padding: "2.25rem 0",
                      color: i % 2 ? "var(--green-500)" : "var(--blue-500)",
                    }}
                    className="md:border-r border-b md:border-b-0 border-[var(--line-soft)]"
                  >
                    <span
                      style={{
                        fontSize: "3.5rem",
                        fontWeight: 900,
                        color: i % 2 ? "var(--green-500)" : "var(--blue-500)",
                        lineHeight: 1,
                      }}
                    >
                      {s.number}
                    </span>
                    {s.icon}
                  </div>
                  <div className="p-6 md:p-8">
                    <h3
                      style={{
                        fontSize: "1.3rem",
                        fontWeight: 800,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        color: "var(--ink-900)",
                        margin: "0 0 0.5rem",
                      }}
                    >
                      {s.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "1rem",
                        color: "var(--ink-500)",
                        fontWeight: 500,
                        lineHeight: 1.65,
                        margin: 0,
                      }}
                    >
                      {s.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section style={{ padding: "6rem 0", background: "var(--surface-1)" }}>
        <div style={wrap}>
          <SectionLabel>Beneficios</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {benefits.map((b) => (
              <BenefitCard key={b.number} {...b} />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "3.5rem" }}>
            <Button size="lg" onClick={() => router.push("/productos")}>
              Ver Catálogo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
