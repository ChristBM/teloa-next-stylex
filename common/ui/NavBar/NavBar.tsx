import Image from 'next/image'
import stylex from "@stylexjs/stylex";
import { margin, padding } from '@/styles/tokens.stylex';
import { NavBarProps } from './Interfaces'
import LangBtn from '../LangBtn/LangBtn'

export default function NavBar({
  logo = '/en/logo-teloa.svg',
}: NavBarProps) {
  return (
    <div className={stylex(s.container)}>
      <div className={stylex(s.wrapper)}>
        <Image
          src={logo}
          alt="logo"
          width={98}
          height={22}
          priority
          className={stylex(s.imgMobile)}
        />

        <Image
          src={logo}
          alt="logo"
          width={115}
          height={26}
          priority
          className={stylex(s.imgDesktop)}
        />
      </div>

      <LangBtn />
    </div>
  )
}

const s = stylex.create({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: {
      default: '64px',
      '@media (min-width: 1440px)': '76px',
    },
    paddingRight: {
      default: padding.md,
      '@media (min-width: 1440px)': padding.xl,
    },
    paddingLeft: {
      default: '0px',
      '@media (min-width: 1440px)': padding.md,
    },
    zIndex: 10,
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgMobile: {
    display: {
      default: 'block',
      '@media (min-width: 1440px)': 'none',
    },
    marginInline: margin.lg,
  },
  imgDesktop: {
    display: {
      default: 'none',
      '@media (min-width: 1440px)': 'block',
    },
    marginInline: {
      default: '0px',
      '@media (min-width: 1440px)': margin.base,
    },
  },
});
