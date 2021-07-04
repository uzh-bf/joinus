import Image from 'next/image'
import React from 'react'
import { Container, Grid, Header } from 'semantic-ui-react'
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
  const ImageSrc = require(`../../../public/images/people/${imageSrc}`)
  return (
    <Grid.Column>
      <Header as="h3" textAlign="center" size="large">
        {teamName}
      </Header>

      <Container className={styles.teamInfo}>
        <div className={styles.leaderPhoto}>
          <Image src={ImageSrc} />
        </div>

        <Header textAlign="center" as="h4" size="medium">
          {leaderName}
        </Header>

        <Header
          textAlign="center"
          as="h5"
          size="medium"
          className={styles.leaderPosition}
        >
          {leaderPosition}
        </Header>

        <blockquote className={styles.teamDescription}>
          <p>{teamDescription}</p>
        </blockquote>
      </Container>
    </Grid.Column>
  )
}

export default TeamColumn
