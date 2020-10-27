import React from 'react'
import { Header, Segment, Grid } from 'semantic-ui-react'

import { teams } from '../../data'
import SegmentContainer from '../SegmentContainer'
import TeamColumn from './TeamColumn'
import styles from './TeamSegment.module.scss'

export interface Props {
  backgroundColor: string
}

function TeamSegment({ backgroundColor }: Props) {
  return (
    <SegmentContainer
      id="teams"
      title="Unsere drei Teams"
      nextUp="#department"
      backgroundColor={backgroundColor}
    >
      <Grid.Row columns={3} divided centered>
        {teams.map((team) => (
          <TeamColumn {...team} />
        ))}

        <Header as="h2" textAlign="center" size="large">
          Wir suchen momentan Verstärkung für die Teams Teaching Center (Junior
          &amp; Senior) und Weiterbildung (Senior)!
        </Header>
      </Grid.Row>
    </SegmentContainer>
  )
}

export default TeamSegment
