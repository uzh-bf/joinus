import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import styles from './Position.module.scss'

interface Props {
  title: string
  subtitle: string
  children: React.ReactNode
}

function Position({ title, subtitle, children }: Props): React.ReactElement {
  return (
    <Container>
      <Header as="h3">{title}</Header>
      <p className={styles.person}>{subtitle}</p>
      <p>{children}</p>
    </Container>
  )
}

export default Position
