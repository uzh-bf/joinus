import React from 'react'
import { Button, Card, Label } from 'semantic-ui-react'

interface Props {
  isActive: boolean
  id: string
  title: string
  subtitle: string
  tags: string[]
  handleShowProject: (projectKey: string) => void
}

function ProjectCard({
  isActive,
  id,
  title,
  subtitle,
  tags,
  handleShowProject,
}: Props) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Description>{subtitle}</Card.Description>
      </Card.Content>

      <Card.Content extra>
        <Label.Group>
          {tags?.map((tag) => (
            <Label key={tag}>{tag}</Label>
          ))}
        </Label.Group>
      </Card.Content>

      <Card.Content extra>
        <Button
          disabled={isActive}
          fluid
          onClick={() => handleShowProject(id)}
          color={isActive ? 'blue' : undefined}
        >
          Details
        </Button>
      </Card.Content>
    </Card>
  )
}

export default ProjectCard
