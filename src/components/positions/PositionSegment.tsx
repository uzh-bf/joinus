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
      title="Positionen am IBF"
      nextUp="#application"
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
            isOpen="Aktuell und bis am 23. Juni 2021 läuft eine Ausschreibung für diese Position mit Fokus auf den Bereich eAssessment/Prüfungsauswertung mit Python."
            title="Junior IT"
            subtitle="IT-Fachkraft für technische Unterstützung und Umsetzung von neuen Inhalten"
          >
            <p>
              Diese Position ist für Studierende, welche ca. im 3. Semester
              Informatik im Haupt- oder Nebenfach studieren und erste
              Programmiererfahrungen haben. Hier entwickelt man beispielsweise
              unsere CMS, Webseiten, und eAssessment-Tools weiter, erstellt neue
              eLearning-Kurse, und unterstützt bei allgemeinen IT-Projekten
              sowie der Erfassung von Inhalten.
            </p>
            <p>
              Es besteht viel Potenzial zur persönlichen Weiterentwicklung (z.B.
              in Richtung fortgeschrittener Web-Entwicklung und Datenanalyse)
              mit zunehmender Übernahme von eigener Projektverantwortung.
            </p>
          </Position>
        </Grid.Column>

        <Grid.Column width={5}>
          <Image
            bordered
            rounded
            size="large"
            src="images/projects/thumb_olat.jpg"
          />
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
          <Image
            bordered
            rounded
            size="large"
            src="images/projects/klicker.jpg"
          />
        </Grid.Column>

        <Grid.Column width={8}>
          <Position
            title="Senior IT"
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
      </Grid>

      <Grid
        container
        stackable
        verticalAlign="middle"
        reversed="mobile"
        centered
        className={styles.margined}
      >
        <Grid.Column width={3} />

        <Grid.Column width={8}>
          <Position
            title="Aktuell keine Position für dich offen?"
            subtitle="Wir sind immer auf der Suche nach neuen Talenten. Melde dich bei uns, wenn du Interesse hast, mitzuarbeiten."
          >
            <SubscribeForm />
          </Position>
        </Grid.Column>

        <Grid.Column width={5}>
          <Image
            bordered
            rounded
            size="medium"
            src="images/einzelarbeit_icon.png"
          />
        </Grid.Column>
      </Grid>
    </SegmentContainer>
  )
}

export default PositionSegment
