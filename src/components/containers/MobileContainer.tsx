import React from 'react'
import { Segment } from 'semantic-ui-react'

import HomepageHeading from '../HomepageHeading'

const stylesMobile = {
  container: {
    backgroundImage: `url(images/bfinverted_transparent.png)`,
    minHeight: '90vh',
    maxWidth: 800,
    padding: '1em 0em',
    backgroundColor: 'rgb(0, 2, 62)',
    backgroundPosition: 'left bottom' /*Positioning in left lower corner*/,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  },
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
        @media screen and (min-width: 768px) {
          .mobileContainer {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}

export default MobileContainer
