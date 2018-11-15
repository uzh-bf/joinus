import React, {Component} from "react";
import {Responsive, Segment, Visibility} from "semantic-ui-react";
import PropTypes from "prop-types";
import BurgerMenu from "./burgermenu";
import HomepageHeading from "./HomepageHeading"
import Layout from './layout'
import Footer from './Footer'
import Helmet from 'react-helmet'

import ibf_background from '../images/bfinverted_transparent.png'

const styles = {
    container: {
        backgroundImage: `url(${ibf_background})`,
        minHeight: '100vh',
        maxWidth: 800,
        padding: '1em 0em',
        backgroundColor: 'rgb(0, 2, 62)',
        backgroundPosition: 'left bottom', /*Positioning in left lower corner*/
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
    }
};

class DesktopContainer extends Component {
    state = {};

    hideFixedMenu = () => this.setState({fixed: false});
    showFixedMenu = () => this.setState({fixed: true});

    render() {
        const {children} = this.props;

        return (
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                <Visibility
                    once={false}
                    onBottomPassed={this.showFixedMenu}
                    onBottomPassedReverse={this.hideFixedMenu}
                >
                    <div style={{background: 'rgb(0, 2, 62)', position: 'relative'}}>

                        <Segment
                            inverted
                            textAlign='center'
                            vertical
                            style={styles.container}
                        >
                            <p>test</p>
                        </Segment>
                        <HomepageHeading />


                    </div>


                </Visibility>

                {children}

                <Footer/>
            </Responsive>
        )
    }
}

DesktopContainer.propTypes = {
    children: PropTypes.node,
};

class MobileContainer extends Component {
    state = {};

    render() {
        const {children} = this.props;

        return (
            <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
                <div style={{background: 'rgb(0, 2, 62)', position: 'relative'}}>
                    <Segment
                        inverted
                        textAlign='center'
                        vertical
                        style={styles.container}
                    />
                    <HomepageHeading mobile/>
                </div>

                {children}

                <Footer/>

            </Responsive>
        )
    }
}

MobileContainer.propTypes = {
    children: PropTypes.node,
};

export const ResponsiveContainer = ({children}) => (

    <Layout>
        <Helmet>
            <html lang="de" />
        </Helmet>
        <BurgerMenu/>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </Layout>
);