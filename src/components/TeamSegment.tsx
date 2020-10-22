import React from 'react'
import { Header, Segment, Grid } from 'semantic-ui-react'
import { teams } from '../fixtures'

import TeamColumn from './TeamColumn'
import styles from './TeamSegment.module.scss'

interface Props {
  backgroundColor: string
}

function TeamSegment({ backgroundColor }: Props) {
  return (
    <Segment style={{ background: backgroundColor }} vertical id="team">
      <Grid container stackable verticalAlign="top">
        <Grid.Row centered>
          <Header as="h2" textAlign="center" size="huge">
            Unsere drei Teams:
          </Header>
        </Grid.Row>
        <Grid.Row columns={3} divided centered>
          {teams.map((team) => (
            <TeamColumn {...team} />
          ))}

          <Header as="h2" textAlign="center" size="large">
            Wir suchen momentan Verstärkung für die Teams Kommunikation und
            Weiterbildung!
          </Header>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default TeamSegment
