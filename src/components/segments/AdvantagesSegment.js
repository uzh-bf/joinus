import {Header, Icon, Segment, Grid} from "semantic-ui-react";
import React from "react";

const AdvantagesSegment = () => (
    <Segment style={{padding: "8em 0em"}} vertical>
        <Grid container stackable verticalAlign='top'>
            <Grid.Row>
                <Header as='h2' textAlign='center' style={{fontSize: "2.5em", width: "100%"}}>
                    Was wir dir bieten:
                </Header>
            </Grid.Row>
            <Grid.Row >
                <Grid.Column width={4}>
                    {/*TODO: center without ugly hacking AND vertically align to the top*/}
                    <div style={{margin: "0 auto", width: "120px"}}>
                        <Icon circular inverted size='huge' name='code branch'/>
                    </div>
                    <Header as='h3' textAlign='center' style={{fontSize: "2em"}}>
                        #code
                    </Header>
                    <p style={{fontSize: "1.33em"}}>
                        Wende deine Programmierkenntnisse in einem praktischen Umfeld an und sammle Erfahrung für
                        spätere Berufe.
                    </p>
                </Grid.Column>
                <Grid.Column width={4}>
                    <div style={{margin: "0 auto", width: "120px"}}>
                        <Icon circular inverted color='green' size='huge' name='dollar sign'/>
                    </div>
                    <Header as='h3' textAlign='center' style={{fontSize: "2em"}}>
                        #cash
                    </Header>
                    <p style={{fontSize: "1.33em"}}>
                        Bei uns verdienst du mehr als bei Promotion-Jobs oder an der Kasse im Supermarkt.
                    </p>
                </Grid.Column>
                <Grid.Column width={4}>
                    {/*TODO: center without ugly hacking*/}
                    <div style={{margin: "0 auto", width: "120px"}}>
                        <Icon circular inverted color='brown' size='huge' name='clock outline'/>
                    </div>
                    <Header as='h3' textAlign='center' style={{fontSize: "2em"}}>
                        #cflexibility
                    </Header>
                    <p style={{fontSize: "1.33em"}}>
                        Dein Studium geht vor! Dementsprechend kannst du bei uns auch deine Arbeitszeiten so
                        anpassen, dass dir die Arbeit nicht in die Quere kommt.
                    </p>
                </Grid.Column>
                <Grid.Column width={4}>
                    {/*TODO: center without ugly hacking*/}
                    <div style={{margin: "0 auto", width: "120px"}}>
                        <Icon circular inverted color='orange' size='huge' name='users'/>
                    </div>
                    <Header as='h3' textAlign='center' style={{fontSize: "2em"}}>
                        #crew
                    </Header>
                    <p style={{fontSize: "1.33em"}}>
                        Sei Teil von einem ambitionierten Team von Studenten. Neben regelmässigen Events wie z.B.
                        einem Schlitteltag in Engelberg, grillen wir auch gerne oder besetzen das BQM.
                    </p>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Segment>
);

export default AdvantagesSegment;