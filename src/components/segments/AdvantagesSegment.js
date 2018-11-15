import {Grid, Header, Segment} from "semantic-ui-react";
import React from "react";
import AdvantageColumn from "../AdvantageColumn";

const AdvantagesSegment = ({backgroundColor}) => (
    <Segment style={{background: backgroundColor,}} vertical id="advantages">
        <Grid container stackable verticalAlign='top'>
            <Grid.Row>
                <Header as='h2' textAlign='center' style={{fontSize: "2.5em", width: "100%"}}>
                    Was wir dir bieten:
                </Header>
            </Grid.Row>
            <Grid.Row columns={4}>
                <AdvantageColumn
                    iconName='code branch'
                    iconColor='black'
                    advantageTitle='#code'
                    advantageText='Wende deine Programmierkenntnisse in einem praktischen Umfeld an und sammle Erfahrung für spätere Berufe.'
                />
                <AdvantageColumn
                    iconName='dollar sign'
                    iconColor='green'
                    advantageTitle='#cash'
                    advantageText='Bei uns verdienst du mehr als bei Promotion-Jobs oder an der Kasse im Supermarkt.'
                />
                <AdvantageColumn
                    iconName='clock outline'
                    iconColor='brown'
                    advantageTitle='#flexibility'
                    advantageText='Dein Studium geht vor! Dementsprechend kannst du bei uns auch deine Arbeitszeiten so anpassen, dass dir die Arbeit nicht in die Quere kommt.'
                />
                <AdvantageColumn
                    iconName='users'
                    iconColor='orange'
                    advantageTitle='#team'
                    advantageText='
                        Sei Teil von einem ambitionierten Team von Studenten. Neben regelmässigen Events wie z.B. einem Schlitteltag in Engelberg, grillen wir auch gerne oder besetzen das BQM.'
                />
            </Grid.Row>
        </Grid>
    </Segment>
);

export default AdvantagesSegment;