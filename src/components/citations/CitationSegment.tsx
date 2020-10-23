import React from 'react'
import { Container, Header, Image, Segment, Grid } from 'semantic-ui-react'
import SegmentContainer from '../SegmentContainer'
import Citation from './Citation'

import styles from './CitationSegment.module.scss'

export interface Props {
  backgroundColor: string
}

function CitationSegment({ backgroundColor }: Props) {
  return (
    <SegmentContainer id="citations" backgroundColor={backgroundColor}>
      <Grid
        container
        stackable
        verticalAlign="middle"
        reversed="mobile"
        centered
      >
        <Grid.Column width={3} />

        <Grid.Column width={8} textAlign="right">
          <Citation
            title="Flexibilität ist Trumpf"
            author="Manuel Keller, studiert Information Systems"
          >
            Mir gefällt, dass ich sehr flexible Arbeitszeiten habe. Vor
            Prüfungen kann man problemlos reduzieren oder aussetzen; während den
            Semesterferien wiederum sein Budget aufbessern.
          </Citation>
        </Grid.Column>

        <Grid.Column width={5}>
          <Image bordered rounded size="large" src="images/manuel.jpg" />
        </Grid.Column>
      </Grid>

      <Grid container stackable verticalAlign="middle" centered>
        <Grid.Column width={5}>
          <Image bordered rounded size="large" src="images/pascal.jpg" />
        </Grid.Column>

        <Grid.Column width={8}>
          <Citation
            title="Abwechslung und Eigenverantwortung"
            author="Pascal Zehnder, studiert Information Systems"
          >
            Mir gefällt, dass ich in meiner Arbeit am Institut selbst die
            Verantwortung für meine Projekte trage. Dadurch kann ich selber
            entscheiden, welche Technologien ich einsetzen will und lerne viel
            dabei.
          </Citation>
        </Grid.Column>

        <Grid.Column width={3} />
      </Grid>
    </SegmentContainer>
  )
}

export default CitationSegment
