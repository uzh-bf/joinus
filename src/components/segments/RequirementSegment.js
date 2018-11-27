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
                    must={['Bereitschaft, dich mit den eingesetzten Technologien vertieft zu befassen',
                        'Fähigkeit, sich neue Programmierkenntnisse schnell anzueignen',
                        'Kreative und effiziente Problemlösung',
                        'Fähigkeit, Architektur und Design möglichst zukunftssicher zu entwerfen']}
                    should={['Erfahrung im Webdevelopment',
                             'Erfahrungen mit React, PHP, C# (Dynamics CRM)']}
                />
                <RequirementColumn
                    header='Allgemein'
                    must={['Du studierst etwa im 3. Semester Informatik, Data Science oder Wirtschaftsinformatik',
                        'Eigenständiges und engagiertes Arbeiten',
                        'Teamfähigkeit',
                        'Möglichkeit, mit einem Pensum von 20-60% zu arbeiten, mehr auf Anfrage (flexibel mehr oder weniger während Ferien oder Prüfungen)']}
                    should={['erste Projekterfahrungen',
                        'Gute Englischkentnisse, weitere Sprachen von Vorteil']}
                />
            </Grid.Row>
        </Grid>
    </Segment>
);

export default RequirementSegment;