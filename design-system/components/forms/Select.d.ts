import React from 'react';

/**
 * Beveled boxed dropdown with chevron (matches Input). `underline` for the
 * minimal bottom-rule style.
 */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  underline?: boolean;
  children?: React.ReactNode;
}

export function Select(props: SelectProps): JSX.Element;
