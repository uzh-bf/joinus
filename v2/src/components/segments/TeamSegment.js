import React from 'react'
import { Header, Segment, Grid } from 'semantic-ui-react'

import TeamColumn from '../TeamColumn'

function TeamSegment({ headerText, backgroundColor }) {
  return (
    <Segment
      style={{ padding: '4em 0 5em 0', background: backgroundColor }}
      vertical
      id="team"
    >
      <Grid container stackable verticalAlign="top">
        <Grid.Row>
          <Header
            as="h2"
            textAlign="center"
            style={{ fontSize: '2.5em', width: '100%' }}
          >
            {headerText}
          </Header>
        </Grid.Row>
        <Grid.Row columns={3} divided>
          <TeamColumn
            teamName={'Kommunikation'}
            imageSrc="images/lisa.jpg"
            leaderName={'Lisa Liechti'}
            leaderPosition={'Leitung Kommunikation IBF'}
            teamDescription={
              '« Bei mir stehen viele Data Science Projekte an, bei welchen ich eure ' +
              'Unterstützung brauche. Dazu kommen immer wieder Aufgaben im Web-Design und der Gestaltung von ' +
              'Magazinen und Newslettern. Ich suche also kreative Data Scientists! »'
            }
          />
          <TeamColumn
            teamName={'Teaching Center'}
            imageSrc="images/johanna.jpg"
            leaderName={'Johanna Braun'}
            leaderPosition={'Leitung Teaching Center IBF'}
            teamDescription={
              '« Wir wollen die Lehrveranstaltungen unseres Instituts innovativ und interaktiv ' +
              'gestalten. Deshalb brauchen wir IT-Support für die digital unterstützten Kurse, für Klicker und ' +
              'Jobeye oder eine neue Idee von dir! »'
            }
          />
          <TeamColumn
            teamName={'Weiterbildung'}
            imageSrc="images/beni.jpg"
            leaderName={'Benjamin Wilding'}
            leaderPosition={'Geschäftsführer, Leitung Lehre & Weiterbildung'}
            teamDescription={
              '« Als Weiterbildungsanbieter brauchen wir kreative Informatiker*innen, die die User ' +
              'Experience mit innovativen Tools verbessern und die Kundenverwaltung mit ' +
              'Automatisierungen effizienter gestalten. »'
            }
          />

          <Header
            as="h2"
            textAlign="center"
            style={{ fontSize: '2em', width: '100%' }}
          >
            Wir suchen momentan Verstärkung für die Teams Kommunikation und
            Weiterbildung!
          </Header>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default TeamSegment
