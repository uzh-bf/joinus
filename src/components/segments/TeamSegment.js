import {Header, Segment, Grid} from "semantic-ui-react";
import TeamColumn from "../TeamColumn";
import Rene from "../../images/rene.jpg";
import Lisa from "../../images/lisa.jpg";
import Beni from "../../images/beni.jpg";
import React from "react";

const TeamSegment = ({headerText}) => (
    <Segment style={{padding: "8em 0em"}} vertical>
        <Grid container stackable verticalAlign='top'>
            <Grid.Row>
                <Header as='h2' textAlign='center' style={{fontSize: "2.5em", width: "100%"}}>
                    {headerText}
                </Header>
            </Grid.Row>
            <Grid.Row columns={3}>
                <TeamColumn
                    teamName={"ATP"}
                    imageSrc={Rene}
                    leaderName={"René Hegglin"}
                    leaderPosition={"Geschäftsführer, Leitung Administration"}
                    teamDescription={"In unserem TeamColumn sind wir vorallem damit beschäftigt X sowie Y zu betreiben."}
                />
                <TeamColumn
                    teamName={"Teaching Center"}
                    imageSrc={Lisa}
                    leaderName={"Elisabeth Liechti"}
                    leaderPosition={"Leitung Teaching Center IBF"}
                    teamDescription={"In unserem TeamColumn sind wir vorallem damit beschäftigt X sowie Y zu betreiben."}
                />
                <TeamColumn
                    teamName={"Weiterbildung"}
                    imageSrc={Beni}
                    leaderName={"Benjamin Wilding"}
                    leaderPosition={"Geschäftsführer, Leitung Lehre & Weiterbildung"}
                    teamDescription={"In unserem TeamColumn sind wir vorallem damit beschäftigt X sowie Y zu betreiben."}
                />
            </Grid.Row>
        </Grid>
    </Segment>
);

export default TeamSegment;