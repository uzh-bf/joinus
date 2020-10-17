import React from 'react'
import { Header, Image, Grid, Container } from 'semantic-ui-react'

import styles from './TeamColumn.module.scss'

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
      <Header as="h3" className={styles.teamName}>
        {teamName}
      </Header>

      <Container className={styles.teamInfo}>
        <Image src={imageSrc} className={styles.leaderPhoto} />
        <Header as="h5">{leaderName}</Header>
        <Header as="h6" className={styles.leaderPosition}>
          {leaderPosition}
        </Header>
        <p className={styles.teamDescription}>{teamDescription}</p>
      </Container>
    </Grid.Column>
  )
}

export default TeamColumn
