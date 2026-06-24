import React from 'react';

export type ButtonVariant =
  | 'primary'        // ocean-blue fill (default CTA, e.g. COTIZAR)
  | 'eco'            // vivid-green fill
  | 'outline'        // blue outline
  | 'outline-green'  // green outline
  | 'outline-light'  // white outline, over dark hero imagery
  | 'ghost';
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Primary action button (modern Manos x Chile): beveled 14px corners, heavy
 * Black/uppercase tracked label, ocean-blue fill. `eco` for the green variant.
 *
 * @startingPoint section="Core" subtitle="Beveled bold action buttons" viewport="700x150"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  as?: 'button' | 'a';
  fullWidth?: boolean;
  uppercase?: boolean;
  children?: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
}

export function Button(props: ButtonProps): JSX.Element;
