import {Container, Header, Icon, Segment} from "semantic-ui-react";
import React from "react";
import {Grid} from "semantic-ui-react/dist/commonjs/collections/Grid/Grid";

const Footer = () => (
    <Segment inverted vertical style={{padding: "3em 0em"}}>
        <Container >
            <Header as='h3' textAlign='center' inverted>
                Build with <Icon name='heart'/>in the center of Zurich
            </Header>
            <Header as='h6' textAlign='center' inverted style={{marginTop:'0.5em', marginBlockEnd:0}}>
                For this website, we used React, our favourite front end framework, together with GatsbyJS.
            </Header>
            <Header as='h6' textAlign='center' inverted style={{marginTop:'0.5em'}}>
                Do you want to have a look at the code? Head over to <a href="https://github.com/uzh-bf/joinus"><Icon name='github' />GitHub</a> where we also host our Klicker project.
            </Header>
        </Container>
    </Segment>);

export default Footer;