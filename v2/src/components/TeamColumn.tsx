import React from 'react'
import { Header, Image, Grid, Container } from 'semantic-ui-react'

interface Props {
  teamName: string
  imageSrc: string
  leaderName: string
  leaderPosition: string
  teamDescription: string
}

function TeamColumn({
  teamName,
  imageSrc,
  leaderName,
  leaderPosition,
  teamDescription,
}: Props) {
  return (
    <Grid.Column>
      <Header as="h3" style={{ fontSize: '2em', textAlign: 'center' }}>
        {teamName}
      </Header>
      <Container style={{ margin: 'auto', width: '90%' }}>
        <Image src={imageSrc} className={'leaderPhoto'} />
        <Header as="h5">{leaderName}</Header>
        <Header
          as="h6"
          style={{ marginTop: -10, marginBottom: 10, minHeight: 28 }}
        >
          {leaderPosition}
        </Header>
        <p style={{ fontSize: '1.5em' }}>{teamDescription}</p>
      </Container>
    </Grid.Column>
  )
}

export default TeamColumn
