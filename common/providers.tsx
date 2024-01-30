'use client'

import { ThemeProvider } from "next-themes"
import { ColorProvider } from "./themeCtx"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ColorProvider>
        {children}
      </ColorProvider>
    </ThemeProvider>
  )
}
