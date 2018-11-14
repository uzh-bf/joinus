/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
import { Header, Image, Grid, Container} from "semantic-ui-react";
import React from "react";

const TeamColumn = ({teamName, imageSrc, leaderName, leaderPosition, teamDescription}) => (
    <Grid.Column>
        <Header as='h3' style={{fontSize: '2em', textAlign:'center'}}>
            {teamName}
        </Header>
        <Container style={{margin:'auto', width: '90%'}}>
            <Image src={imageSrc} className={'leaderPhoto'}/>
            <Header as='h5'>
                {leaderName}
            </Header>
            <Header as='h6' style={{marginTop: -10, marginBottom:10, minHeight:28}}>
                {leaderPosition}
            </Header>
            <p style={{fontSize:'1.5em',}}>
                {teamDescription}
            </p>

        </Container>

    </Grid.Column>
);

export default TeamColumn;