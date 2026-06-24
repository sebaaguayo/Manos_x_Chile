import React from 'react';

/**
 * Card — the brand's signature container (modern refresh).
 * Heavily beveled (24px) white surface with a 3px colored RING
 * (blue or green) plus a soft drop shadow. Interactive cards lift
 * on hover.
 */
export function Card({
  interactive = false,
  ring = 'none',        // 'blue' | 'green' | 'none'
  fill = 'white',
  padding = '1.75rem',
  radius = 'var(--radius-xl)',
  children,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);

  const fills = { white: 'var(--paper)', soft: 'var(--surface-1)' };

  const rings = {
    blue: 'var(--ring-card-blue)',
    green: 'var(--ring-card-green)',
    none: 'none',
  };
  const borders = {
    blue: 'none',
    green: 'none',
    none: '1.5px solid var(--line)',
  };

  const base = {
    background: fills[fill] || fill,
    border: borders[ring],
    borderRadius: radius,
    padding,
    boxShadow: rings[ring],
    transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) ease',
  };

  const hoverStyle = interactive && hover
    ? {
        transform: 'translateY(-6px)',
        boxShadow: ring === 'none'
          ? 'var(--shadow-card-hover)'
          : `${rings[ring]}, var(--shadow-card-hover)`,
      }
    : {};

  return (
    <div
      style={{ ...base, ...hoverStyle, ...style }}
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => interactive && setHover(false)}
      {...rest}
    >
      {children}
    </div>
  );
}
