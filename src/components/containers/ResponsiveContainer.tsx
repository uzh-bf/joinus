import React from 'react'
import Head from 'next/head'

import BurgerMenu from '../BurgerMenu'
import Footer from '../Footer'
import DesktopContainer from './DesktopContainer'
import MobileContainer from './MobileContainer'

interface Props {
  children: React.ReactNode
}

function ResponsiveContainer({ children }: Props) {
  return (
    <div>
      <Head>
        <html lang="de" />
      </Head>
      <BurgerMenu />
      <DesktopContainer />
      <MobileContainer />
      {children}
      <Footer />
    </div>
  )
}
export default ResponsiveContainer
