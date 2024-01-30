import Image from "next/image";
import stylex from "@stylexjs/stylex";
import { PlanCardProps } from "./Interfaces";
import {
  color,
  gap,
  padding,
  shadows,
  borderRadius,
  fontSize,
  fontLineHeight,
  fontWeight,
  margin} from "@/styles/tokens.stylex";

export default function PlanCard({
  title,
  logo,
  prices: { actual, old, currency },
}: PlanCardProps) {
  return (
    <div className={stylex(s.container)}>
      <section className={stylex(s.textWrapper)}>
        <p className={stylex(s.title)}>{title}</p>

        <p className={stylex(s.price)}>
          {`${currency}${actual}`}
          <span className={stylex(s.oldPrice)}>
            {`${currency}${old}`}
          </span>
        </p>
      </section>

      <section className={stylex(s.logoWrapper)}>
        <Image
          src={logo}
          alt="company logo"
          width={32}
          height={14}
          className={stylex(s.logo)}
        />
      </section>
    </div>
  )
}

const s = stylex.create({
  container: {
    display: 'flex',
    width: {
      default: '328px',
      '@media (min-width: 1440px)': '280px',
    },
    height: '80px',
    paddingBlock: padding.lg,
    paddingLeft: padding.base,
    paddingRight: padding.md,
    gap: gap.md,
    borderRadius: borderRadius.sm,
    backgroundColor: color.arroz,
    boxShadow: shadows.card1,
  },
  textWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    height: 'fit-content',
  },
  title: {
    fontSize: fontSize.md,
    lineHeight: fontLineHeight.sm,
    color: color.ballena,
  },
  price: {
    fontSize: fontSize.xl,
    lineHeight: fontLineHeight.xl,
    fontWeight: fontWeight.semi,
    color: color.ballena,
  },
  oldPrice: {
    marginLeft: margin.sm,
    fontSize: fontSize.base,
    fontWeight: fontWeight.normal,
    color: color.tiburon,
    lineHeight: fontLineHeight.md,
    textDecorationLine: 'line-through',
  },
  logoWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '56px',
    height: '56px',
  },
  logo: {
    display: 'block',
  },
})
