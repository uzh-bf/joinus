import { Container, Header } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import React from 'react'

function Team() {
  return (
    <Container style={{ marginTop: 70 }}>
      {/*<Message color='white'>*/}
      <Header as="h3" style={{ fontSize: '2em' }}>
        Am Insti zu arbeiten ist sooo toll.
      </Header>
      <p style={{ fontSize: '1.33em' }}>
        Ich lerne jeden Tag Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pellentesque risus lectus, aliquet a pellentesque ac, eleifend
        quis magna. Aliquam vitae felis augue. Cras vitae velit ex. Integer at
        convallis felis. Donec est mauris, accumsan ut sollicitudin ac,
        efficitur non sapien. Suspendisse a lorem erat. Integer a feugiat metus.
      </p>
      <p style={{ fontSize: '1.33em' }}>
        <i>- Manuel Keller, Senior Software Engineer</i>
      </p>
      {/*</Message>*/}
    </Container>
  )
}

export default Team
