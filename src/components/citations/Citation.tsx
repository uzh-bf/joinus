import React from 'react'
import { Container, Header } from 'semantic-ui-react'

import styles from './Citation.module.scss'

interface Props {
  title: string
  author: string
  children: React.ReactNode
}

function Citation({ title, author, children }: Props): React.ReactElement {
  return (
    <Container>
      <Header as="h3">{title}</Header>

      <blockquote className={styles.citation}>
        <p>{children}</p>
      </blockquote>

      <p className={styles.person}>{author}</p>
    </Container>
  )
}

export default Citation
