import React from 'react';

export interface BenefitStat {
  value: string;
  label: string;
}

/**
 * Numbered value/benefit card (modern refresh) — big vivid index number, bold
 * uppercase title, body, optional 2-up stat footer, on the signature ring-card.
 */
export interface BenefitCardProps {
  number?: string;
  title: string;
  description: string;
  stats?: BenefitStat[];
  /** Ring + accent color: 'green' (default) | 'blue'. */
  ring?: 'green' | 'blue';
  /** Override the accent color directly. */
  accent?: string;
  style?: React.CSSProperties;
}

export function BenefitCard(props: BenefitCardProps): JSX.Element;
