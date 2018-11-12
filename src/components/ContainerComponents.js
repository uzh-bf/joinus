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
                        style={{minHeight: 700, padding: '1em 0em'}}
                        vertical
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
                        <div style={{size: "5px", "backgroundImage": "url(" + {Background} + ")"}}>
                            <h1>lol</h1>
                        </div>
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
                    style={{minHeight: 350, padding: '1em 0em'}}
                    vertical>

                    <HomepageHeading mobile/>
                    <div style={{size: "100%", backgroundImage: "url(" + Background + ")"}}>
                        <h1>lol</h1>
                    </div>
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
    <div>
        <BurgerMenu/>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </div>
)

ResponsiveContainer.propTypes = {
    children: PropTypes.node,
}

