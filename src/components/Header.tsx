import animateScrollTo from 'animated-scroll-to'
import React from 'react'
import { Container, Header as SemanticHeader } from 'semantic-ui-react'

import styles from './Header.module.scss'
import ScrollDown from './ScrollDown'

function Header() {
  return (
    <div id="top" className={styles.container}>
      <Container text id={styles.content}>
        <SemanticHeader
          as="h1"
          content="Dein neuer Job?"
          inverted
          id={styles.title}
        />
        <SemanticHeader
          as="h2"
          content="Das Institut für Banking und Finance sucht Informatiker*innen! Finde heraus, was es so speziell macht."
          inverted
          id={styles.subtitle}
        />
        <ScrollDown inverted scrollTo="#citations" />
      </Container>
    </div>
  )
}
export default Header
