'use client'

import stylex from "@stylexjs/stylex";
import {
  padding,
  borderWidth,
  borderRadius,
  color,
  fontSize,
  fontWeight,
  fontLineHeight } from "@/styles/tokens.stylex"
import { LangBtnProps } from "./Interfaces"
import useLangBtn from "./useLangBtn.vm"

export default function LangBtn({
  enLabel = 'English',
  esLabel = 'Español',
}: LangBtnProps) {
  const { lang, handleBtnClick } = useLangBtn()

  return (
    <button
      onClick={handleBtnClick}
      className={stylex(s.button)}
    >
      {lang ==='es' && enLabel}
      {lang ==='en' && esLabel}
    </button>
  )
}

const s = stylex.create({
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'fit-content',
    paddingBlock: padding.md,
    paddingInline: padding.base,
    borderStyle: 'solid',
    borderWidth: borderWidth.sm,
    borderRadius: borderRadius.md,
    backgroundColor: {
      default: color.arroz,
      ':hover': color.lenguado,
    },
    fontSize: fontSize.base,
    textAlign: 'center',
    textTransform: 'capitalize',
    fontWeight: fontWeight.semi,
    lineHeight: fontLineHeight.md,
    color: color.ballena,
    cursor: 'pointer',
  },
})
