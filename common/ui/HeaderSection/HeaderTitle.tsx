'use client';

import { useContext } from "react";
import { useTheme } from "next-themes";
import stylex from "@stylexjs/stylex";
import { ColorContext } from "@/common/themeCtx";
import { ColorScheme } from '@/styles/themes';

import {
  padding,
  color,
  fontWeight,
  fontSize,
  fontLineHeight } from "@/styles/tokens.stylex";

export default function HeaderTitle({ title }: { title: string }) {
  const { theme } = useTheme();
  const { color: c } = useContext(ColorContext);

  return (
    <h1 className={stylex(s.title, theme === 'dark' && s.titleDarkMode, ColorScheme[c])}>
      {title}
    </h1>
  )
}

const s = stylex.create({
  title: {
    paddingBlock: padding.md,
    fontWeight: {
      default: fontWeight.semi,
      '@media (min-width: 1440px)': fontWeight.bold,
    },
    fontSize: {
      default: fontSize.x2l,
      '@media (min-width: 1440px)': fontSize.x4l,
    },
    color: color.ballena,
    textAlign: 'center',
    lineHeight: {
      default: 'normal',
      '@media (min-width: 1440px)': fontLineHeight.x3l,
    },
  },
  titleDarkMode: {
    color: color.arroz,
  }
});
