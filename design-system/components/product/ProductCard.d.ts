import React from 'react';

/**
 * Catalog product tile (modern refresh) — beveled 24px white card with a 3px
 * colored ring + drop shadow, rounded photo, bold uppercase tracked name, and a
 * COTIZAR action. Hover lifts + zooms. Composes Button.
 *
 * @startingPoint section="Product" subtitle="Beveled ring product tile with COTIZAR" viewport="340x420"
 */
export interface ProductCardProps {
  image?: string;
  /** Product name. Supports \n for multi-line dimension labels. */
  name: string;
  note?: string;
  /** Optional corner tag, e.g. "Materia Prima". */
  tag?: string;
  /** Ring color: 'blue' (default) | 'green'. CTA matches unless overridden. */
  ring?: 'blue' | 'green';
  ctaLabel?: string;
  ctaVariant?: 'primary' | 'eco' | 'outline';
  onCta?: () => void;
  style?: React.CSSProperties;
}

export function ProductCard(props: ProductCardProps): JSX.Element;
