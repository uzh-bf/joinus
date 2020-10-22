import React from 'react'
import { Container, Header, Image, Segment, Grid } from 'semantic-ui-react'

import styles from './CitationSegment.module.scss'

export interface Props {
  backgroundColor: string
}

// TODO: component split
function CitationSegment({ backgroundColor }: Props) {
  let imgstyle = {
    marginBottom: 0,
    maxHeight: 'auto',
    objectFit: 'cover',
    margin: 'auto',
  }

  return (
    <Segment style={{ background: backgroundColor }} vertical id="citations">
      <Grid
        container
        stackable
        verticalAlign="middle"
        reversed="mobile"
        centered
      >
        <Grid.Column width={7}>
          <Container>
            <Header as="h3">Flexibilität ist Trumpf</Header>

            <p className={styles.description}>
              Mir gefällt, dass ich sehr flexible Arbeitszeiten habe. Vor
              Prüfungen kann man problemlos reduzieren oder aussetzen; während
              den Semesterferien wiederum sein Budget aufbessern.
            </p>

            <p className={styles.citation}>
              <cite>- Manuel Keller, studiert Information Systems</cite>
            </p>
          </Container>
        </Grid.Column>

        <Grid.Column width={5}>
          <div style={{ maxWidth: '55vw', margin: 'auto' }}>
            <Image
              bordered
              rounded
              size="large"
              src="images/manuel.jpg"
              style={imgstyle}
            />
          </div>
        </Grid.Column>
      </Grid>
      <Grid container stackable verticalAlign="middle" centered>
        <Grid.Column width={5}>
          <div style={{ maxWidth: '55vw', margin: 'auto' }}>
            <Image
              bordered
              rounded
              size="large"
              src="images/pascal.jpg"
              style={imgstyle}
            />
          </div>
        </Grid.Column>

        <Grid.Column width={7}>
          <Container>
            <Header as="h3">Abwechslung und Eigenverantwortung</Header>

            <p className={styles.description}>
              Mir gefällt, dass ich in meiner Arbeit am Institut selbst die
              Verantwortung für meine Projekte trage. Dadurch kann ich selber
              entscheiden, welche Technologien ich einsetzen will und lerne viel
              dabei.
            </p>

            <p className={styles.citation}>
              <cite>- Pascal Zehnder, studiert Information Systems</cite>
            </p>
          </Container>
        </Grid.Column>
      </Grid>
    </Segment>
  )
}

export default CitationSegment
