/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
import {Container, Header, Button} from "semantic-ui-react";
import PropTypes from "prop-types";
import React from "react";
import animateScrollTo from 'animated-scroll-to';

const HomepageHeading = ({mobile}) => (
    <Container text style={{position:'absolute', top: 0, left: 0, right: 0, height: mobile ?'85vh' : '100vh'}}>
        <Header
            as='h1'
            content='Dein neuer Job?'
            inverted
            style={{
                fontSize: mobile ? '3em' : '4em',
                fontWeight: 'normal',
                marginBottom: 0,
                padding: '25px',
                borderRadius: '15px',
                marginTop: !mobile ? '2.5em' : '1em',
                backgroundColor: "rgba(0, 2, 62,0.8)",
            }}
        />
        <Header
            as='h2'
            content='Das Institut für Banking und Finance sucht Informatiker! Finde heraus, was es so speziell macht:'
            inverted
            style={{
                fontSize: mobile ? '1.5em' : '1.7em',
                fontWeight: 'normal',
                padding: '15px',
                borderRadius: '15px',
                backgroundColor: "rgba(0, 2, 62,0.8)",
            }}
        />

        {
            //!mobile &&
            <a href="#" onClick={() => animateScrollTo((document.querySelector('#citations')))}>
                <div className="downArrow bounce">
                    <img width="90" height="50" alt=""
                         src="data:image/png;base64,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
"/>
                </div>
            </a>
        }

    </Container>
);

HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
};

export default HomepageHeading
