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

/* ---------- Contacto ---------- */

/** WhatsApp (glifo oficial, relleno sólido) */
export function WhatsAppIcon({ size = 28, color = "currentColor", style, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      style={style}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.174.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 016.988 2.898 9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/** Sobre / correo */
export function MailIcon({ size = 32, color = "currentColor", strokeWidth = 2, style, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={style} className={className} aria-hidden>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 6 10-6" />
    </svg>
  );
}

/** Pin de mapa */
export function MapPinIcon({ size = 32, color = "currentColor", strokeWidth = 2, style, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={style} className={className} aria-hidden>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

/* ---------- Redes sociales (footer) ---------- */

export function InstagramIcon({ size = 16, color = "currentColor", style, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style} className={className} aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.1" fill={color} stroke="none" />
    </svg>
  );
}

export function FacebookIcon({ size = 16, color = "currentColor", style, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={style} className={className} aria-hidden>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.89h2.78l-.45 2.91h-2.33V22c4.78-.76 8.44-4.92 8.44-9.94z" />
    </svg>
  );
}

export function LinkedInIcon({ size = 16, color = "currentColor", style, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={style} className={className} aria-hidden>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.71h.05c.53-.95 1.83-1.96 3.77-1.96 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.6c0-1.34-.03-3.06-1.9-3.06-1.9 0-2.2 1.45-2.2 2.96V21h-4z" />
    </svg>
  );
}

/* ---------- Utilidades de interfaz ---------- */

/** Lupa con "+" — indica que la imagen se puede ampliar */
export function ZoomIcon({ size = 18, color = "currentColor", strokeWidth = 2, style, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" style={style} className={className} aria-hidden>
      <circle cx="11" cy="11" r="7" />
      <line x1="11" y1="8" x2="11" y2="14" />
      <line x1="8" y1="11" x2="14" y2="11" />
      <line x1="16.5" y1="16.5" x2="21" y2="21" />
    </svg>
  );
}

export function CloseIcon({ size = 20, color = "currentColor", strokeWidth = 2.2, style, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" style={style} className={className} aria-hidden>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
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
