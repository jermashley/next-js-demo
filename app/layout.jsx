import { config } from '@fortawesome/fontawesome-svg-core'
import { QueryClientWrapper } from '@/utils/ReactQuery'
import { Inter } from '@next/font/google'

import '@fortawesome/fontawesome-svg-core/styles.css'
import '@/styles/globals.css'
import { Navigation } from '@/components/Layout'

// eslint-disable-next-line quotes
const inter = Inter({ subsets: ['latin'] })

config.autoAddCss = false

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.className}`}>
      <head />

      <body className={`min-h-screen w-full bg-zinc-50 dark:bg-zinc-900`}>
        <Navigation />

        <QueryClientWrapper>{children}</QueryClientWrapper>
      </body>
    </html>
  )
}
