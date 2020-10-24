import { Grid, Header, Transition, Image, Card } from 'semantic-ui-react'
import React, { useState } from 'react'

import styles from './ProjectSegment.module.scss'
import { projects } from '../../data'
import SegmentContainer from '../SegmentContainer'
import ProjectCard from './ProjectCard'
import ProjectDetails from './ProjectDetails'

export interface Props {
  backgroundColor: string
}

function ProjectSegment({ backgroundColor }: Props) {
  const [showProject, setShowProject] = useState<string>()

  return (
    <SegmentContainer
      id="projects"
      title="Hilf uns bei diesen oder ähnlichen Projekten"
      nextUp="#technologies"
      backgroundColor={backgroundColor}
    >
      <Grid.Row centered>
        <Card.Group centered>
          {Object.entries(projects)
            .slice(0, 3)
            .map(([projectKey, projectData]) => (
              <ProjectCard
                id={projectKey}
                title={projectData.title}
                subtitle={projectData.subtitle}
                tags={projectData.tags}
                handleShowProject={setShowProject}
              />
            ))}
        </Card.Group>
      </Grid.Row>

      <Transition
        visible={!!showProject}
        animation="slide down"
        duration={1000}
      >
        <ProjectDetails {...projects[showProject]} />
      </Transition>

      <Grid.Row centered>
        <Card.Group centered>
          {Object.entries(projects)
            .slice(3)
            .map(([projectKey, projectData]) => (
              <ProjectCard
                id={projectKey}
                title={projectData.title}
                subtitle={projectData.subtitle}
                tags={projectData.tags}
                handleShowProject={setShowProject}
              />
            ))}
        </Card.Group>
      </Grid.Row>
    </SegmentContainer>
  )
}

export default ProjectSegment
