/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
import React, {Component} from "react";
import {Responsive, Segment, Visibility} from "semantic-ui-react";
import Background from "../images/bfinverted.png";
import PropTypes from "prop-types";
import BurgerMenu from "./burgermenu";
import HomepageHeading from "./HomepageHeading"
import Layout from './layout'

import Bf from '../images/bfinverted.png'


const styles = {
    container: {
        backgroundImage: `url(${Bf})`,
        minHeight: '100vh',
        padding: '1em 0em',
        backgroundColor: '#000',
        backgroundPosition: 'left bottom', /*Positioning*/
        backgroundRepeat: 'no-repeat',
    }
};

class DesktopContainer extends Component {
    state = {}

    hideFixedMenu = () => this.setState({fixed: false})
    showFixedMenu = () => this.setState({fixed: true})

    render() {
        const {children} = this.props
        const {fixed} = this.state

        return (
            <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                <Visibility
                    once={false}
                    onBottomPassed={this.showFixedMenu}
                    onBottomPassedReverse={this.hideFixedMenu}
                >
                    <Segment
                        inverted
                        textAlign='center'
                        vertical
                        style={styles.container}
                    >
                        {/*<Menu
                            fixed={fixed ? 'top' : null}
                            inverted={!fixed}
                            pointing={!fixed}
                            secondary={!fixed}
                            size='large'
                        >
                            <Container>
                                <Menu.Item as='a' active>
                                    Home
                                </Menu.Item>
                                <Menu.Item as='a'>Work</Menu.Item>
                                <Menu.Item as='a'>Company</Menu.Item>
                                <Menu.Item as='a'>Careers</Menu.Item>
                                <Menu.Item position='right'>
                                    <Button as='a' inverted={!fixed}>
                                        Log in
                                    </Button>
                                    <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                                        Sign Up
                                    </Button>
                                </Menu.Item>
                            </Container>
                        </Menu>*/}
                        <HomepageHeading/>
                        {/*<img width={"100%"} align="left" src={Background}/>*/}
                    </Segment>
                </Visibility>
                {children}
            </Responsive>
        )
    }
}

DesktopContainer.propTypes = {
    children: PropTypes.node,
}

class MobileContainer extends Component {
    state = {}

    render() {
        const {children} = this.props

        return (
            <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
                <Segment
                    inverted
                    textAlign='center'
                    style={styles.container}
                    vertical>

                    <HomepageHeading mobile/>
                </Segment>

                {children}

            </Responsive>
        )
    }
}

MobileContainer.propTypes = {
    children: PropTypes.node,
}
export const ResponsiveContainer = ({children}) => (
    <Layout>
        <BurgerMenu/>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </Layout>
)

//export Left