import React from 'react'
import { Icon, List } from 'semantic-ui-react'
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
      <div className="mb-8 text-xl text-center">
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
      </div>
      <div className="w-full max-w-xl m-auto">
        <ApplicationForm />
      </div>
    </SegmentContainer>
  )
}

export default ApplicationFormSegment
