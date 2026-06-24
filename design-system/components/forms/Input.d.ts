import React from 'react';

/**
 * Text field. Default is a beveled box (14px, border → ocean-blue + soft halo on
 * focus). `underline` for the minimal bottom-rule style. `as="textarea"` multiline.
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement & HTMLTextAreaElement> {
  as?: 'input' | 'textarea';
  /** Minimal bottom-rule style instead of a box. */
  underline?: boolean;
  rows?: number;
}

export function Input(props: InputProps): JSX.Element;
