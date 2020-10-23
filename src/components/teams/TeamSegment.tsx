import React from 'react'
import { Header, Segment, Grid } from 'semantic-ui-react'

import { teams } from '../../fixtures'
import SegmentContainer from '../SegmentContainer'
import TeamColumn from './TeamColumn'
import styles from './TeamSegment.module.scss'

export interface Props {
  backgroundColor: string
}

function TeamSegment({ backgroundColor }: Props) {
  return (
    <SegmentContainer
      id="team"
      title="Unsere drei Teams:"
      backgroundColor={backgroundColor}
    >
      <Grid.Row columns={3} divided centered>
        {teams.map((team) => (
          <TeamColumn {...team} />
        ))}

        <Header as="h2" textAlign="center" size="large">
          Wir suchen momentan Verstärkung für die Teams Kommunikation und
          Weiterbildung!
        </Header>
      </Grid.Row>
    </SegmentContainer>
  )
}

export default TeamSegment
