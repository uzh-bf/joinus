import React from 'react'
import { Grid } from 'semantic-ui-react'

import SegmentContainer from '../SegmentContainer'
import AdvantageColumn from './AdvantageColumn'
import styles from './AdvantagesSegment.module.scss'

export interface Props {
  backgroundColor: string
}

function AdvantagesSegment({ backgroundColor }: Props) {
  return (
    <SegmentContainer
      id="advantages"
      title="Was wir dir bieten:"
      nextUp="#projects"
      backgroundColor={backgroundColor}
    >
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
    </SegmentContainer>
  )
}

export default AdvantagesSegment
