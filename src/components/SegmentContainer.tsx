import React from 'react'
import { Grid, Header, Segment } from 'semantic-ui-react'

import styles from './SegmentContainer.module.scss'

export interface Props {
  id: string
  title?: string
  children: React.ReactNode
  backgroundColor?: string
}

function SegmentContainer({
  id,
  backgroundColor,
  title,
  children,
}: Props): React.ReactElement {
  if (title) {
    return (
      <Segment
        vertical
        className={styles.segmentContainer}
        style={{ background: backgroundColor }}
        id={id}
      >
        <Grid container stackable>
          <Grid.Row centered className={styles.headerRow}>
            <Header as="h2" textAlign="center" size="huge">
              {title}
            </Header>
          </Grid.Row>
          {children}
        </Grid>
      </Segment>
    )
  }

  return (
    <Segment
      vertical
      className={styles.segmentContainer}
      style={{ background: backgroundColor }}
      id={id}
    >
      {children}
    </Segment>
  )
}

export default SegmentContainer
