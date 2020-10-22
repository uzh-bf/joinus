import {
  Grid,
  Header,
  Segment,
  Button,
  Transition,
  Image,
} from 'semantic-ui-react'
import React, { useState } from 'react'
import animateScrollTo from 'animated-scroll-to'

import styles from './ProjectSegment.module.scss'
import { projects } from '../fixtures'

interface Props {
  backgroundColor: string
}

// TODO: big cleanup
function ProjectSegment({ backgroundColor }: Props) {
  const [showProject, setShowProject] = useState(null)

  return (
    <Segment style={{ background: backgroundColor }} vertical>
      <Header as="h2" textAlign="center" size="huge">
        Hilf uns bei diesen oder ähnlichen Projekten:
      </Header>

      <Grid container celled stackable columns="equal">
        <Grid.Row centered columns="equal">
          <Grid.Column>
            <Header as="h3" textAlign="center">
              Klicker
            </Header>
            <p>
              Open-Source Abstimmungs-Tool für Interaktivität in den
              Vorlesungen.
            </p>
            <Button onClick={() => setShowProject('klicker')} floated="right">
              Details
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Header as="h3" textAlign="center">
              Redesign Webseite
            </Header>
            <p>
              Technische Aktualisierung der Institutswebseite mit Wechsel des
              CMS
            </p>
            <Button onClick={() => setShowProject('redesign')} floated="right">
              Details
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Header as="h3" textAlign="center">
              Dynamics CRM
            </Header>
            <p>
              Customizing und Automatisiimport
              '../../semantic/dist/semantic.min.css' import
              '../layout.css'rungen implementieren
            </p>
            <Button onClick={() => setShowProject('dynamics')} floated="right">
              Details
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Transition visible={showProject} animation="slide down" duration={300}>
        <div>
          <Grid
            container
            stackable
            verticalAlign="middle"
            columns="equal"
            id="projectDescription"
          >
            <Grid.Row
              centered
              inverted
              style={{ maxWidth: '1100px', margin: 'auto' }}
            >
              <Grid.Column width={6}>
                {showProject && (
                  <Image src={'images/' + projects[showProject].img} />
                )}
              </Grid.Column>
              <Grid.Column width={10}>
                {showProject && [
                  <Header as="h3" textAlign="center">
                    {projects[showProject].title}
                  </Header>,
                  <p>{projects[showProject].desc}</p>,
                  <br />,
                  <i>
                    <p>{projects[showProject].cite}</p>
                  </i>,
                  <Header as="h5" textAlign="right">
                    - {projects[showProject].citeName}
                  </Header>,

                  projects[showProject].cite2 && [
                    <br />,
                    <i>
                      <p>{projects[showProject].cite2}</p>
                    </i>,
                    <Header as="h5" textAlign="right">
                      - {projects[showProject].cite2Name}
                    </Header>,
                  ],
                ]}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Transition>
      <Grid container celled stackable columns="equal">
        <Grid.Row centered columns="equal">
          <Grid.Column>
            <Header as="h3" textAlign="center">
              Interne Tools
            </Header>
            <p>Mitarbeiteradministration und Management Support</p>
            <Button onClick={() => setShowProject('tools')} floated="right">
              Details
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Header as="h3" textAlign="center">
              Lehrveranstaltungen
            </Header>
            <p>
              Digitale Lerninhalte in Form von eSkripten, Aufgaben (IAs),
              eAssessment und mehr
            </p>
            <Button onClick={() => setShowProject('lehre')} floated="right">
              Details
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Header as="h3" textAlign="center">
              Jobeye
            </Header>
            <p>Plattform für Studenten auf der Suche nach Teilzeitjobs</p>
            <Button onClick={() => setShowProject('jobeye')} floated="right">
              Details
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default ProjectSegment
