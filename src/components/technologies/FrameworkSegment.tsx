import React from 'react'
import { Header, Segment, Grid } from 'semantic-ui-react'

import { technologies } from '../../fixtures'
import SegmentContainer from '../SegmentContainer'
import Framework from './Framework'
import styles from './FrameworkSegment.module.scss'

export interface Props {
  backgroundColor: string
}

function FrameworkSegment({ backgroundColor }: Props) {
  return (
    <SegmentContainer
      id="technologies"
      title="Unsere Lieblingstechnologien und Frameworks:"
      backgroundColor={backgroundColor}
    >
      <div className={styles.slideshowContainer}>
        <div className={styles.slideshowContent}>
          {technologies.map((tech) => (
            <Framework {...tech} />
          ))}
        </div>
      </div>
    </SegmentContainer>
  )
}

export default FrameworkSegment
