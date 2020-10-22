import React from 'react'
import { Grid, Header, Segment } from 'semantic-ui-react'

import AdvantageColumn from './AdvantageColumn'

import styles from './AdvantagesSegment.module.scss'

interface Props {
  backgroundColor: string
}

function AdvantagesSegment({ backgroundColor }: Props) {
  return (
    <Segment style={{ background: backgroundColor }} vertical id="advantages">
      <Grid container stackable verticalAlign="top">
        <Grid.Row centered>
          <Header as="h2" textAlign="center" size="huge">
            Was wir dir bieten:
          </Header>
        </Grid.Row>
        <Grid.Row columns={4}>
          <AdvantageColumn
            iconName="code branch"
            iconColor="black"
            advantageTitle="#experience"
            advantageText="Wende deine Programmierkenntnisse in einem praktischen Umfeld an, arbeite dich in neue Bereiche ein und sammle in verschiedenen Projekten breite Erfahrung für deine berufliche Laufbahn."
          />
          <AdvantageColumn
            iconName="dollar sign"
            iconColor="green"
            advantageTitle="#salary"
            advantageText="Verdiene einen fairen Stundenlohn, welcher nach deinem aktuellen Abschluss festgelegt ist."
          />
          <AdvantageColumn
            iconName="clock outline"
            iconColor="brown"
            advantageTitle="#flexibility"
            advantageText="Teile dir die Arbeitszeiten frei ein, sodass du trotz spannender Arbeit genügend Zeit und Energie fürs Studium aufwenden kannst."
          />
          <AdvantageColumn
            iconName="users"
            iconColor="orange"
            advantageTitle="#team"
            advantageText="Sei Teil eines jungen und ambitionierten Teams. Neben engagierter Zusammenarbeit grillieren wir im Sommer gerne, besetzen das bQm oder machen Teamausflüge."
          />
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default AdvantagesSegment
