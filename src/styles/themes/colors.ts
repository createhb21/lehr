export const colors = {
  white: '#FFFFFF',
  black: '#343E4D',
  gray10: '#F9FAFB',
  gray20: '#E6ECF1',
  gray20_4: 'rgba(230,236,241,0.4)',
  gray30: '#DCE3EB',
  gray40: '#C9D1DD',
  gray40_3: 'rgba(201,209,221,0.3)',
  gray40_7: 'rgba(201,209,221,0.7)',
  gray50: '#9EA9B8',
  gray60: '#838D9C',
  gray70: '#657080',
  gray80: '#4E5968',
  gray90: '#343E4D',
  blue10: '#81D1FF',
  blue20: '#62C3F9',
  blue30: '#32B0F8',
  blue40: '#23A0E7',
  red10: '#FF8484',
  red20: '#DE5151',
  dim: 'rgba(0,0,0,0.3)',
} as const;

export type ColorType = typeof colors;
