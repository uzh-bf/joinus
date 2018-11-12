/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
import {Container, Header} from "semantic-ui-react";
import PropTypes from "prop-types";
import React from "react";

const HomepageHeading = ({mobile}) => (
    <Container text>
        <Header
            as='h1'
            content='Dein nächster Job?'
            inverted
            style={{
                fontSize: mobile ? '2em' : '4em',
                fontWeight: 'normal',
                marginBottom: 0,
                marginTop: mobile ? '1.5em' : '3em',
            }}
        />
        <Header
            as='h2'
            content='Do whatever you want when you want to.'
            inverted
            style={{
                fontSize: mobile ? '1.5em' : '1.7em',
                fontWeight: 'normal',
                marginTop: mobile ? '0.5em' : '1.5em',
            }}
        />
        {/*<Image />*/}
        {/*<div style={{size:"100%", "background-image":"url(" + { Background } + ")"}}>
            <h1>lol</h1>
        </div>*/}
        {/*<img width={"100%"} align="left" src={Background}></img>
        <div style={{backgroundImage: "url(" + { Background } + ")"}}></div>*/}
    </Container>
)

HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
}

export default HomepageHeading