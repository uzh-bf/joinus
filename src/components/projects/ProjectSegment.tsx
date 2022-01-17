import React, { useState } from 'react'
import { Button } from 'semantic-ui-react'
import { projects } from '../../data'
import SegmentContainer from '../SegmentContainer'
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
      nextUp="#positions"
      backgroundColor={backgroundColor}
    >
      <div className="flex flex-col w-full gap-4">
        {Object.entries(projects).map(([projectKey, projectData]) => (
          <div
            key={projectKey}
            className="px-3 py-2 border border-gray-200 border-solid shadow cursor-pointer rounded-xl md:p-4 md:px-6"
            onClick={() => setShowProject(projectKey)}
          >
            <div className="flex flex-col items-start justify-between md:flex-row">
              <div>
                <h4 className="!m-0 text-xl font-normal md:text-3xl font-thesans-bold">
                  {projectData.title}
                </h4>
                <div className="mt-2 text-lg font-thesans-plain">
                  {projectData.subtitle}
                </div>
                <div className="hidden mt-2 md:block">
                  <Button
                    basic
                    disabled={projectKey === showProject}
                    onClick={() => setShowProject(projectKey)}
                  >
                    Details
                  </Button>
                </div>
              </div>
              <div className="flex flex-row gap-2">
                {projectData.tags.map((tag) => (
                  <div
                    key={tag}
                    className="px-2 py-1 mt-2 text-gray-600 bg-gray-200 rounded-lg md:mt-0"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
            {projectKey === showProject && (
              <div className="pt-4 mt-4 border-0 border-t border-gray-200 border-solid">
                <ProjectDetails {...projects[showProject]} />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* <Grid.Row centered>
        <Card.Group centered>
          {Object.entries(projects)
            .slice(0, 3)
            .map(([projectKey, projectData]) => (
              <ProjectCard
                isActive={projectKey === showProject}
                key={projectKey}
                id={projectKey}
                title={projectData.title}
                subtitle={projectData.subtitle}
                tags={projectData.tags}
                handleShowProject={setShowProject}
              />
            ))}
        </Card.Group>
      </Grid.Row>

      <Grid.Row centered>
        <Card.Group centered>
          {Object.entries(projects)
            .slice(3)
            .map(([projectKey, projectData]) => (
              <ProjectCard
                isActive={projectKey === showProject}
                key={projectKey}
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
      </Transition> */}
    </SegmentContainer>
  )
}

export default ProjectSegment
