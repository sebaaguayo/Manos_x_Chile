import React from 'react';

/**
 * SectionLabel — bold uppercase tracked eyebrow above section headings.
 * Modern refresh: heavier and wider-tracked, accent-colored.
 */
export function SectionLabel({ children, as = 'span', color = 'green', style = {}, ...rest }) {
  const Comp = as;
  const colors = {
    green: 'var(--green-500)',
    blue: 'var(--blue-500)',
    muted: 'var(--ink-400)',
    dark: 'var(--ink-900)',
  };
  return (
    <Comp
      style={{
        display: 'inline-block',
        fontFamily: 'var(--font-sans)',
        fontSize: '0.875rem',
        fontWeight: 700,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: colors[color] || color,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Comp>
  );
}
