import React from 'react';

export type TagVariant = 'default' | 'green' | 'blue' | 'solid-green' | 'solid-blue' | 'outline';

/**
 * Rounded pill chip — categories, certifications (ASTM D7900, NCh973), eco claims
 * ("100% reciclado", "rescatado de playas").
 */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: TagVariant;
  children?: React.ReactNode;
}

export function Tag(props: TagProps): JSX.Element;
