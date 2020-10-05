import React from 'react'
import Head from 'next/head'
import { Segment } from 'semantic-ui-react'

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

function DesktopContainer() {
  return (
    <div className="desktopContainer">
      <div style={{ background: 'rgb(0, 2, 62)', position: 'relative' }}>
        <Segment
          inverted
          textAlign="center"
          vertical
          style={styles.container}
        />
        <HomepageHeading />
      </div>

      <style jsx>{`
        @media screen and (min-width: 768px) {
          .desktopContainer {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}

function MobileContainer() {
  return (
    <div className="mobileContainer">
      <div style={{ background: 'rgb(0, 2, 62)', position: 'relative' }}>
        <Segment
          inverted
          textAlign="center"
          vertical
          style={stylesMobile.container}
        />
        <HomepageHeading mobile />
      </div>



      <style jsx>{`
        @media screen and (max-width: 768px) {
          .mobileContainer {
            display: none;
          }
        }
      `}</style>
    </div>
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
      {children}
      <Footer />
    </div>
  )
}
