/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
import {Card, Header, Image, Grid} from "semantic-ui-react";
import React from "react";

const TeamColumn = ({teamName, imageSrc, leaderName, leaderPosition, teamDescription}) => (
    <Grid.Column>
        <Header as='h3' style={{fontSize: '2em', textAlign:'center'}}>
            {teamName}
        </Header>
        <Card>
            <Image src={imageSrc}/>
            <Card.Content>
                <Card.Header>{leaderName}</Card.Header>
                <Card.Meta>{leaderPosition}</Card.Meta>
                <Card.Description>{teamDescription}</Card.Description>
            </Card.Content>
        </Card>
    </Grid.Column>
);

export default TeamColumn;