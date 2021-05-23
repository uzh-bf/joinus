import React from 'react'
import { Grid, Header, Icon, List } from 'semantic-ui-react'
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
          <p>Hast du Fragen? Gerne beantworten wir diese per E-Mail.</p>
          <List relaxed>
            <List.Item>
              <a
                target="_blank"
                href="https://www.bf.uzh.ch/de/persons/keller-manuel"
                rel="noreferrer"
              >
                <Icon name="external alternate" />
                Finance Weiterbildung
              </a>
            </List.Item>
            <List.Item>
              <a
                target="_blank"
                href="https://www.bf.uzh.ch/de/persons/braendle-claudine"
                rel="noreferrer"
              >
                <Icon name="external alternate" />
                IBF Kommunikation
              </a>
            </List.Item>
            <List.Item>
              <a
                target="_blank"
                href="https://www.bf.uzh.ch/de/persons/schlaefli-roland"
                rel="noreferrer"
              >
                <Icon name="external alternate" /> IBF Teaching Center
              </a>
            </List.Item>
          </List>
        </Header>
      </Grid.Row>
    </SegmentContainer>
  )
}

export default ApplicationFormSegment
