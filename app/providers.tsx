'use client'

import React, { ReactNode } from 'react'
import { ThemeProvider } from './theme-provider'
import { Toaster } from '@/components/ui/toaster'

function providers({children}: {children: ReactNode}) {
  return (
    <>
      <Toaster />
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
      </ThemeProvider>
    </>
  )
}

export default providers