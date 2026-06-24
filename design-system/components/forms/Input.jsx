import React from 'react';

/**
 * Input — boxed beveled field (modern refresh). Rounded 14px box with a
 * 1.5px border that turns ocean-blue on focus. `underline` keeps the old
 * minimal bottom-rule style.
 */
export function Input({ as = 'input', underline = false, style = {}, ...rest }) {
  const Comp = as;
  const [focus, setFocus] = React.useState(false);

  const boxed = {
    width: '100%',
    padding: '0.95rem 1.1rem',
    border: `1.5px solid ${focus ? 'var(--blue-500)' : 'var(--line)'}`,
    background: 'var(--paper)',
    borderRadius: 'var(--radius-md)',
    boxShadow: focus ? '0 0 0 3px var(--blue-100)' : 'none',
  };

  const line = {
    width: '100%',
    padding: '0.85rem 0',
    border: 'none',
    borderBottom: `2px solid ${focus ? 'var(--blue-500)' : 'var(--line)'}`,
    background: 'transparent',
    borderRadius: 0,
  };

  return (
    <Comp
      style={{
        fontFamily: 'var(--font-sans)',
        fontSize: '1rem',
        fontWeight: 500,
        color: 'var(--ink-900)',
        outline: 'none',
        transition: 'border-color var(--dur-base) ease, box-shadow var(--dur-base) ease',
        ...(underline ? line : boxed),
        ...style,
      }}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      {...rest}
    />
  );
}
