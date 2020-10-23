import { Header, Segment, Grid } from 'semantic-ui-react'
import React from 'react'

import RequirementColumn from './RequirementColumn'
import styles from './RequirementSegment.module.scss'
import { requirements } from '../../data'
import SegmentContainer from '../SegmentContainer'

export interface Props {
  backgroundColor: string
}

function RequirementSegment({ backgroundColor }: Props) {
  return (
    <SegmentContainer
      id="requirements"
      title="Was du mitbringen solltest:"
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
