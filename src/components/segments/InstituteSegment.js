import {Header, Image, Segment, Grid} from "semantic-ui-react";
import TeamBild from "../../images/institut.jpg";
import React from "react";

const InstituteSegment = ({backgroundColor}) => (
    <Segment style={{background: backgroundColor,}} vertical id="institute">
        <Grid container stackable verticalAlign='top'>
            <Grid.Row>
                <Header as='h2' textAlign='center' style={{fontSize: "2.5em", width: "100%"}}>
                    Unser Institut:
                </Header>
            </Grid.Row>
            <Grid.Row>
                <Image style={{width: "100%", height: "100%"}} src={TeamBild}/>
                <p style={{fontSize: "1.33em"}}>
                    Am Institut arbeiten insgesamt rund 25 studentische Mitarbeiter TODO adjust?. Diese werden von sechs
                    Festangestellten unter Kontrolle gehalten.
                </p>
            </Grid.Row>
        </Grid>
    </Segment>
);

export default InstituteSegment;