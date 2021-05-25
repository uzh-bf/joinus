import React from 'react'
import { Container, Header, Label, Segment } from 'semantic-ui-react'
import styles from './Position.module.scss'

interface Props {
  title: string
  subtitle: string
  children: React.ReactNode
  isOpen?: string
}

function Position({
  title,
  subtitle,
  children,
  isOpen,
}: Props): React.ReactElement {
  return (
    <Container>
      <Header as="h3">{title}</Header>
      <p className={styles.person}>{subtitle}</p>
      <p>{children}</p>
      {isOpen && (
        <Segment raised>
          <Label ribbon color="red">
            Offen
          </Label>
          <span>{isOpen}</span>
        </Segment>
      )}
    </Container>
  )
}

Position.defaultProps = {
  isOpen: undefined,
}

export default Position
