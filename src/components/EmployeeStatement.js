/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
import {Card, Container, Header, Image} from "semantic-ui-react";
import PropTypes from "prop-types";
import React, {Component} from "react";
import {Grid} from "semantic-ui-react/dist/commonjs/collections/Grid/Grid";

class Team extends Component {

    render() {
        return (
            <Container style={{marginTop:70}}>
                {/*<Message color='white'>*/}
                <Header as='h3' style={{fontSize: '2em'}}>
                    Am Insti zu arbeiten ist sooo toll.
                </Header>
                <p style={{fontSize: '1.33em'}}>
                    Ich lerne jeden Tag Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                    risus lectus, aliquet a pellentesque ac, eleifend quis magna. Aliquam vitae felis augue.
                    Cras vitae velit ex. Integer at convallis felis. Donec est mauris, accumsan ut sollicitudin
                    ac, efficitur non sapien. Suspendisse a lorem erat. Integer a feugiat metus.
                </p>
                <p style={{fontSize: '1.33em'}}>
                    <i>- Manuel Keller, Senior Software Engineer</i>
                </p>
                {/*</Message>*/}
            </Container>
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