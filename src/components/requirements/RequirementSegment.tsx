import React from 'react'
import { requirements } from '../../data'
import SegmentContainer from '../SegmentContainer'
import RequirementColumn from './RequirementColumn'

export interface Props {
  backgroundColor: string
}

function RequirementSegment({ backgroundColor }: Props) {
  return (
    <SegmentContainer
      id="requirements"
      title="Was du mitbringen solltest"
      nextUp="#teams"
      backgroundColor={backgroundColor}
    >
      <div className="flex flex-col gap-8 md:flex-row">
        {requirements.map((req) => (
          <RequirementColumn key={req.header} {...req} />
        ))}
      </div>
    </SegmentContainer>
  )
}

export default RequirementSegment
