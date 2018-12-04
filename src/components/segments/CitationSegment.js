import {Container, Header, Image, Segment, Grid} from "semantic-ui-react";
import Manu from "../../images/manuel.jpg";
import Pascal from "../../images/pascal.jpg";
import React from "react";

let pstyle = {fontSize: "1.2em"};
let pistyle = {fontSize: "1.25em"};
let centerAlignColumn = {marginTop: 'auto', marginBottom: 'auto'};

const CitationSegment = ({backgroundColor}) => {

    let imgstyle = {marginBottom: 0, maxHeight: 'auto', objectFit: 'cover', margin: 'auto'};

    return(
        <Segment style={{background: backgroundColor,}} vertical id="citations">
            <Grid container stackable verticalAlign='middle' reversed="mobile">
                <Grid.Column width={4} />
                <Grid.Column width={7} style={centerAlignColumn}>
                    <Container>
                        <Header as='h3'>
                            Flexibilität ist Trumpf
                        </Header>
                        <p style={pstyle}>
                            Mir gefällt, dass ich sehr flexible Arbeitszeiten habe.
                            Vor Prüfungen kann man problemlos reduzieren oder aussetzen;
                            während den Semesterferien wiederum sein Budget aufbessern.
                        </p>
                        <p style={pistyle}>
                            <i>- Manuel Keller, studiert Information Systems</i>
                        </p>
                    </Container>

                </Grid.Column>
                <Grid.Column width={5}  style={centerAlignColumn}>
                    <div style={{maxWidth:'55vw', margin: 'auto'}}>
                        <Image bordered rounded size='large' src={Manu} style={imgstyle}/>
                    </div>
                </Grid.Column>

            </Grid>
            <Grid container stackable verticalAlign='middle'>
                <Grid.Column width={1} />
                <Grid.Column width={5}  style={centerAlignColumn}>
                    <div style={{maxWidth:'55vw', margin: 'auto'}}>
                        <Image bordered rounded size='large' src={Pascal} style={imgstyle}/>
                    </div>
                </Grid.Column>
                <Grid.Column width={7} style={centerAlignColumn}>
                    <Container>
                        <Header as='h3'>
                            Abwechslung und Eigenverantwortung
                        </Header>
                        <p style={pstyle}>
                            Mir gefällt, dass ich in meiner Arbeit am Institut selbst die Verantwortung für meine Projekte trage.
                            Dadurch kann ich selber entscheiden, welche Technologien ich einsetzen will und lerne viel dabei.
                        </p>
                        <p style={pistyle}>
                            <i>- Pascal Zehnder, studiert Information Systems</i>
                        </p>
                    </Container>
                </Grid.Column>
                <Grid.Column width={4} />
            </Grid>
        </Segment>
    );
};

export default CitationSegment;
