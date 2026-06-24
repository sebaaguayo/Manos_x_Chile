import React from 'react';

/**
 * Select — beveled boxed dropdown (modern refresh) with a chevron.
 */
export function Select({ underline = false, children, style = {}, ...rest }) {
  const [focus, setFocus] = React.useState(false);

  const boxed = {
    border: `1.5px solid ${focus ? 'var(--blue-500)' : 'var(--line)'}`,
    padding: '0.95rem 2.4rem 0.95rem 1.1rem',
    borderRadius: 'var(--radius-md)',
    boxShadow: focus ? '0 0 0 3px var(--blue-100)' : 'none',
  };
  const line = {
    borderBottom: `2px solid ${focus ? 'var(--blue-500)' : 'var(--line)'}`,
    padding: '0.85rem 1.6rem 0.85rem 0',
    borderRadius: 0,
  };

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <select
        style={{
          width: '100%',
          fontFamily: 'var(--font-sans)',
          fontSize: '1rem',
          fontWeight: 500,
          color: 'var(--ink-900)',
          background: 'transparent',
          border: 'none',
          outline: 'none',
          appearance: 'none',
          WebkitAppearance: 'none',
          cursor: 'pointer',
          transition: 'border-color var(--dur-base) ease, box-shadow var(--dur-base) ease',
          ...(underline ? line : boxed),
          ...style,
        }}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        {...rest}
      >
        {children}
      </select>
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          right: underline ? '0.25rem' : '1rem',
          top: '50%',
          transform: 'translateY(-50%)',
          pointerEvents: 'none',
          color: 'var(--blue-500)',
          fontSize: '0.7rem',
        }}
      >
        ▼
      </span>
    </div>
  );
}
