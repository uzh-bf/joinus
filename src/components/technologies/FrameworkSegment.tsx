import React from 'react'
import { technologies } from '../../data'
import SegmentContainer from '../SegmentContainer'
import Framework from './Framework'

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
      <div className="grid grid-cols-2 gap-8 md:gap-16 md:grid-cols-3">
        {technologies.map((tech) => (
          <Framework key={tech.title} {...tech} />
        ))}
      </div>
    </SegmentContainer>
  )
}

export default FrameworkSegment
