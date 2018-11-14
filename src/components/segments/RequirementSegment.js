import {Divider, Header, Segment, Grid, List} from "semantic-ui-react";
import React from "react";

const RequirementSegment = ({backgroundColor}) => (
    <Segment style={{background: backgroundColor,}} vertical>
        <Grid celled='internally' columns='equal' stackable>
            <Grid.Row>
                <Header as='h2' textAlign='center' style={{fontSize: "2.5em", width: "100%"}}>
                    Was du mitbringen sollst:
                </Header>
            </Grid.Row>
            <Grid celled='internally'>
                <Grid.Row centered style={{width: "100%"}}>
                    <Grid.Column width={6}>
                        <Header as='h3' textAlign='center' style={{fontSize: "2em", width: "100%"}}>
                            Allgemein
                        </Header>
                        <List as='ul'>
                            <List.Item as='li'>Du studierst etwa im 3. Semester (Informatik oder
                                Wirtschaftsinformatik)</List.Item>
                            <List.Item as='li'>Teamfähigkeit</List.Item>
                            <List.Item as='li'>Eigenständiges Arbeiten</List.Item>
                        </List>
                        <Header as='h3' textAlign='center' style={{fontSize: "1.5em", width: "100%"}}>
                            Fakultativ
                        </Header>
                        <List as='ul'>
                            <List.Item as='li'>Interesse am Finanzplatz Schweiz</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={1}/>
                    <Grid.Column width={6}>
                        <Header as='h3' textAlign='center' style={{fontSize: "2em", width: "100%"}}>
                            Informatik
                        </Header>
                        <List as='ul'>
                            <List.Item as='li'>Du bist interessiert an den neusten Technologien</List.Item>
                            <List.Item as='li'>Du kannst dich schnell einarbeiten in neue Programmiersprachen und
                                Frameworks</List.Item>
                        </List>
                        <Header as='h3' textAlign='center' style={{fontSize: "1.5em", width: "100%"}}>
                            Fakultativ
                        </Header>
                        <List as='ul'>
                            <List.Item as='li'>Erfahrung im Webdevelopment</List.Item>
                        </List>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Grid>
    </Segment>
);

export default RequirementSegment;