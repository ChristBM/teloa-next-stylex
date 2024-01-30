import * as stylex from '@stylexjs/stylex';

/* ------------- */
/* Media Queries */
/* ------------- */

export const DESKTOP: string = '@media (min-width: 1440px)';

/* ------------- */
/* Base Colors */
/* ------------- */

export const color = stylex.defineVars({
  arroz: '#fff',
  caballa: '#F2F4F6',
  lenguado: '#F8F8F8',
  tiburon: '#648090',
  ballena: '#002C48',
  plancton: '#0660C6',
  planctonLink: '#0874EF',
});

/* ------------- */
/* Fonts */
/* ------------- */

export const fontFamily = stylex.defineVars({
  inter: ['Inter', 'sans-serif'].join(', '),
  roboto: ['Roboto', 'sans-serif'].join(', '),
});

export const fontSize = stylex.defineVars({
  sm: '12px',
  md: '14px',
  base: '16px',
  lg: '20px',
  xl: '24px',
  x2l: '32px',
  x3l: '40px',
  x4l: '48px',
});

export const fontWeight = stylex.defineVars({
  normal: '400',
  semi: '600',
  bold: '700',
});

export const fontLineHeight = stylex.defineVars({
  sm: '20px',
  md: '24px',
  lg: '28px',
  xl: '32px',
  x2l: '40px',
  x3l: '54px',
});

/* ------------- */
/* List */
/* ------------- */

export const listStyle = stylex.defineVars({
  none: 'none',
  disc: 'disc',
});

/* ------------- */
/* Spacing */
/* ------------- */

export const padding = stylex.defineVars({
  md: '8px',
  lg: '12px',
  base: '16px',
  xl: '24px',
  x2l: '32px',
});

export const margin = stylex.defineVars({
  sm: '4px',
  md: '8px',
  lg: '12px',
  base: '16px',
  xl: '24px',
  x2l: '32px',
  x3l: '56px',
});

export const gap = stylex.defineVars({
  sm: '8px',
  md: '12px',
  base: '16px',
  lg: '32px',
});

/* ------------- */
/* Border */
/* ------------- */

export const borderWidth = stylex.defineVars({
  none: '0px',
  sm: '1px',
});

export const borderRadius = stylex.defineVars({
  none: '0px',
  full: '9999px',
  sm: '8px',
  md: '24px',
  lg: '56px',
});

/* ------------- */
/* Gradients */
/* ------------- */

export const gradient = stylex.defineVars({
  header: "linear-gradient(180deg, rgba(0, 173, 239, 0.20) 0%, rgba(0, 174, 240, 0.00) 100%)",
});

/* ------------- */
/* Shadows */
/* ------------- */

export const shadows = stylex.defineVars({
  card1: '0px 2px 6px 0px rgba(0, 44, 72, 0.15)',
});
