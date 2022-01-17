import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import '../burger-menu.scss'
import '../layout.scss'
import * as gtag from '../lib/gtag'
import '../semantic/dist/semantic.css'
import '../tailwind.css'

function App({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
