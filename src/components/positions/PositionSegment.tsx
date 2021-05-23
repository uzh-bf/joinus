import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import SegmentContainer from '../SegmentContainer'
import Position from './Position'
import styles from './PositionSegment.module.scss'
import SubscribeForm from './SubscribeForm'

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
            title="Junior IT"
            subtitle="IT-Fachkraft für technische Unterstützung und Umsetzung von neuen Inhalten"
          >
            <p>
              Diese Position ist für Studierende, welche ca. im 3. Semester
              Informatik im Haupt- oder Nebenfach studieren und erste
              Programmiererfahrungen haben. Hier entwickelt man beispielsweise
              unsere CMS und Webseiten weiter, erstellt neue eLearning-Kurse,
              und unterstützt bei allgemeinen IT-Projekten sowie der Erfassung
              von Inhalten.
            </p>
            <p>
              Es besteht viel Potenzial zur persönlichen Weiterentwicklung (z.B.
              in Richtung fortgeschrittener Web-Entwicklung und Datenanalyse)
              mit zunehmender Übernahme von eigener Projektverantwortung.
            </p>
          </Position>
        </Grid.Column>

        <Grid.Column width={5}>
          <Image bordered rounded size="large" src="images/olat.jpg" />
        </Grid.Column>
      </Grid>

      {/* <Grid
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
            subtitle="Entwicklung von Geschäftsapplikationen, WebApps, Games und weiterer Projekte"
          >
            <p>
              Diese Position ist für Studierende ab dem 5. Semester Informatik
              im Haupt- oder Nebenfach, welche bereits Programmiererfahrung
              haben, bevorzugterweise mit React. Hier arbeitet man in
              IT-Projekten mit, bei welchen WebApps, Games oder andere Produkte
              implementiert werden und hilft bei Erweiterungen und
              Modernisierung bestehender Applikationen sowie bei der
              Konzeptionierung neuer Ideen.
            </p>
            <p>
              Bei einer Bewerbung für diese Position wirst du von uns eine
              kleine <i>React Programmier-Challenge</i> erhalten, mit der du
              deine Fähigkeiten beweisen kannst. Das erlaubt uns, beim Interview
              auf nicht aussagekräftige technische Fragen
              (&ldquo;Whiteboard-Coding&rdquo;) zu verzichten :)
            </p>
          </Position>
        </Grid.Column>

        <Grid.Column width={3} />
      </Grid> */}

      <Grid
        container
        stackable
        verticalAlign="middle"
        reversed="mobile"
        centered
        className={styles.margined}
      >
        <Grid.Column width={5}>
          <Image bordered size="large" src="images/olat.jpg" />
        </Grid.Column>

        <Grid.Column width={8}>
          <Position
            title="Aktuell keine Position für dich?"
            subtitle="Melde dich bei uns und wir informieren dich, wenn sich etwas ändert"
          >
            <SubscribeForm />
          </Position>
        </Grid.Column>

        <Grid.Column width={3} />
      </Grid>
    </SegmentContainer>
  )
}

export default PositionSegment
