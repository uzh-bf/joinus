import Image from 'next/image'
import React from 'react'
import { Grid } from 'semantic-ui-react'
import ImageManuel from '../../../public/images/people/manuel.jpg'
import ImagePascal from '../../../public/images/people/pascal.jpg'
import SegmentContainer from '../SegmentContainer'
import Citation from './Citation'

export interface Props {
  backgroundColor: string
}

function CitationSegment({ backgroundColor }: Props) {
  return (
    <SegmentContainer
      id="citations"
      nextUp="#advantages"
      backgroundColor={backgroundColor}
    >
      <Grid
        container
        stackable
        verticalAlign="middle"
        reversed="mobile"
        centered
      >
        <Grid.Column width={1} />

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
          <div className="relative">
            <Image
              className="rounded-xl"
              src={ImageManuel}
              layout="responsive"
              alt="Manuel"
            />
          </div>
        </Grid.Column>
      </Grid>

      <Grid
        className="!mt-16"
        container
        stackable
        verticalAlign="middle"
        centered
      >
        <Grid.Column width={5}>
          <div className="relative">
            <Image
              className="rounded-xl"
              src={ImagePascal}
              layout="responsive"
              alt="Pascal"
            />
          </div>
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

        <Grid.Column width={1} />
      </Grid>
    </SegmentContainer>
  )
}

export default CitationSegment
