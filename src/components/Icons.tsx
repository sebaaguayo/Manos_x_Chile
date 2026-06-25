"use client";

import React from "react";

export type IconProps = {
  size?: number;
  color?: string;
  strokeWidth?: number;
  style?: React.CSSProperties;
  className?: string;
};

function svgProps(size: number) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 48 48",
    fill: "none" as const,
    xmlns: "http://www.w3.org/2000/svg",
  };
}

function strokeProps(color: string, strokeWidth: number) {
  return {
    stroke: color,
    strokeWidth,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
}

/* ---------- Benefit icons (home · "Beneficios") ---------- */

/** Olas — plástico rescatado de las costas */
export function WavesIcon({ size = 40, color = "currentColor", strokeWidth = 2.4, style, className }: IconProps) {
  const s = strokeProps(color, strokeWidth);
  return (
    <svg {...svgProps(size)} style={style} className={className} aria-hidden>
      <path d="M5 15 q6 -7 12 0 t12 0 t12 0" {...s} />
      <path d="M5 24 q6 -7 12 0 t12 0 t12 0" {...s} />
      <path d="M5 33 q6 -7 12 0 t12 0 t12 0" {...s} />
    </svg>
  );
}

/** Escudo con check — durabilidad */
export function ShieldIcon({ size = 40, color = "currentColor", strokeWidth = 2.4, style, className }: IconProps) {
  const s = strokeProps(color, strokeWidth);
  return (
    <svg {...svgProps(size)} style={style} className={className} aria-hidden>
      <path d="M24 5 l15 5 v9 c0 10 -6.5 17 -15 21 c-8.5 -4 -15 -11 -15 -21 v-9 z" {...s} />
      <path d="M17 23 l5 5 l9 -10" {...s} />
    </svg>
  );
}

/** Pin de ubicación — impacto local */
export function LocationIcon({ size = 40, color = "currentColor", strokeWidth = 2.4, style, className }: IconProps) {
  const s = strokeProps(color, strokeWidth);
  return (
    <svg {...svgProps(size)} style={style} className={className} aria-hidden>
      <path d="M24 4 c-7.2 0 -13 5.6 -13 12.5 C11 26 24 43 24 43 s13 -17 13 -26.5 C37 9.6 31.2 4 24 4 z" {...s} />
      <circle cx="24" cy="16.5" r="4.5" {...s} />
    </svg>
  );
}

/** Medalla — calidad certificada */
export function MedalIcon({ size = 40, color = "currentColor", strokeWidth = 2.4, style, className }: IconProps) {
  const s = strokeProps(color, strokeWidth);
  return (
    <svg {...svgProps(size)} style={style} className={className} aria-hidden>
      <circle cx="24" cy="17" r="12" {...s} />
      <path d="M18.5 17 l4 4 l8 -8" {...s} />
      <path d="M16 27 l-3 16 l11 -6 l11 6 l-3 -16" {...s} />
    </svg>
  );
}

/* ---------- Step icons (página "Cómo Funciona") ---------- */

/** Embudo — clasificación */
export function FunnelIcon({ size = 40, color = "currentColor", strokeWidth = 2.4, style, className }: IconProps) {
  const s = strokeProps(color, strokeWidth);
  return (
    <svg {...svgProps(size)} style={style} className={className} aria-hidden>
      <path d="M6 9 h36 l-13 16 v13 l-10 5 v-18 z" {...s} />
    </svg>
  );
}

/** Engranaje — procesamiento */
export function GearIcon({ size = 40, color = "currentColor", strokeWidth = 2.4, style, className }: IconProps) {
  const s = strokeProps(color, strokeWidth);
  const teeth = Array.from({ length: 8 }, (_, i) => {
    const a = (i * Math.PI) / 4;
    const x1 = 24 + Math.cos(a) * 12;
    const y1 = 24 + Math.sin(a) * 12;
    const x2 = 24 + Math.cos(a) * 16;
    const y2 = 24 + Math.sin(a) * 16;
    return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} {...s} />;
  });
  return (
    <svg {...svgProps(size)} style={style} className={className} aria-hidden>
      <circle cx="24" cy="24" r="11" {...s} />
      <circle cx="24" cy="24" r="4" {...s} />
      {teeth}
    </svg>
  );
}

/** Caja / molde — transformación */
export function BoxIcon({ size = 40, color = "currentColor", strokeWidth = 2.4, style, className }: IconProps) {
  const s = strokeProps(color, strokeWidth);
  return (
    <svg {...svgProps(size)} style={style} className={className} aria-hidden>
      <path d="M24 6 l16 9 v18 l-16 9 l-16 -9 v-18 z" {...s} />
      <path d="M8 15 l16 9 l16 -9" {...s} />
      <path d="M24 24 v18" {...s} />
    </svg>
  );
}

/** Camión — distribución */
export function TruckIcon({ size = 40, color = "currentColor", strokeWidth = 2.4, style, className }: IconProps) {
  const s = strokeProps(color, strokeWidth);
  return (
    <svg {...svgProps(size)} style={style} className={className} aria-hidden>
      <path d="M4 13 h21 v18 h-21 z" {...s} />
      <path d="M25 19 h8 l6 6 v6 h-14 z" {...s} />
      <circle cx="13" cy="35" r="3.5" {...s} />
      <circle cx="32" cy="35" r="3.5" {...s} />
    </svg>
  );
}

/* ---------- Recycle (productos) ---------- */

/** Símbolo de reciclaje minimalista (Lucide "recycle") */
export function RecycleIcon({ size = 16, color = "currentColor", strokeWidth = 2, style, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
      <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" />
      <path d="m14 16-3 3 3 3" />
      <path d="M8.293 13.596 7.196 9.5 3.1 10.598" />
      <path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843" />
      <path d="m13.378 9.633 4.096 1.098 1.097-4.096" />
    </svg>
  );
}
