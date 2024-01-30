import * as stylex from '@stylexjs/stylex';
import { color } from './tokens.stylex';

// These themes do not belong to the Design System

export const GreenTetra = stylex.createTheme(color, {
  arroz: '#fff',
  caballa: '#DAF5DC',
  lenguado: '#BCEBBC',
  tiburon: '#8CD98C',
  ballena: '#5DAE8B',
  plancton: '#3D9970',
  planctonLink: '#2ECC71',
});

export const PinkSalmon = stylex.createTheme(color, {
  arroz: '#fff',
  caballa: '#FFE4E1',
  lenguado: '#FFC0CB',
  tiburon: '#FF91A4',
  ballena: '#FF69B4',
  plancton: '#DB7093',
  planctonLink: '#FF1493',
});

export const ClownfishTheme = stylex.createTheme(color, {
  arroz: '#fff',
  caballa: '#FFE0B2',
  lenguado: '#FFCC80',
  tiburon: '#FFA726',
  ballena: '#FF9800',
  plancton: '#FB8C00',
  planctonLink: '#F57C00',
});

interface ColorScheme {
  [key: string]: any;
}

export const ColorScheme: ColorScheme = {
  default: '',
  green: GreenTetra,
  pink: PinkSalmon,
  orange: ClownfishTheme,
}
