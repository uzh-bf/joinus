import React from 'react'
import { Segment } from 'semantic-ui-react'

import HomepageHeading from '../HomepageHeading'

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

export default DesktopContainer
