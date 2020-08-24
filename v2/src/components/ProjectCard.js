import React from 'react'
import { Card, Icon, Button } from 'semantic-ui-react'

function Btn(up) {
  return (
    <Button icon attached="bottom" content="Click">
      <Icon name={up ? 'caret down' : 'caret up'} />
    </Button>
  )
}

function ProjectCard({
  projectTitle,
  projectDescription,
  projectSubtitle,
  upper,
}) {
  return (
    <Card style={{ width: '32%' }}>
      {/*TODO schönere lösung finden (32%)*/}
      {upper ? '' : <Btn up={upper} />}
      <Card.Content attached="top">
        <Card.Header>{projectTitle}</Card.Header>
        <Card.Meta>{projectSubtitle}</Card.Meta>
        <Card.Description>{projectDescription}</Card.Description>
      </Card.Content>
      {upper ? <Btn up={upper} /> : ''}
    </Card>
  )
}

export default ProjectCard
