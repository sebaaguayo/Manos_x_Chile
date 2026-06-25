import React from 'react';
import { Card } from '../core/Card.jsx';

/**
 * BenefitCard — numbered value card (modern refresh). Big vivid index number,
 * bold uppercase title, body, and a 2-up stat footer. Sits on the signature
 * ring-card surface.
 */
export function BenefitCard({ number, title, description, stats = [], ring = 'green', accent, icon, style = {} }) {
  const accentColor = accent || (ring === 'blue' ? 'var(--blue-500)' : 'var(--green-500)');
  const iconWash = ring === 'blue' ? 'var(--blue-50)' : 'var(--green-50)';
  return (
    <Card
      interactive
      ring={ring}
      padding="1.75rem"
      style={{ display: 'flex', flexDirection: 'column', minHeight: '320px', ...style }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.1rem' }}>
        {number && (
          <div style={{ fontSize: '2.5rem', fontWeight: 900, color: accentColor, lineHeight: 1, letterSpacing: '0.02em' }}>
            {number}
          </div>
        )}
        {icon && (
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 'var(--radius-lg)',
              background: iconWash,
              color: accentColor,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            {icon}
          </div>
        )}
      </div>
      <h3 style={{ fontSize: '1.05rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-900)', lineHeight: 1.25, margin: '0 0 0.85rem' }}>
        {title}
      </h3>
      <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--ink-500)', fontWeight: 500, margin: 0, flexGrow: 1 }}>
        {description}
      </p>
      {stats.length > 0 && (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1.25rem',
            marginTop: '1.5rem',
            paddingTop: '1.5rem',
            borderTop: '1.5px solid var(--line-soft)',
          }}
        >
          {stats.map((s, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              <div style={{ fontSize: '1.6rem', fontWeight: 900, color: accentColor, lineHeight: 1 }}>
                {s.value}
              </div>
              <div style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--ink-400)', fontWeight: 700 }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}
