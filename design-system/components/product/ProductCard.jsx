import React from 'react';
import { Button } from '../core/Button.jsx';

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
}) {
  const [hover, setHover] = React.useState(false);

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
        {image && (
          <img
            src={image}
            alt={name}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: hover ? 'scale(1.06)' : 'scale(1)',
              transition: 'transform var(--dur-slow) var(--ease-out)',
            }}
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
        {note && (
          <p style={{ fontSize: '0.8rem', color: 'var(--ink-500)', fontStyle: 'italic', fontWeight: 500, margin: '0.6rem 0 0' }}>
            {note}
          </p>
        )}
        <div style={{ marginTop: 'auto', paddingTop: '1.25rem' }}>
          <Button size="sm" variant={btnVariant} fullWidth onClick={onCta}>
            {ctaLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
