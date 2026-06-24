import React from 'react';

/**
 * Button — Manos x Chile action (modern refresh).
 * Beveled 14px corners, heavy Black/uppercase tracked label.
 * Ocean-blue primary, vivid-green eco variant.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  as = 'button',
  fullWidth = false,
  uppercase = true,
  children,
  style = {},
  ...rest
}) {
  const Comp = as;

  const sizes = {
    sm: { padding: '0.6rem 1.4rem', fontSize: '0.8rem' },
    md: { padding: '0.85rem 2rem', fontSize: '0.9rem' },
    lg: { padding: '1.05rem 2.6rem', fontSize: '1rem' },
  };

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.6rem',
    fontFamily: 'var(--font-sans)',
    fontWeight: 900,
    letterSpacing: uppercase ? '0.18em' : '0.02em',
    textTransform: uppercase ? 'uppercase' : 'none',
    borderRadius: 'var(--radius-md)',
    border: '2px solid transparent',
    cursor: 'pointer',
    textDecoration: 'none',
    lineHeight: 1.1,
    width: fullWidth ? '100%' : 'auto',
    transition: 'transform var(--dur-fast) var(--ease-out), background-color var(--dur-fast) ease, color var(--dur-fast) ease, border-color var(--dur-fast) ease, box-shadow var(--dur-fast) ease',
    ...sizes[size],
  };

  const variants = {
    primary: { backgroundColor: 'var(--blue-500)', color: '#fff', borderColor: 'var(--blue-500)' },
    eco: { backgroundColor: 'var(--green-500)', color: '#fff', borderColor: 'var(--green-500)' },
    outline: { backgroundColor: 'transparent', color: 'var(--blue-500)', borderColor: 'var(--blue-500)' },
    'outline-green': { backgroundColor: 'transparent', color: 'var(--green-700)', borderColor: 'var(--green-500)' },
    'outline-light': { backgroundColor: 'transparent', color: '#fff', borderColor: 'rgba(255,255,255,0.95)' },
    ghost: { backgroundColor: 'transparent', color: 'var(--ink-900)', borderColor: 'transparent' },
  };

  const hovers = {
    primary: { backgroundColor: 'var(--blue-700)', borderColor: 'var(--blue-700)' },
    eco: { backgroundColor: 'var(--green-700)', borderColor: 'var(--green-700)' },
    outline: { backgroundColor: 'var(--blue-500)', color: '#fff' },
    'outline-green': { backgroundColor: 'var(--green-500)', color: '#fff', borderColor: 'var(--green-500)' },
    'outline-light': { backgroundColor: '#fff', color: 'var(--ink-900)' },
    ghost: { backgroundColor: 'var(--surface-1)' },
  };

  const [hover, setHover] = React.useState(false);

  return (
    <Comp
      style={{
        ...base,
        ...variants[variant],
        ...(hover ? { ...hovers[variant], transform: 'translateY(-2px)', boxShadow: 'var(--shadow-sm)' } : {}),
        ...style,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}
    >
      {children}
    </Comp>
  );
}
