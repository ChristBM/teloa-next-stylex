import type { Metadata } from "next";
import * as stylex from "@stylexjs/stylex";
import { Providers } from "@/common/providers";
import { i18n, type Locale } from "../../i18n-config";
import "@/styles/globals.css";
import { fontFamily } from "@/styles/tokens.stylex";

export const metadata: Metadata = {
  title: {
    template: '%s | Teloa',
    default: 'Teloa Landings',
  },
  description: 'insert description here',
  // metadataBase: new URL('https://teloa.com'),
  /* themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	], */
  /* icons: {
		icon: "/favicon.ico",
		shortcut: "/favicon-16x16.png",
		apple: "/apple-touch-icon.png",
	}, */
};

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
      </head>

      <body {...stylex.props(styles.body)}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

const styles = stylex.create({
  body: {
    fontFamily: fontFamily.inter,
  },
});
