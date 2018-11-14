import {Header, Segment, Grid} from "semantic-ui-react";
import React from "react";

const ProjectSegment = () => (
    <Segment vertical>
        <Grid container stackable verticalAlign='top'>
            <Grid.Row>
                <Header as='h2' textAlign='center' style={{fontSize: "2.5em", width: "100%"}}>
                    Helf uns bei diesen oder ähnlichen Projekten:
                </Header>
            </Grid.Row>
            <Grid celled='internally'>
                <Grid.Row>
                    <Grid.Column width={5}>
                        <Header as='h3' textAlign='center' style={{fontSize: "2em", width: "100%"}}>
                            Klicker
                        </Header>
                        <p> Roli developed a website that does x, using y and z. Klicker is now used by 1000000000
                            people all around the world. <a
                                href={"https://www.klicker.uzh.ch/"}>https://www.klicker.uzh.ch/</a>
                        </p>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Header as='h3' textAlign='center' style={{fontSize: "2em", width: "100%"}}>
                            Klicker
                        </Header>
                        <p> Roli developed a website that does x, using y and z. Klicker is now used by 1000000000
                            people all around the world. <a
                                href={"https://www.klicker.uzh.ch/"}>https://www.klicker.uzh.ch/</a>
                        </p>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Header as='h3' textAlign='center' style={{fontSize: "2em", width: "100%"}}>
                            Klicker
                        </Header>
                        <p> Roli developed a website that does x, using y and z. Klicker is now used by 1000000000
                            people all around the world. <a
                                href={"https://www.klicker.uzh.ch/"}>https://www.klicker.uzh.ch/</a>
                        </p>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column width={5}>
                        <Header as='h3' textAlign='center' style={{fontSize: "2em", width: "100%"}}>
                            Klicker
                        </Header>
                        <p> Roli developed a website that does x, using y and z. Klicker is now used by 1000000000
                            people all around the world. <a
                                href={"https://www.klicker.uzh.ch/"}>https://www.klicker.uzh.ch/</a>
                        </p>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Header as='h3' textAlign='center' style={{fontSize: "2em", width: "100%"}}>
                            Klicker
                        </Header>
                        <p> Roli developed a website that does x, using y and z. Klicker is now used by 1000000000
                            people all around the world. <a
                                href={"https://www.klicker.uzh.ch/"}>https://www.klicker.uzh.ch/</a>
                        </p>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Header as='h3' textAlign='center' style={{fontSize: "2em", width: "100%"}}>
                            Klicker
                        </Header>
                        <p> Roli developed a website that does x, using y and z. Klicker is now used by 1000000000
                            people all around the world. <a
                                href={"https://www.klicker.uzh.ch/"}>https://www.klicker.uzh.ch/</a>
                        </p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Grid>
    </Segment>
);

export default ProjectSegment;