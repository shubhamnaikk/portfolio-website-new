import React from 'react'
import { ThemeProvider } from '@/components/client-provider'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        disableTransitionOnChange>
        {children}
    </ThemeProvider>
  )
}

export default Providers