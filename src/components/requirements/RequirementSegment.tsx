import React from 'react'
import { Grid } from 'semantic-ui-react'
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
      nextUp="#positions"
      backgroundColor={backgroundColor}
    >
      <Grid.Row divided centered>
        {requirements.map((req) => (
          <RequirementColumn {...req} />
        ))}
      </Grid.Row>
    </SegmentContainer>
  )
}

export default RequirementSegment
