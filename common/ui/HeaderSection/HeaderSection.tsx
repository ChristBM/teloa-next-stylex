import Image from "next/image";
import stylex from "@stylexjs/stylex";
import RechargeBtn from "../RechargeBtn/RechargeBtn";
import Offers from "../Offers/Offers";
import { OffersProps } from "../Offers/Interfaces";
import {
  gap,
  margin,
  padding,
  color } from "@/styles/tokens.stylex";
import HeaderTitle from "./HeaderTitle";

export default async function HeaderSection({ lang }: { lang: string }) {
  // here are the calls to the api to get the header depending on the selected language
  const logo = '/en/net10.svg'

  const title = lang === 'es'
    ? 'Recargas de Net10 Wireless con $5 de descuento'
    : 'Net10 Wireless refills with $5 discount';

  const cardData: OffersProps = {
    data: [
      {
        title: lang === 'es' ? 'Plan Net10 Ilimitado Plus' : 'Net10 Unlimited Plus Plan',
        prices: {
          actual: 70,
          old: 75,
          currency: '$'
        },
        logo,
      },
      {
        title: lang === 'es' ? 'Plan Net10 Balanceado' : 'Net10 Balanced Plan',
        prices: {
          actual: 50,
          old: 55,
          currency: '$'
        },
        logo,
      },
      {
        title: lang === 'es' ? 'Plan Net10 Paquete Inicial' : 'Net10 Starter Plan',
        prices: {
          actual: 30,
          old: 35,
          currency: '$'
        },
        logo,
      },
    ]
  }

  // ------- this is an example of data --------

  return (
    <section className={stylex(s.container)}>
      <div className={stylex(s.headerWrapper)}>
        <Image
          src={logo}
          alt="company logo"
          width={160}
          height={73}
          className={stylex(s.logo)}
        />

        <HeaderTitle title={title} />
      </div>

      <Offers data={cardData.data} />

      <RechargeBtn href={`/${lang}/recharges`} lang={lang} />

      <div
        className={stylex(s.statsContainer)}
      >
        stats here...
      </div>
    </section>
  )
}

const s = stylex.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: 'max-content',
    paddingInline: padding.base,
    gap: gap.lg,
  },
  headerWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: 'max-content',
    marginTop: margin.x3l,
    gap: gap.base,
  },
  logo: {
    display: 'block',
    width: 'auto',
    height: 'auto',
    marginInline: margin.lg,
  },
  statsContainer: {
    width: '328px',
    height: '82px',
    marginBlock: '48px',
    backgroundColor: color.tiburon,
  }
});
