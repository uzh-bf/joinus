import React from 'react'
import { Header, Segment, Grid } from 'semantic-ui-react'

import { technologies } from '../fixtures'
import styles from './FrameworkSegment.module.scss'

interface Props {
  backgroundColor: string
}

function FrameworkSegment({ backgroundColor }: Props) {
  return (
    <Segment style={{ background: backgroundColor }} vertical id="technologies">
      <Grid container stackable verticalAlign="top">
        <Grid.Row centered>
          <Header as="h2" textAlign="center" size="huge">
            Unsere Lieblingstechnologien und Frameworks:
          </Header>
        </Grid.Row>
      </Grid>

      <div className={styles.slideshowContainer}>
        <div className={styles.slideshowContent}>
          {technologies.map(({ image, title }) => (
            <div>
              <img src={image} />
              <p>{title}</p>
            </div>
          ))}
        </div>
      </div>
    </Segment>
  )
}

export default FrameworkSegment
