import { Suspense } from "react";
import { Metadata } from "next";
import stylex from "@stylexjs/stylex";
import ModeBtn from "@/common/ui/ModeBtn/ModeBtn";
import ColorBtn from "@/common/ui/ColorBtn/ColorBtn";
import NavBar from "@/common/ui/NavBar/NavBar";
import HeaderSection from "@/common/ui/HeaderSection/HeaderSection";
import { Locale } from "@/i18n-config";
import { gradient } from "@/styles/tokens.stylex";

export const metadata: Metadata = {
  title: 'Acquisition',
};

export default async function Page({ params } : { params: { lang: Locale }}) {
  return (
    <div className={stylex(s.container)}>
      <div className={stylex(s.modeBtnWrapper)}>
        <ModeBtn />
      </div>

      <div className={stylex(s.modeBtnWrapper, s.colorBtnWrapper)}>
        <ColorBtn />
      </div>

      <NavBar />

      <Suspense key={params.lang + 'header'} fallback={<p>Loading...</p>}>
        <HeaderSection lang={params.lang} />
      </Suspense>
    </div>
  );
}

const s = stylex.create({
  container: {
    position: 'relative',
    backgroundImage: gradient.header,
  },
  modeBtnWrapper: {
    width: 'max-content',
    height: 'max-content',
    position: 'fixed',
    right: '16px',
    bottom: '16px',
    zIndex: 10,
  },
  colorBtnWrapper: {
    bottom: '60px',
  },
});
