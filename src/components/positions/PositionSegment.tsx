import React from 'react'
import {
  Container,
  Header,
  Image,
  Segment,
  Grid,
  Divider,
} from 'semantic-ui-react'
import SegmentContainer from '../SegmentContainer'
import Position from './Position'

import styles from './PositionSegment.module.scss'

export interface Props {
  backgroundColor: string
}

function PositionSegment({ backgroundColor }: Props) {
  return (
    <SegmentContainer
      id="positions"
      title="Offene Positionen"
      nextUp="#requirements"
      backgroundColor={backgroundColor}
    >
      <Grid
        container
        stackable
        verticalAlign="middle"
        reversed="mobile"
        centered
      >
        <Grid.Column width={3} />

        <Grid.Column width={8} textAlign="right">
          <Position
            title="Junior Entwickler"
            subtitle="IT-Fachkraft für technische Unterstützung und Umsetzung von neuen Inhalten"
          >
            Diese Position ist für Student*innen, welche ca. im 3. Semester
            Informatik im Haupt- oder Nebenfach studieren und erst wenig
            Programmiererfahrung haben. Hier macht man anfangs beispielsweise
            inhaltliche Anpassungen, entwickelt unsere CMS's weiter, setzt neue
            OLAT-Kurse auf und hilft bei allgemeinen IT-Problemen und Anfragen.
            Dabei besteht viel Potenzial zur Weiterentwicklung (z.B. in Richtung
            Web Development) und zum Lernen, mit zunehmender Übernahme von
            Verantwortung.
          </Position>
        </Grid.Column>

        <Grid.Column width={5}>
          <Image bordered rounded size="large" src="images/olat.jpg" />
        </Grid.Column>
      </Grid>

      <Grid
        container
        stackable
        verticalAlign="middle"
        centered
        className={styles.margined}
      >
        <Grid.Column width={5}>
          <Image bordered rounded size="large" src="images/klicker.jpg" />
        </Grid.Column>

        <Grid.Column width={8}>
          <Position
            title="IT-Projektmitarbeiter"
            subtitle="Software-Entwicklung Geschäftsapplikationen, WebApps, Games und weiterer IT-Projekte "
          >
            Diese Position ist für Student*innen ab dem 5. Semester Informatik
            im Haupt- oder Nebenfach, welche bereits Programmiererfahrung haben,
            bevorzugterweise mit React. Hier arbeitet man in IT-Projekten mit,
            bei welchen WebApps, Games oder andere Produkte implementiert werden
            und hilft bei Erweiterungen und Modernisierung bestehender
            Applikationen sowie bei der Konzeptionierung neuer Ideen.
            <br />
            <br />
            Bei einer Bewerbung für diese Position wirst du von uns eine kleine{' '}
            <i>React Programmier-Challenge</i> erhalten, mit der du deine
            Fähigkeiten beweisen kannst. Das erlaubt uns, beim Interview auf
            nicht aussagekräftige technische Fragen zu verzichten :)
          </Position>
        </Grid.Column>

        <Grid.Column width={3} />
      </Grid>
    </SegmentContainer>
  )
}

export default PositionSegment
