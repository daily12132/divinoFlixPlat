import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import('disable-devtool').then((disableDevtool) => {
      disableDevtool.default({
        url: 'https://store.steampowered.com/', // URL para redirecionar se DevTools estiver aberto
        disableMenu: true, // Desabilita o menu de contexto do clique direito
        disableCopy: true,
        disableCut: true,
        disablePaste: true,
      })
    })
  }, [])

  return <Component {...pageProps} />
}
