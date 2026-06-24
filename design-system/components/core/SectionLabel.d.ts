import React from 'react';

/**
 * Bold uppercase tracked eyebrow above section headings. Accent-colored
 * (green by default), matching the brand's wide-tracked all-caps headings.
 */
export interface SectionLabelProps extends React.HTMLAttributes<HTMLElement> {
  as?: keyof JSX.IntrinsicElements;
  /** 'green' | 'blue' | 'muted' | 'dark' or any CSS color. */
  color?: 'green' | 'blue' | 'muted' | 'dark' | string;
  children?: React.ReactNode;
}

export function SectionLabel(props: SectionLabelProps): JSX.Element;
