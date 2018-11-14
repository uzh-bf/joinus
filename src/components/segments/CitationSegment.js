import {Container, Header, Image, Segment, Grid} from "semantic-ui-react";
import Manu from "../../images/manuel.jpg";
import Pascal from "../../images/pascal.jpg";
import React from "react";

const CitationSegment = ({backgroundColor}) => (
    <Segment style={{background: backgroundColor,}} vertical>
        <Grid container stackable verticalAlign='top'>
            <Grid.Row>
                <Header as='h2' textAlign='center' style={{fontSize: "2.5em", width: "100%"}}>
                    Hear what our employees have to say:
                </Header>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column width={9}>
                    <Container style={{marginTop: 70}}>
                        {/*<Message color='white'>*/}
                        <Header as='h3' style={{fontSize: "2em"}}>
                            Am Insti zu arbeiten ist sooo toll.
                        </Header>
                        <p style={{fontSize: "1.33em"}}>
                            Ich lerne jeden Tag Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Pellentesque
                            risus lectus, aliquet a pellentesque ac, eleifend quis magna. Aliquam vitae felis
                            augue.
                            Cras vitae velit ex. Integer at convallis felis. Donec est mauris, accumsan ut
                            sollicitudin
                            ac, efficitur non sapien. Suspendisse a lorem erat. Integer a feugiat metus.
                        </p>
                        <p style={{fontSize: "1.33em"}}>
                            <i>- Manuel Keller, Senior Software Engineer</i>
                        </p>
                        {/*</Message>*/}
                    </Container>

                </Grid.Column>
                <Grid.Column width={7}>
                    <Image bordered rounded size='large' src={Manu}/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row/>
            <Grid.Row>
                <Grid.Column width={7}>
                    <Image bordered size='large' src={Pascal}/>
                </Grid.Column>
                <Grid.Column width={9}>
                    <Container style={{marginTop: 60}}>
                        <Header as='h3' style={{fontSize: "2em"}}>
                            Am Insti zu arbeiten ist das beste.
                        </Header>
                        <p style={{fontSize: "1.33em"}}>
                            Ich lerne jeden Tag Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Pellentesque
                            risus lectus, aliquet a pellentesque ac, eleifend quis magna. Aliquam vitae felis
                            augue.
                            Cras vitae velit ex. Integer at convallis felis. Donec est mauris, accumsan ut
                            sollicitudin
                            ac, efficitur non sapien. Suspendisse a lorem erat. Integer a feugiat metus.
                        </p>
                        <p style={{fontSize: "1.33em"}}>
                            <i>- Roland Schläftli, Mr. Devops</i>
                        </p>
                    </Container>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>
);

export default CitationSegment;