import {Header, Segment, Grid, List} from "semantic-ui-react";
import React from "react";

const RequirementColumn = ({header, must, should}) => (
    <Grid.Column width={7}>
        <Header as='h2' textAlign='center'>
            {header}
        </Header>
        <List as='ul'>
            {
                must.map((item) =>
                    (
                        <List.Item as='li'>{item}</List.Item>
                    ))
            }
        </List>
        <Header as='h3' textAlign='center'>
            Worüber wir uns freuen würden
        </Header>
        <List as='ul'>
            {
                should.map((item) =>
                    (
                        <List.Item as='li'>{item}</List.Item>
                    ))
            }
        </List>
    </Grid.Column>
);

const RequirementSegment = ({backgroundColor}) => (
    <Segment style={{background: backgroundColor,}} vertical id="requirements">
        <Grid container stackable verticalAlign='top'>
            <Grid.Row>
                <Header as='h2' textAlign='center' style={{fontSize: "2.5em", width: "100%"}}>
                    Was du mitbringen solltest:
                </Header>
            </Grid.Row>
            <Grid.Row divided centered>
                <RequirementColumn
                    header='Informatik'
                    must={['Du bist interessiert an den neusten Technologien', 'Du kannst dich schnell einarbeiten in neue Programmiersprachen und Frameworks']}
                    should={['Erfahrung im Webdevelopment']}
                />
                <RequirementColumn
                    header='Allgemein'
                    must={['Du studierst etwa im 3. Semester Informatik, Data Science oder Wirtschaftsinformatik', 'Du kannst gut eigenständig arbeiten', 'Du passt gut in unser Team', 'Du willst durchschnittlich zwischen 20-60% arbeiten, mehr auf Anfrage']}
                    should={['Interesse am Finanzplatz Schweiz']}
                />
            </Grid.Row>
        </Grid>
    </Segment>
);

export default RequirementSegment;