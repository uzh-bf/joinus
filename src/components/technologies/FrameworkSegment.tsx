import React from 'react'
import { technologies } from '../../data'
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
      title="Unsere Lieblingstechnologien und Frameworks"
      nextUp="#teams"
      backgroundColor={backgroundColor}
    >
      <div className={styles.slideshowContainer}>
        <div className={styles.slideshowContent}>
          {technologies.map((tech) => (
            <Framework key={tech.title} {...tech} />
          ))}
        </div>
      </div>
    </SegmentContainer>
  )
}

export default FrameworkSegment
