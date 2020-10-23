import React from 'react'
import { Segment, Grid, Image, Header } from 'semantic-ui-react'

function ProjectDetails({
  img,
  title,
  desc,
  cite,
  citeName,
  cite2,
  cite2Name,
}) {
  return (
    <Segment>
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
          <Grid.Column width={6}>{<Image src={'images/' + img} />}</Grid.Column>
          <Grid.Column width={10}>
            <Header as="h3" textAlign="center">
              {title}
            </Header>
            <p>{desc}</p>
            <q>{cite}</q>
            <Header as="h5" textAlign="right">
              {citeName}
            </Header>

            {cite2 && (
              <>
                <q>{cite2}</q>
                <Header as="h5" textAlign="right">
                  {cite2Name}
                </Header>
              </>
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  )
}

export default ProjectDetails
