import React from 'react'
import { Container, Header, Icon, Segment } from 'semantic-ui-react'

import styles from './Footer.module.scss'

function Footer() {
  return (
    <Segment inverted vertical id={styles.container}>
      <Container>
        <Header as="h3" textAlign="center" inverted>
          Built with <Icon name="heart" />
          in the center of Zurich.
        </Header>

        <Header as="h6" textAlign="center" inverted>
          Do you want to have a look at the code? Head over to{' '}
          <a href="https://github.com/uzh-bf/joinus">
            <Icon name="github" />
            GitHub
          </a>{' '}
          , where we also host the KlickerUZH and some of our other open-source
          projects.
        </Header>
      </Container>
    </Segment>
  )
}

export default Footer
