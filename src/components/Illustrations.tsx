"use client";

import React from "react";

/* ============================================================
   Ilustraciones isométricas (perspectiva 3D, colores livianos)
   para el proceso: Rescate · Transformación · Ecomadera.
   Construidas con una pequeña proyección isométrica 2:1.
   ============================================================ */

const COS = 0.866;
const SIN = 0.5;

function proj(x: number, y: number, z: number, s: number): [number, number] {
  return [(x - y) * COS * s, (x + y) * SIN * s - z * s];
}

function pts(arr: [number, number][]) {
  return arr.map(([a, b]) => `${a.toFixed(2)},${b.toFixed(2)}`).join(" ");
}

type BoxProps = {
  x: number;
  y: number;
  z?: number;
  w: number;
  d: number;
  h: number;
  s?: number;
  top: string;
  right: string;
  front: string;
  stroke?: string;
};

/** Caja isométrica con tres caras sombreadas. */
function IsoBox({ x, y, z = 0, w, d, h, s = 7, top, right, front, stroke = "rgba(39,38,38,0.10)" }: BoxProps) {
  const T1 = proj(x, y, z + h, s);
  const T2 = proj(x + w, y, z + h, s);
  const T3 = proj(x + w, y + d, z + h, s);
  const T4 = proj(x, y + d, z + h, s);
  const B2 = proj(x + w, y, z, s);
  const B3 = proj(x + w, y + d, z, s);
  const B4 = proj(x, y + d, z, s);
  return (
    <g stroke={stroke} strokeWidth={1} strokeLinejoin="round">
      <polygon points={pts([T2, T3, B3, B2])} fill={right} />
      <polygon points={pts([T4, T3, B3, B4])} fill={front} />
      <polygon points={pts([T1, T2, T3, T4])} fill={top} />
    </g>
  );
}

type IllustrationProps = {
  className?: string;
  style?: React.CSSProperties;
};

function Frame({ children, className, style }: IllustrationProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 240 200"
      width="100%"
      style={{ display: "block", height: "auto", ...style }}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <g transform="translate(120, 124)">{children}</g>
    </svg>
  );
}

function GroundShadow() {
  return <ellipse cx={0} cy={36} rx={86} ry={26} fill="rgba(39,38,38,0.06)" />;
}

/** Rescate — desechos plásticos rescatados sobre el agua. */
export function IsoRescate({ className, style }: IllustrationProps) {
  return (
    <Frame className={className} style={style}>
      <GroundShadow />
      {/* Agua / superficie */}
      <IsoBox x={-9} y={-7} w={18} d={14} h={1.2} top="#DCEBFA" right="#C3DDF5" front="#AFD0F0" />
      {/* Cubos de plástico rescatado (pastel liviano) */}
      <IsoBox x={-2} y={-4.5} z={1.2} w={3.6} d={3.6} h={3.6} top="#FFE6CC" right="#FBD3A8" front="#F2C291" />
      <IsoBox x={2.5} y={0} z={1.2} w={3.2} d={3.2} h={4.4} top="#CFEFEA" right="#AEE2DA" front="#97D6CC" />
      <IsoBox x={-5} y={1.5} z={1.2} w={3} d={3} h={3} top="#F7D6E2" right="#F0BBCD" front="#E7A6BD" />
    </Frame>
  );
}

/** Transformación — máquina extrusora con tolva y tabla saliendo. */
export function IsoTransformacion({ className, style }: IllustrationProps) {
  return (
    <Frame className={className} style={style}>
      <GroundShadow />
      {/* Cuerpo de la máquina */}
      <IsoBox x={-6} y={-5} w={12} d={10} h={8} top="#EFF5FC" right="#D7E6F5" front="#C3DAF0" />
      {/* Tolva */}
      <IsoBox x={-3} y={-3} z={8} w={6} d={6} h={3.6} top="#DCEBFA" right="#C3DDF5" front="#AFD0F0" />
      {/* Tabla de ecomadera saliendo */}
      <IsoBox x={6} y={-1} z={0.6} w={10} d={3} h={1.6} top="#DBF7E8" right="#BDEFD2" front="#A6E0C0" />
    </Frame>
  );
}

/** Ecomadera — pila de tablas recicladas. */
export function IsoEcomadera({ className, style }: IllustrationProps) {
  return (
    <Frame className={className} style={style}>
      <GroundShadow />
      <IsoBox x={-7} y={-3} z={0} w={14} d={6} h={1.6} top="#DBF7E8" right="#BDEFD2" front="#A6E0C0" />
      <IsoBox x={-7} y={-3} z={2.1} w={14} d={6} h={1.6} top="#E4F9EE" right="#C8F0D9" front="#B0E6C6" />
      <IsoBox x={-7} y={-3} z={4.2} w={14} d={6} h={1.6} top="#DBF7E8" right="#BDEFD2" front="#A6E0C0" />
    </Frame>
  );
}
