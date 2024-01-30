import { Metadata } from "next";
import stylex from '@stylexjs/stylex';
import Link from "next/link";
import { Locale } from "@/i18n-config";
import { color, fontFamily, fontSize } from "@/styles/tokens.stylex";

export const metadata: Metadata = {
  title: 'Home | Teloa',
};

export default function Home({ params: { lang } }: { params: { lang: Locale }}) {
  const nextUrl = lang !== 'en' && lang !== 'es' ? '/en/acquisition' : `${lang}/acquisition` ;

  return (
    <main className={stylex(styles.main)}>
      <Link href={nextUrl} className={stylex(styles.link)}>
        Go to Acquisition
      </Link>
    </main>
  );
}

const styles = stylex.create({
  main: {
    display: 'flex',
    width: '100%',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    fontSize: fontSize.x2l,
    fontFamily: fontFamily.roboto,
    textAlign: 'center',
    textDecoration: 'underline',
    color: {
      default: color.plancton,
      ':hover': color.planctonLink,
    },
  },
})
