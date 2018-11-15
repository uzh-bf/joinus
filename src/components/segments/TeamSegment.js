import {Header, Segment, Grid, Divider} from "semantic-ui-react";
import TeamColumn from "../TeamColumn";
import Rene from "../../images/rene.jpg";
import Lisa from "../../images/lisa.jpg";
import Beni from "../../images/beni.jpg";
import React from "react";

const TeamSegment = ({headerText, backgroundColor}) => (
    <Segment style={{padding: "4em 0 5em 0", background: backgroundColor, }} vertical id="team">
        <Grid container stackable verticalAlign='top'>
            <Grid.Row>
                <Header as='h2' textAlign='center' style={{fontSize: "2.5em", width: "100%"}}>
                    {headerText}
                </Header>
            </Grid.Row>
            <Grid.Row columns={3} divided>
                <TeamColumn
                    teamName={"Administration"}
                    imageSrc={Rene}
                    leaderName={"René Hegglin"}
                    leaderPosition={"Geschäftsführer, Leitung Administration"}
                    teamDescription={"« Informatiker in meinem Team helfen mit, die Management-Prozesse effizienter zu " +
                    "gestalten und modernisieren die Institutswebseite mit neuen Tools und Methoden. »"}
                />
                <TeamColumn
                    teamName={"Teaching Center"}
                    imageSrc={Lisa}
                    leaderName={"Elisabeth Liechti"}
                    leaderPosition={"Leitung Teaching Center IBF"}
                    teamDescription={"« Das Teaching Center ist für den Lehrbetrieb des Instituts zuständig. " +
                    "Wir müssen die Kurse betreuen, Projekte wie Klicker und Jobeye weiterentwickeln und die Dozenten mit interaktiven " +
                    "Möglichkeiten unterstützen. »"}
                />
                <TeamColumn
                    teamName={"Weiterbildung"}
                    imageSrc={Beni}
                    leaderName={"Benjamin Wilding"}
                    leaderPosition={"Geschäftsführer, Leitung Lehre & Weiterbildung"}
                    teamDescription={"« Als Weiterbildungsanbieter brauchen wir kreative Informatiker, die die User " +
                    "Experience mit innovativen Tools verbessern und die Kundenverwaltung mit " +
                    "Automatisierungen effizienter gestalten. »"}
                />
            </Grid.Row>
        </Grid>
    </Segment>
);

export default TeamSegment;