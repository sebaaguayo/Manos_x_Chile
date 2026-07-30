"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { CloseIcon } from "./Icons";

const MIN_SCALE = 1;
const MAX_SCALE = 5;

function clamp(v: number, min: number, max: number) {
  return Math.min(Math.max(v, min), max);
}

/**
 * Visor de imagen a pantalla completa con desplazamiento y zoom.
 * - Rueda del mouse / pellizco táctil / botones +- para acercar
 * - Arrastrar (mouse o dedo) para desplazarse
 * - Escape o clic en el fondo para cerrar
 */
export function ImageZoom({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  const [scale, setScale] = useState(1);
  const [tx, setTx] = useState(0);
  const [ty, setTy] = useState(0);
  const [dragging, setDragging] = useState(false);

  const drag = useRef({ x: 0, y: 0, tx: 0, ty: 0 });
  const pinch = useRef<{ dist: number; scale: number } | null>(null);

  const reset = useCallback(() => {
    setScale(1);
    setTx(0);
    setTy(0);
  }, []);

  const zoomBy = useCallback((delta: number) => {
    setScale((s) => {
      const next = clamp(s + delta, MIN_SCALE, MAX_SCALE);
      if (next === MIN_SCALE) {
        setTx(0);
        setTy(0);
      }
      return next;
    });
  }, []);

  // Cerrar con Escape y bloquear el scroll del fondo
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "+" || e.key === "=") zoomBy(0.4);
      if (e.key === "-") zoomBy(-0.4);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose, zoomBy]);

  const onWheel = (e: React.WheelEvent) => {
    zoomBy(e.deltaY < 0 ? 0.3 : -0.3);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (scale <= 1) return;
    (e.target as Element).setPointerCapture?.(e.pointerId);
    drag.current = { x: e.clientX, y: e.clientY, tx, ty };
    setDragging(true);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    setTx(drag.current.tx + (e.clientX - drag.current.x));
    setTy(drag.current.ty + (e.clientY - drag.current.y));
  };

  const endDrag = () => setDragging(false);

  // Pellizco en táctil
  const onTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const [a, b] = [e.touches[0], e.touches[1]];
      pinch.current = {
        dist: Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY),
        scale,
      };
    }
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && pinch.current) {
      const [a, b] = [e.touches[0], e.touches[1]];
      const dist = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
      setScale(clamp((pinch.current.scale * dist) / pinch.current.dist, MIN_SCALE, MAX_SCALE));
    }
  };

  const onTouchEnd = () => {
    pinch.current = null;
  };

  return (
    <div className="zoom-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-label={alt}>
      <div
        className="zoom-stage"
        onClick={(e) => e.stopPropagation()}
        onWheel={onWheel}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onPointerLeave={endDrag}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        style={{ cursor: scale > 1 ? (dragging ? "grabbing" : "grab") : "default" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          draggable={false}
          style={{
            transform: `translate(${tx}px, ${ty}px) scale(${scale})`,
            transition: dragging ? "none" : "transform 0.18s ease-out",
          }}
        />
      </div>

      <div className="zoom-toolbar" onClick={(e) => e.stopPropagation()}>
        <button type="button" onClick={() => zoomBy(-0.4)} aria-label="Alejar" disabled={scale <= MIN_SCALE}>
          −
        </button>
        <span aria-live="polite">{Math.round(scale * 100)}%</span>
        <button type="button" onClick={() => zoomBy(0.4)} aria-label="Acercar" disabled={scale >= MAX_SCALE}>
          +
        </button>
        <button type="button" onClick={reset} aria-label="Restablecer zoom" className="zoom-reset">
          Ajustar
        </button>
      </div>

      <button type="button" className="zoom-close" onClick={onClose} aria-label="Cerrar">
        <CloseIcon size={22} />
      </button>

      <p className="zoom-hint">Arrastra para desplazarte · rueda o pellizca para hacer zoom</p>
    </div>
  );
}
