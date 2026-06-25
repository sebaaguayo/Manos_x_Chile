"use client";

import React, { useState } from "react";
import {
  ProductCard,
  SectionLabel,
  Button,
  Input,
  Select,
  Tag,
} from "@/components/design-system";

interface Product {
  name: string;
  image: string;
  price: string;
}

const RAW: Product[] = [
  { name: "Tabla 15,5 cm x 5,6 cm x 290 cm", image: "product_tabla_15.jpg", price: "$23.600" },
  { name: "Tabla 10 cm x 3,2 cm x 290 cm", image: "product_tabla_10_3_2.jpg", price: "$11.500" },
  { name: "Tabla 8 cm x 3 cm x 290 cm", image: "product_tabla_8_3.jpg", price: "$7.900" },
  { name: "Tabla 8 cm x 2,5 x 150 cm", image: "product_tabla_8_2_5.jpg", price: "$3.600" },
  { name: "Estacón redondo 9,5 cm x 240 cm", image: "product_estacon_redondo.jpg", price: "$18.500" },
  { name: "Estacón cuadrado 8,8 cm x 8,8 cm x 200 cm", image: "product_estacon_cuadrado.jpg", price: "$15.800" },
];

const FINISHED: Product[] = [
  { name: "Mesa de picnic 200 × 76 cm", image: "product_picnic.jpg", price: "$388.000" },
  { name: "Banca 134 × 70 × 45 cm", image: "product_bench.jpg", price: "$329.000" },
  { name: "Pallet 120 × 100 × 16 cm", image: "product_pallet.jpg", price: "$73.000" },
  { name: "Jardinera 80 × 32 × 25 cm", image: "product_jardinera.jpg", price: "$55.000" },
  { name: "Macetero 20 × 20 × 24 cm", image: "product_masetero.jpg", price: "$35.000" },
];

interface QuoteModalProps {
  product: Product;
  onClose: () => void;
}

function QuoteModal({ product, onClose }: QuoteModalProps) {
  const [sent, setSent] = useState(false);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(39,38,38,0.55)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        padding: "1.5rem",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "var(--paper)",
          borderRadius: "var(--radius-xl)",
          padding: "2.5rem",
          maxWidth: 480,
          width: "100%",
          boxShadow: "var(--shadow-modal)",
        }}
      >
        {!sent ? (
          <>
            <SectionLabel color="blue">Cotizar</SectionLabel>
            <h3
              style={{
                fontSize: "1.4rem",
                fontWeight: 800,
                letterSpacing: "0.02em",
                margin: "0.75rem 0 0.4rem",
                color: "var(--ink-900)",
                textTransform: "uppercase",
              }}
            >
              {product.name}
            </h3>
            <p style={{ color: "var(--ink-500)", fontWeight: 500, margin: "0 0 1.75rem", fontSize: "0.95rem" }}>
              Te contactamos con una cotización a medida.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <Input placeholder="Nombre" required />
              <Input placeholder="Email" type="email" required />
              <Select defaultValue="" required>
                <option value="" disabled>
                  Cantidad estimada
                </option>
                <option value="1-10">1 – 10 unidades</option>
                <option value="10-50">10 – 50 unidades</option>
                <option value="50+">50+ unidades</option>
              </Select>
              <Button type="submit" fullWidth style={{ marginTop: "0.5rem" }}>
                Enviar solicitud
              </Button>
            </form>
          </>
        ) : (
          <div style={{ textAlign: "center", padding: "1rem 0" }}>
            <div
              style={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                background: "var(--green-500)",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2rem",
                margin: "0 auto 1.5rem",
              }}
            >
              ✓
            </div>
            <h3
              style={{
                fontSize: "1.4rem",
                fontWeight: 800,
                margin: "0 0 0.5rem",
                color: "var(--ink-900)",
                textTransform: "uppercase",
                letterSpacing: "0.04em",
              }}
            >
              ¡Gracias!
            </h3>
            <p style={{ color: "var(--ink-500)", fontWeight: 500, margin: "0 0 2rem" }}>
              Uno de nuestros agentes te contactará pronto.
            </p>
            <Button variant="outline" onClick={onClose}>
              Cerrar
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Catalogo() {
  const [quote, setQuote] = useState<Product | null>(null);
  const wrap = { maxWidth: 1280, margin: "0 auto", padding: "0 2rem" };

  const Grid = ({ items, tag, ring }: { items: Product[]; tag: string; ring: "blue" | "green" }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {items.map((p) => (
        <ProductCard
          key={p.name}
          image={`/assets/${p.image}`}
          name={p.name}
          note="*descuento según cantidad"
          tag={tag}
          ring={ring}
          price={p.price}
          onCta={() => setQuote(p)}
        />
      ))}
    </div>
  );

  return (
    <div>
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
          Plástico rescatado · 100% reciclado
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
          Productos
        </h1>
      </section>

      <div style={{ ...wrap, paddingBottom: "7rem" }}>
        {/* Materias Primas */}
        <section style={{ marginBottom: "5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2.5rem" }}>
            <h2
              style={{
                fontSize: "1.875rem",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--blue-500)",
                margin: 0,
              }}
              className="text-xl sm:text-2xl"
            >
              Materias Primas
            </h2>
            <Tag variant="blue">ASTM · NCh</Tag>
          </div>
          <Grid items={RAW} tag="Materia Prima" ring="blue" />
        </section>

        {/* Productos Terminados */}
        <section>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2.5rem" }}>
            <h2
              style={{
                fontSize: "1.875rem",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--green-500)",
                margin: 0,
              }}
              className="text-xl sm:text-2xl"
            >
              Productos Terminados
            </h2>
            <Tag variant="green">Listo para instalar</Tag>
          </div>
          <Grid items={FINISHED} tag="Terminado" ring="green" />
        </section>
      </div>

      {quote && <QuoteModal product={quote} onClose={() => setQuote(null)} />}
    </div>
  );
}
