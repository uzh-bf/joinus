import React from 'react'
import { Container, Header, Icon, Segment } from 'semantic-ui-react'

import styles from './Footer.module.scss'

function Footer() {
  return (
    <Segment inverted vertical id={styles.container}>
      <Container>
        <Header as="h3" textAlign="center" inverted id={styles.title}>
          Build with <Icon name="heart" />
          in the center of Zurich
        </Header>

        <Header
          as="h6"
          textAlign="center"
          inverted
          className={styles.marginTop}
        >
          For this website, we used React, our favourite front end framework,
          together with GatsbyJS.
        </Header>

        <Header
          as="h6"
          textAlign="center"
          inverted
          className={styles.marginTop}
        >
          Do you want to have a look at the code? Head over to{' '}
          <a href="https://github.com/uzh-bf/joinus">
            <Icon name="github" />
            GitHub
          </a>{' '}
          where we also host our Klicker project.
        </Header>
      </Container>
    </Segment>
  )
}

export default Footer
