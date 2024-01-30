"use client";

import { useContext } from "react";
import Link from "next/link";
import stylex from "@stylexjs/stylex";
import { RechargeBtnProps } from "./Interfaces";
import { borderRadius, fontSize, padding, color, fontLineHeight, fontWeight } from "@/styles/tokens.stylex";
import { ColorContext } from "@/common/themeCtx";
import { ColorScheme } from '@/styles/themes';

export default function RechargeBtn({ href, lang }: RechargeBtnProps) {
  const { color: c } = useContext(ColorContext);
  const btnLabel = lang === 'es' ? 'Enviar una Recarga' : 'Send a Recharge';

  return (
    <Link
      href={href}
      className={stylex(s.button, ColorScheme[c])}
    >
      {btnLabel}
    </Link>
  )
}

const s = stylex.create({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: {
      default: '328px',
      '@media (min-width: 1440px)': '296px',
    },
    paddingBlock: padding.base,
    paddingInline: padding.xl,
    borderRadius: borderRadius.lg,
    backgroundColor: {
      default: color.plancton,
      ':hover': color.planctonLink,
    },
    fontSize: fontSize.lg,
    textAlign: 'center',
    fontWeight: fontWeight.semi,
    color: color.arroz,
    lineHeight: fontLineHeight.lg,
    textDecoration: 'none',
  }
});
