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
                <Grid.Column width={4} />
                <Grid.Column width={7}>
                    <Container style={{marginTop: 20}}>
                        {/*<Message color='white'>*/}
                        <Header as='h3'>
                            Flexibilität ist Trumpf
                        </Header>
                        <p style={{fontSize: "1.33em"}}>
                            Mir gefällt, dass ich sehr flexible Arbeitszeiten habe.
                            Vor Prüfungen kann man problemlos reduzieren oder aussetzen;
                            während den Semesterferien wiederum sein Budget aufbessern.
                        </p>
                        <p style={{fontSize: "1.33em"}}>
                            <i>- Manuel Keller, studiert Wirtschaftsinformatik</i>
                        </p>
                        {/*</Message>*/}
                    </Container>

                </Grid.Column>
                <Grid.Column width={5}>
                    <Image bordered rounded size='large' src={Manu}/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row/>
            <Grid.Row>
                <Grid.Column width={1} />
                <Grid.Column width={5}>
                    <Image bordered rounded size='large' src={Pascal}/>
                </Grid.Column>
                <Grid.Column width={7}>
                    <Container style={{marginTop: 20}}>
                        <Header as='h3'>
                            Abwechslung und Eigenverantwortung
                        </Header>
                        <p style={{fontSize: "1.33em"}}>
                            Mir gefällt, dass ich in meiner Arbeit am Institut selbst die Verantwortung für meine Projekte trage.
                            Dadurch kann ich selber entscheiden, welche Technologien ich einsetzen will und lerne viel dabei.
                        </p>
                        <p style={{fontSize: "1.33em"}}>
                            <i>- Pascal Zehnder, studiert Data Science</i>
                        </p>
                    </Container>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>
);

export default CitationSegment;