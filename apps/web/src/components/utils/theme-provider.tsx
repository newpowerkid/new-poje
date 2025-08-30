'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type * as React from 'react'

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider
      {...props}
      attribute="class"
      defaultTheme="system"
      disableTransitionOnChange
      enableSystem
      themes={['light', 'dark', 'system']}
    >
      {children}
    </NextThemesProvider>
  )
}
