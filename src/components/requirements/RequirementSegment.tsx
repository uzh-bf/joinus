import { Header, Segment, Grid } from 'semantic-ui-react'
import React from 'react'

import RequirementColumn from './RequirementColumn'
import styles from './RequirementSegment.module.scss'
import { requirements } from '../../fixtures'

interface Props {
  backgroundColor: string
}

function RequirementSegment({ backgroundColor }: Props) {
  return (
    <Segment style={{ background: backgroundColor }} vertical id="requirements">
      <Grid container stackable verticalAlign="top">
        <Grid.Row centered>
          <Header as="h2" textAlign="center" size="huge">
            Was du mitbringen solltest:
          </Header>
        </Grid.Row>

        <Grid.Row divided centered>
          {requirements.map((req) => (
            <RequirementColumn {...req} />
          ))}
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default RequirementSegment
