import React from 'react';

/**
 * Tag — pill chip (modern refresh). Rounded, bold, uppercase tracked.
 * Used for categories / certifications (ASTM, NCh) and eco claims.
 */
export function Tag({ variant = 'default', children, style = {}, ...rest }) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    fontFamily: 'var(--font-sans)',
    fontSize: '0.7rem',
    fontWeight: 700,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    padding: '0.4rem 0.85rem',
    borderRadius: 'var(--radius-full)',
    lineHeight: 1.2,
    whiteSpace: 'nowrap',
  };

  const variants = {
    default: { background: 'var(--surface-1)', color: 'var(--ink-500)', border: '1.5px solid var(--line)' },
    green: { background: 'var(--green-100)', color: 'var(--green-900)', border: '1.5px solid transparent' },
    blue: { background: 'var(--blue-100)', color: 'var(--blue-700)', border: '1.5px solid transparent' },
    'solid-green': { background: 'var(--green-500)', color: '#fff', border: '1.5px solid var(--green-500)' },
    'solid-blue': { background: 'var(--blue-500)', color: '#fff', border: '1.5px solid var(--blue-500)' },
    outline: { background: 'transparent', color: 'var(--blue-500)', border: '1.5px solid var(--blue-500)' },
  };

  return (
    <span style={{ ...base, ...variants[variant], ...style }} {...rest}>
      {children}
    </span>
  );
}
