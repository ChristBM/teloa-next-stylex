'use client'

import { useContext } from 'react';
import { useTheme } from 'next-themes';
import stylex from "@stylexjs/stylex";
import { padding, color, borderRadius } from '@/styles/tokens.stylex'
import { ColorContext } from '@/common/themeCtx';
import { ColorScheme } from '@/styles/themes';

export default function ColorBtn() {
  const { theme } = useTheme()
  const { color: c, setColor } = useContext(ColorContext);

  const handleChangeColors = () => {
    switch(c) {
      case 'default':
        setColor('green');
        break;
      case 'green':
        setColor('pink');
        break;
      case 'pink':
        setColor('orange');
        break;
      case 'orange':
        setColor('default');
        break;
      default:
        setColor('default');
    }
  }

  return (
    <button
      onClick={handleChangeColors}
      className={stylex(s.button, theme === 'dark' && s.btnBgDarkMode, ColorScheme[c])}
    >
      Color
    </button>
  )
}

const s = stylex.create({
  button: {
    display: 'flex',
    width: '40px',
    height: '40px',
    padding: padding.md,
    border: 'none',
    outline: 'none',
    background: 'none',
    borderRadius: borderRadius.sm,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.ballena,
    color: color.arroz,
  },
  btnBgDarkMode: {
    backgroundColor: color.arroz,
    color: color.ballena,
  },
})
