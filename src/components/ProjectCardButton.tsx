import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

interface ProjectCardButtonProps {
  up: boolean
}

function ProjectCardButton({ up }: ProjectCardButtonProps) {
  return (
    <Button icon attached="bottom" content="Click">
      <Icon name={up ? 'caret down' : 'caret up'} />
    </Button>
  )
}

export default ProjectCardButton
