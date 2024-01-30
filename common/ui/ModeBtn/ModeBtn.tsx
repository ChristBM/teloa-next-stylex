'use client'

import { useContext } from 'react';
import { useTheme } from 'next-themes'
import stylex from "@stylexjs/stylex";
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { padding, color, borderRadius } from '@/styles/tokens.stylex'
import { ColorContext } from '@/common/themeCtx';
import { ColorScheme } from '@/styles/themes';

export default function ModeBtn() {
  const { theme, setTheme } = useTheme()
  const { color: c } = useContext(ColorContext);

  return (
    <button
      onClick={theme === 'dark' ? () => setTheme('light') : () => setTheme('dark')}
      className={stylex(s.button, theme === 'dark' && s.btnBgDarkMode, ColorScheme[c])}
    >
      {theme === 'dark' ? (
        <SunIcon className={stylex(s.iconSun)} />
      ) : (
        <MoonIcon className={stylex(s.iconMoon)} />
      )}
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
  },
  btnBgDarkMode: {
    backgroundColor: color.arroz,
  },
  iconSun: {
    color: color.ballena,
    width: '24px',
    height: '24px',
  },
  iconMoon: {
    color: color.arroz,
    width: '24px',
    height: '24px',
  },
})
