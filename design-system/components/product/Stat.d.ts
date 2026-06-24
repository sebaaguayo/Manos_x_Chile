import React from 'react';

/**
 * Single impact statistic — big bold vivid number over an uppercase tracked label.
 */
export interface StatProps {
  value: string;
  label: string;
  /** 'green' (default) | 'blue' | 'dark' or any CSS color. */
  color?: 'green' | 'blue' | 'dark' | string;
  align?: 'left' | 'center';
  size?: 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
}

export function Stat(props: StatProps): JSX.Element;
