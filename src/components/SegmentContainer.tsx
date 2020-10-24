import React from 'react'
import { Grid, Header, Segment } from 'semantic-ui-react'
import ScrollDown from './ScrollDown'

import styles from './SegmentContainer.module.scss'

export interface Props {
  id: string
  title?: string
  children: React.ReactNode
  backgroundColor?: string
  nextUp?: string
}

function SegmentContainer({
  id,
  backgroundColor,
  title,
  nextUp,
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
        <div className={styles.content}>
          <Grid container stackable>
            <Grid.Row centered className={styles.headerRow}>
              <Header as="h2" textAlign="center" size="huge">
                {title}
              </Header>
            </Grid.Row>
            {children}
          </Grid>
        </div>

        {nextUp && <ScrollDown scrollTo={nextUp} />}
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
      <div className={styles.content}>{children}</div>

      {nextUp && <ScrollDown scrollTo={nextUp} />}
    </Segment>
  )
}

export default SegmentContainer
