export const boxShadows = {
  card: '0px 4px 12px rgba(0, 0, 0, 0.08);',
  filter: '0px 0px 16px rgba(61, 72, 88, 0.16)',
} as const;

export type BoxShadowType = typeof boxShadows;
