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
            content='function job(yourApplication)'
            inverted
            style={{
                fontSize: mobile ? '3em' : '4em',
                fontWeight: 'normal',
                marginBottom: 0,
                padding: '25px',
                borderRadius: '15px',
                marginTop: mobile ? '2.5em' : '2em',
                backgroundColor: "rgba(0,0,0,0.8)",
            }}
        />
        <Header
            as='h2'
            content='Do whatever you want when you want to.'
            inverted
            style={{
                fontSize: mobile ? '1.5em' : '1.7em',
                fontWeight: 'normal',
                padding: '15px',
                borderRadius: '15px',
                backgroundColor: "rgba(0,0,0,0.8)",
            }}
        />
    </Container>
);

HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
};

export default HomepageHeading
