import React from 'react'
import Head from 'next/head'
import { Responsive, Segment } from 'semantic-ui-react'

import BurgerMenu from './BurgerMenu'
import HomepageHeading from './HomepageHeading'
import Footer from './Footer'

const styles = {
  container: {
    backgroundImage: `images/bfinverted_transparent.png`,
    minHeight: '100vh',
    maxWidth: 800,
    padding: '1em 0em',
    backgroundColor: 'rgb(0, 2, 62)',
    backgroundPosition: 'left bottom' /*Positioning in left lower corner*/,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  },
}

const stylesMobile = {
  container: {
    backgroundImage: `images/bfinverted_transparent.png`,
    minHeight: '90vh',
    maxWidth: 800,
    padding: '1em 0em',
    backgroundColor: 'rgb(0, 2, 62)',
    backgroundPosition: 'left bottom' /*Positioning in left lower corner*/,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  },
}

function DesktopContainer({ children }) {
  return (
    <Responsive minWidth={Responsive.onlyTablet.minWidth}>
      <div style={{ background: 'rgb(0, 2, 62)', position: 'relative' }}>
        <Segment
          inverted
          textAlign="center"
          vertical
          style={styles.container}
        />
        <HomepageHeading />
      </div>

      {children}

      <Footer />
    </Responsive>
  )
}

function MobileContainer({ children }) {
  return (
    <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
      <div style={{ background: 'rgb(0, 2, 62)', position: 'relative' }}>
        <Segment
          inverted
          textAlign="center"
          vertical
          style={stylesMobile.container}
        />
        <HomepageHeading mobile />
      </div>

      {children}

      <Footer />
    </Responsive>
  )
}

export function ResponsiveContainer({ children }) {
  return (
    <div>
      <Head>
        <html lang="de" />
      </Head>
      <BurgerMenu />
      <DesktopContainer>{children}</DesktopContainer>
      <MobileContainer>{children}</MobileContainer>
    </div>
  )
}
