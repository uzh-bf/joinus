import React from 'react'
import SegmentContainer from '../SegmentContainer'
import AdvantageColumn from './AdvantageColumn'

export interface Props {
  backgroundColor: string
}

function AdvantagesSegment({ backgroundColor }: Props) {
  return (
    <SegmentContainer
      id="advantages"
      title="Was wir dir bieten"
      nextUp="#projects"
      backgroundColor={backgroundColor}
    >
      <div className="flex flex-col gap-8 md:flex-row">
        <AdvantageColumn
          iconName="code branch"
          iconColor="#191919"
          advantageTitle="#experience"
          advantageText="Wende deine Programmierkenntnisse in einem praktischen Umfeld an, arbeite dich in neue Bereiche ein und sammle in verschiedenen Projekten breite Erfahrung für deine berufliche Laufbahn."
        />
        <AdvantageColumn
          iconName="clock"
          iconColor="#a5673f"
          advantageTitle="#flexibility"
          advantageText="Teile dir die Arbeitszeiten frei ein, sodass du trotz spannender Arbeit genügend Zeit und Energie fürs Studium aufwenden kannst."
        />
        <AdvantageColumn
          iconName="users"
          iconColor="#ff851b"
          advantageTitle="#team"
          advantageText="Sei Teil eines jungen und ambitionierten Teams. Neben engagierter Zusammenarbeit grillieren wir im Sommer gerne, besetzen das bQm oder machen Teamausflüge."
        />
        <AdvantageColumn
          iconName="dollar sign"
          iconColor="#2ecc40"
          advantageTitle="#salary"
          advantageText="Verdiene einen fairen Stundenlohn, welcher nach deinem aktuellen Abschluss festgelegt ist und mit deinem Studium Schritt hält."
        />
      </div>
    </SegmentContainer>
  )
}

export default AdvantagesSegment
