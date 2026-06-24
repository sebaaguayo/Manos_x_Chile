import React from 'react';

/**
 * Signature container — heavily beveled (24px) white surface with an optional
 * 3px colored ring (blue/green) + soft drop shadow. `interactive` adds a hover lift.
 *
 * @startingPoint section="Core" subtitle="Beveled outlined-ring container" viewport="700x240"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Hover lift (for clickable cards). */
  interactive?: boolean;
  /** Signature 3px halo: 'blue' | 'green' | 'none' (plain hairline). */
  ring?: 'blue' | 'green' | 'none';
  /** 'white' | 'soft' or any CSS color. */
  fill?: 'white' | 'soft' | string;
  padding?: string;
  /** Override corner radius (default 24px). */
  radius?: string;
  children?: React.ReactNode;
}

export function Card(props: CardProps): JSX.Element;
