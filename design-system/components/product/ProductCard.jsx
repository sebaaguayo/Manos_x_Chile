import React from 'react';
import { Button } from '../core/Button.jsx';

/** Símbolo de reciclaje minimalista (Lucide "recycle"). */
function RecycleMark({ size = 15, color = 'var(--green-500)' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ flexShrink: 0, marginTop: '0.05rem' }}
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

/**
 * ProductCard — catalog tile (modern refresh, matches the Figma).
 * Beveled 24px white card with a 3px colored ring + drop shadow, a rounded
 * 22px product photo, the bold uppercase tracked product name, and a
 * COTIZAR action. Hover lifts the card and zooms the image.
 */
export function ProductCard({
  image,
  name,
  note,
  tag,
  ring = 'blue',          // 'blue' | 'green'
  ctaLabel = 'Cotizar',
  ctaVariant,             // defaults to match ring
  onCta,
  style = {},
  price,
  recycledKg,             // number — kilos de plástico rescatado
  recycledPending = false, // true => "cálculo pendiente"
  ivaNote = '*IVA incluido',
  diagram,                // ruta al diagrama de medidas (opcional)
  onExpandImage,          // (src, alt) => void — abre el visor con zoom
}) {
  const [hover, setHover] = React.useState(false);
  const [view, setView] = React.useState('photo');

  const showingDiagram = Boolean(diagram) && view === 'diagram';
  const currentSrc = showingDiagram ? diagram : image;
  const currentAlt = showingDiagram ? `Diagrama de medidas — ${name}` : name;

  const ringShadow = ring === 'green' ? 'var(--ring-card-green)' : 'var(--ring-card-blue)';
  const btnVariant = ctaVariant || (ring === 'green' ? 'eco' : 'primary');

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--paper)',
        borderRadius: 'var(--radius-xl)',
        boxShadow: hover ? `${ringShadow}, var(--shadow-card-hover)` : ringShadow,
        padding: '0.9rem 0.9rem 1.25rem',
        transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) ease',
        transform: hover ? 'translateY(-6px)' : 'none',
        ...style,
      }}
    >
      <div
        style={{
          position: 'relative',
          paddingTop: '64%',
          overflow: 'hidden',
          borderRadius: 'var(--radius-lg)',
          background: 'var(--surface-2)',
        }}
      >
        {currentSrc && (
          <img
            src={currentSrc}
            alt={currentAlt}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              /* El diagrama se muestra completo; la foto llena el marco */
              objectFit: showingDiagram ? 'contain' : 'cover',
              background: showingDiagram ? 'var(--paper)' : 'transparent',
              transform: !showingDiagram && hover ? 'scale(1.06)' : 'scale(1)',
              transition: 'transform var(--dur-slow) var(--ease-out)',
              cursor: onExpandImage ? 'zoom-in' : 'default',
            }}
            onClick={onExpandImage ? () => onExpandImage(currentSrc, currentAlt) : undefined}
          />
        )}
        {tag && (
          <span
            style={{
              position: 'absolute',
              top: '0.85rem',
              left: '0.85rem',
              fontSize: '0.62rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              background: ring === 'green' ? 'var(--green-500)' : 'var(--blue-500)',
              color: '#fff',
              padding: '0.35rem 0.7rem',
              borderRadius: 'var(--radius-full)',
            }}
          >
            {tag}
          </span>
        )}

        {diagram && (
          <div className="media-tabs" role="group" aria-label="Vista de la imagen">
            <button
              type="button"
              data-active={!showingDiagram}
              onClick={() => setView('photo')}
              aria-pressed={!showingDiagram}
            >
              Foto
            </button>
            <button
              type="button"
              data-active={showingDiagram}
              onClick={() => setView('diagram')}
              aria-pressed={showingDiagram}
            >
              Medidas
            </button>
          </div>
        )}

        {onExpandImage && currentSrc && (
          <button
            type="button"
            className="media-expand"
            onClick={() => onExpandImage(currentSrc, currentAlt)}
            aria-label={showingDiagram ? 'Ampliar diagrama de medidas' : 'Ampliar foto del producto'}
            title="Ampliar"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <circle cx="11" cy="11" r="7" />
              <line x1="11" y1="8" x2="11" y2="14" />
              <line x1="8" y1="11" x2="14" y2="11" />
              <line x1="16.5" y1="16.5" x2="21" y2="21" />
            </svg>
          </button>
        )}
      </div>

      <div style={{ padding: '1.1rem 0.5rem 0', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <h3
          style={{
            fontSize: '0.875rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--ink-900)',
            lineHeight: 1.4,
            margin: 0,
            whiteSpace: 'pre-line',
          }}
        >
          {name}
        </h3>
        {(recycledPending || typeof recycledKg === 'number') && (
          <p
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.45rem',
              fontSize: '0.8rem',
              lineHeight: 1.5,
              color: 'var(--ink-500)',
              fontWeight: 500,
              margin: '0.6rem 0 0',
            }}
          >
            <RecycleMark color={ring === 'green' ? 'var(--green-500)' : 'var(--blue-500)'} />
            <span>
              {recycledPending ? (
                <>Cálculo de <strong style={{ color: 'var(--ink-900)' }}>kilos de plástico</strong> pendiente.</>
              ) : (
                <>{recycledKg} <strong style={{ color: 'var(--ink-900)' }}>kilos de plástico</strong> rescatado para fabricar este producto.</>
              )}
            </span>
          </p>
        )}
        {note && (
          <p style={{ fontSize: '0.8rem', color: 'var(--ink-500)', fontStyle: 'italic', fontWeight: 500, margin: '0.6rem 0 0' }}>
            {note}
          </p>
        )}
        <div style={{ marginTop: 'auto', paddingTop: '1.25rem', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '0.75rem' }}>
          {price && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
              <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 900, fontSize: '1.1rem', color: 'var(--ink-900)', whiteSpace: 'nowrap' }}>
                {price}
              </div>
              {ivaNote && (
                <div style={{ fontSize: '0.7rem', color: 'var(--ink-400)', fontWeight: 500, whiteSpace: 'nowrap' }}>
                  {ivaNote}
                </div>
              )}
            </div>
          )}
          <Button size="sm" variant={btnVariant} fullWidth={!price} style={price ? { flex: 1 } : {}} onClick={onCta}>
            {ctaLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
