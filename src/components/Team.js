/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
import {Card, Header, Image} from "semantic-ui-react";
import PropTypes from "prop-types";
import React, {Component} from "react";

class Team extends Component {

    render() {
        return (
            <div>
                <Header as='h3' style={{fontSize: '2em'}}>
                    {this.props.teamName}
                </Header>
                <Card>
                    <Image src={this.props.imageSrc}/>
                    <Card.Content>
                        <Card.Header>{this.props.leaderName}</Card.Header>
                        <Card.Meta>{this.props.leaderPosition}</Card.Meta>
                        <Card.Description>{this.props.teamDescription}</Card.Description>
                    </Card.Content>
                </Card>
            </div>
        )
    }
}

Team.propTypes = {
    teamName: PropTypes.string,
    imageSrc: PropTypes.string,
    leaderName: PropTypes.string,
    leaderPosition: PropTypes.string,
    teamDescription: PropTypes.string,
}

export default Team;