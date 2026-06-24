import React from 'react';

/**
 * Stat — big bold vivid number over an uppercase tracked label (modern refresh).
 */
export function Stat({ value, label, color = 'green', align = 'left', size = 'md', style = {} }) {
  const sizes = { sm: '2rem', md: '3rem', lg: '4rem' };
  const colors = { green: 'var(--green-500)', blue: 'var(--blue-500)', dark: 'var(--ink-900)' };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', textAlign: align, alignItems: align === 'center' ? 'center' : 'flex-start', ...style }}>
      <div style={{ fontSize: sizes[size], fontWeight: 900, color: colors[color] || color, lineHeight: 1, letterSpacing: '0.01em' }}>
        {value}
      </div>
      <div style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.14em', color: 'var(--ink-400)', fontWeight: 700 }}>
        {label}
      </div>
    </div>
  );
}
