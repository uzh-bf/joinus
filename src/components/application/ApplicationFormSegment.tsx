import React from 'react'
import { Grid, Header, Icon } from 'semantic-ui-react'
import SegmentContainer from '../SegmentContainer'
import ApplicationForm from './ApplicationForm'

interface Props {
  backgroundColor: string
}

function ApplicationFormSegment({ backgroundColor }: Props) {
  return (
    <SegmentContainer
      id="application"
      title="Bewirb dich jetzt!"
      backgroundColor={backgroundColor}
    >
      <Grid.Row centered>
        <Grid.Column width={10}>
          <ApplicationForm />
        </Grid.Column>
      </Grid.Row>

      <Grid.Row centered>
        <Header as="h2" textAlign="center">
          Hast du Fragen? Gerne beantworten wir diese per E-Mail. <br />
          <a href="https://www.bf.uzh.ch/de/persons/keller-manuel">
            Kontaktdaten <Icon name="external alternate" />
          </a>
        </Header>
      </Grid.Row>
    </SegmentContainer>
  )
}

export default ApplicationFormSegment
