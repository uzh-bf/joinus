/*import React from 'react'
import { Link } from 'gatsby'
import { Segment } from 'semantic-ui-react'

import Layout from '../components/layout'
import Image from '../components/image'
import 'semantic-ui-css/semantic.min.css';

const IndexPage = () => (
  <Layout>
      <h1 style={{ color: `purple`, fontSize: `72px` }}>Hi there</h1>
    <p>Welcome to your new Bf Job site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
      <Link to="/page-2/">Go to page 2</Link>
    <Segment>Beim insti zu arbeiten ist soooo cool.</Segment>
  </Layout>

)*/

import PropTypes from 'prop-types'
import React, { Component } from 'react'
//import { Link } from 'gatsby'
//import Image from '../components/image'
import Background from '../images/bfinverted.png'
import MKeller from '../images/cheerful-young-businessman.jpg'
import RSchlaefli from '../images/schlaefli-roland.jpg'
import {
    Card,
    Button,
    Container,
    Divider,
    Message,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Responsive,
    Segment,
    Sidebar,
    Visibility,
} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import BurgerMenu from '../components/burgermenu.js'
import { slide as Menu } from 'react-burger-menu'


/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
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

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
    state = {}

    hideFixedMenu = () => this.setState({ fixed: false })
    showFixedMenu = () => this.setState({ fixed: true })

    render() {
        const { children } = this.props
        const { fixed } = this.state

        return (
            <div id="outerPageId">

              <BurgerMenu/>

              <div id="page-wrap">
                <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                    <Visibility
                        once={false}
                        onBottomPassed={this.showFixedMenu}
                        onBottomPassedReverse={this.hideFixedMenu}
                    >
                        <Segment
                            inverted
                            textAlign='center'
                            style={{ minHeight: 700, padding: '1em 0em' }}
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
                            <HomepageHeading />
                            <div style={{size:"5px", "backgroundImage":"url(" + { Background } + ")"}}>
                                <h1>lol</h1>
                            </div>
                            {/*<img width={"100%"} align="left" src={Background}/>*/}
                        </Segment>
                    </Visibility>
                    {children}
                </Responsive>
              </div>
            </div>
        )
    }
}

DesktopContainer.propTypes = {
    children: PropTypes.node,
}

class MobileContainer extends Component {
    state = {}

    handlePusherClick = () => {
        const { sidebarOpened } = this.state

        if (sidebarOpened) this.setState({ sidebarOpened: false })
    }

    handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

    render() {
        const { children } = this.props
        const { sidebarOpened } = this.state

        return (
            <Responsive maxWidth={Responsive.onlyMobile.maxWidth}>
                <Sidebar.Pushable>
                    {/*<Sidebar as={Menu} animation='uncover' inverted vertical visible={sidebarOpened}>
                        <Menu.Item as='a' active>
                            Home
                        </Menu.Item>
                        <Menu.Item as='a'>Work</Menu.Item>
                        <Menu.Item as='a'>Company</Menu.Item>
                        <Menu.Item as='a'>Careers</Menu.Item>
                        <Menu.Item as='a'>Log in</Menu.Item>
                        <Menu.Item as='a'>Sign Up</Menu.Item>
                    </Sidebar>*/}

                    <Sidebar.Pusher
                        dimmed={sidebarOpened}
                        onClick={this.handlePusherClick}
                        style={{ minHeight: '100vh' }}
                    >
                        <Segment
                            inverted
                            textAlign='center'
                            style={{ minHeight: 350, padding: '1em 0em' }}
                            vertical
                        >
                            {/*<Container>
                                <Menu inverted pointing secondary size='large'>
                                    <Menu.Item onClick={this.handleToggle}>
                                        <Icon name='sidebar' />
                                    </Menu.Item>
                                    <Menu.Item position='right'>
                                        <Button as='a' inverted>
                                            Log in
                                        </Button>
                                        <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                                            Sign Up
                                        </Button>
                                    </Menu.Item>
                                </Menu>
                            </Container>*/}
                            <HomepageHeading mobile />
                            <div style={{size:"100%", backgroundImage: "url(" + Background + ")"}}>
                                <h1>lol</h1>
                            </div>
                        </Segment>

                        {children}
                    </Sidebar.Pusher>
                </Sidebar.Pushable>
            </Responsive>
        )
    }
}

MobileContainer.propTypes = {
    children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
    <div>
        <DesktopContainer>{children}</DesktopContainer>
        <MobileContainer>{children}</MobileContainer>
    </div>
)

ResponsiveContainer.propTypes = {
    children: PropTypes.node,
}

const IndexPage = () => (

    <ResponsiveContainer>
        <Segment style={{padding: '8em 0em'}} vertical>
            <Grid container stackable verticalAlign='top'>
                <Grid.Row>
                    <Header as='h2' textAlign='center' style={{fontSize: '2.5em', width: "100%"}}>
                        Hear what our employees have to say:
                    </Header>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={9}>
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
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <Image bordered rounded size='medium' src={MKeller}/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row/>
                <Grid.Row>
                    <Grid.Column width={7}>
                        <Image bordered rounded size='medium' src={MKeller}/>
                    </Grid.Column>
                    <Grid.Column width={9}>
                        <Header as='h3' style={{fontSize: '2em'}}>
                            Am Insti zu arbeiten ist das beste.
                        </Header>
                        <p style={{fontSize: '1.33em'}}>
                            Ich lerne jeden Tag Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
                            risus lectus, aliquet a pellentesque ac, eleifend quis magna. Aliquam vitae felis augue.
                            Cras vitae velit ex. Integer at convallis felis. Donec est mauris, accumsan ut sollicitudin
                            ac, efficitur non sapien. Suspendisse a lorem erat. Integer a feugiat metus.
                        </p>
                        <p style={{fontSize: '1.33em'}}>
                            <i>- Roland Schläftli, Mr. Devops</i>
                        </p>
                    </Grid.Column>
                </Grid.Row>
                <Divider/>
                <Grid.Row>
                    <Header as='h2' textAlign='center' style={{fontSize: '2.5em', width: "100%"}}>
                        So many benefits!
                    </Header>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={4}>
                        {/*TODO: center without ugly hacking AND vertically align to the top*/}
                        <div style={{margin: "0 auto", width: "120px"}}>
                            <Icon circular inverted size='huge' name='code branch'/>
                        </div>
                        <Header as='h3' textAlign='center' style={{fontSize: '2em'}}>
                            Learn to code
                        </Header>
                        <p style={{fontSize: '1.33em'}}>
                            We are very good at coding and so will you be after working at the DBF.
                        </p>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        {/*TODO: center without ugly hacking*/}
                        <div style={{margin: "0 auto", width: "120px"}}>
                            <Icon circular inverted color='green' size='huge' name='yen sign'/>
                        </div>
                        <Header as='h3' textAlign='center' style={{fontSize: '2em'}}>
                            Earn some cash
                        </Header>
                        <p style={{fontSize: '1.33em'}}>
                            Best salary in Switzerland.
                        </p>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        {/*TODO: center without ugly hacking*/}
                        <div style={{margin: "0 auto", width: "120px"}}>
                            <Icon circular inverted color='brown' size='huge' name='coffee'/>
                        </div>
                        <Header as='h3' textAlign='center' style={{fontSize: '2em'}}>
                            Drink coffee
                        </Header>
                        <p style={{fontSize: '1.33em'}}>
                            We have the greatest coffee machine.
                        </p>
                    </Grid.Column>
                    <Grid.Column width={4}>
                        {/*TODO: center without ugly hacking*/}
                        <div style={{margin: "0 auto", width: "120px"}}>
                            <Icon circular inverted color='orange' size='huge' name='users'/>
                        </div>
                        <Header as='h3' textAlign='center' style={{fontSize: '2em'}}>
                            Make friends
                        </Header>
                        <p style={{fontSize: '1.33em'}}>
                            Our team is sooooo great.
                        </p>
                    </Grid.Column>
                </Grid.Row>
                <Divider/>
                <Grid.Row>
                    <Header as='h2' textAlign='center' style={{fontSize: '2.5em', width: "100%"}}>
                        You could work on projects like these!
                    </Header>
                </Grid.Row>
                <Grid celled='internally'>
                    <Grid.Row>
                        <Grid.Column width={5}>
                            <Header as='h3' textAlign='center' style={{fontSize: '2em', width: "100%"}}>
                                Klicker
                            </Header>
                            <p> Roli developed a website that does x, using y and z. Klicker is now used by 1000000000
                                people all around the world. <a
                                    href={"https://www.klicker.uzh.ch/"}>https://www.klicker.uzh.ch/</a>
                            </p>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <Header as='h3' textAlign='center' style={{fontSize: '2em', width: "100%"}}>
                                Klicker
                            </Header>
                            <p> Roli developed a website that does x, using y and z. Klicker is now used by 1000000000
                                people all around the world. <a
                                    href={"https://www.klicker.uzh.ch/"}>https://www.klicker.uzh.ch/</a>
                            </p>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <Header as='h3' textAlign='center' style={{fontSize: '2em', width: "100%"}}>
                                Klicker
                            </Header>
                            <p> Roli developed a website that does x, using y and z. Klicker is now used by 1000000000
                                people all around the world. <a
                                    href={"https://www.klicker.uzh.ch/"}>https://www.klicker.uzh.ch/</a>
                            </p>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column width={5}>
                            <Header as='h3' textAlign='center' style={{fontSize: '2em', width: "100%"}}>
                                Klicker
                            </Header>
                            <p> Roli developed a website that does x, using y and z. Klicker is now used by 1000000000
                                people all around the world. <a
                                    href={"https://www.klicker.uzh.ch/"}>https://www.klicker.uzh.ch/</a>
                            </p>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <Header as='h3' textAlign='center' style={{fontSize: '2em', width: "100%"}}>
                                Klicker
                            </Header>
                            <p> Roli developed a website that does x, using y and z. Klicker is now used by 1000000000
                                people all around the world. <a
                                    href={"https://www.klicker.uzh.ch/"}>https://www.klicker.uzh.ch/</a>
                            </p>
                        </Grid.Column>
                        <Grid.Column width={5}>
                            <Header as='h3' textAlign='center' style={{fontSize: '2em', width: "100%"}}>
                                Klicker
                            </Header>
                            <p> Roli developed a website that does x, using y and z. Klicker is now used by 1000000000
                                people all around the world. <a
                                    href={"https://www.klicker.uzh.ch/"}>https://www.klicker.uzh.ch/</a>
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Divider/>
                <Grid.Row>
                    <Header as='h2' textAlign='center' style={{fontSize: '2.5em', width: "100%"}}>
                        Unsere drei Teams:
                    </Header>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={5}>
                        <Header as='h3' style={{fontSize: '2em'}}>
                            ?ATP?
                        </Header>
                        <Card>
                            <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg'/>
                            <Card.Content>
                                <Card.Header>René</Card.Header>
                                <Card.Meta>Managing Director, Head of Administration</Card.Meta>
                                <Card.Description>Join my team! You will get to know everything about X and Y and furthermore you can z.</Card.Description>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column width={5} >
                        <Header as='h3' style={{fontSize: '2em'}}>
                            Teaching Center
                        </Header>
                        <Card>
                            <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg'/>
                            <Card.Content>
                                <Card.Header>Daniel</Card.Header>
                                <Card.Meta>Joined in 2016</Card.Meta>
                                <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <Header as='h3' style={{fontSize: '2em'}}>
                            Weiterbildung
                        </Header>
                        <Card>
                            <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg'/>
                            <Card.Content>
                                <Card.Header>Daniel</Card.Header>
                                <Card.Meta>Joined in 2016</Card.Meta>
                                <Card.Description>Daniel is a comedian living in Nashville.</Card.Description>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Header as='h3' style={{fontSize: '2em'}}>
                            We Help Companies and Companions
                        </Header>
                        <p style={{fontSize: '1.33em'}}>
                            We can give your company superpowers to do things that they never thought possible.
                            Let us delight your customers and empower your needs... through pure data analytics.
                        </p>
                        <Header as='h3' style={{fontSize: '2em'}}>
                            We Make Bananas That Can Dance
                        </Header>
                        <p style={{fontSize: '1.33em'}}>
                            Yes that's right, you thought it was the stuff of dreams, but even bananas can be
                            bioengineered.
                        </p>
                    </Grid.Column>
                    <Grid.Column floated='right' width={6}>
                        <Image bordered rounded size='large' src='/images/wireframe/white-image.png'/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column textAlign='center'>
                        <Button size='huge'>Check Them Out</Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>

        <Segment style={{padding: '0em'}} vertical>
            <Grid celled='internally' columns='equal' stackable>
                <Grid.Row textAlign='center'>
                    <Grid.Column style={{paddingBottom: '5em', paddingTop: '5em'}}>
                        <Header as='h3' style={{fontSize: '2em'}}>
                            "What a Company"
                        </Header>
                        <p style={{fontSize: '1.33em'}}>That is what they all say about us</p>
                    </Grid.Column>
                    <Grid.Column style={{paddingBottom: '5em', paddingTop: '5em'}}>
                        <Header as='h3' style={{fontSize: '2em'}}>
                            "I shouldn't have gone with their competitor."
                        </Header>
                        <p style={{fontSize: '1.33em'}}>
                            <Image avatar src='/images/avatar/large/nan.jpg'/>
                            <b>Nan</b> Chief Fun Officer Acme Toys
                        </p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>

        <Segment style={{padding: '8em 0em'}} vertical>
            <Container text>
                <Header as='h3' style={{fontSize: '2em'}}>
                    Breaking The Grid, Grabs Your Attention
                </Header>
                <p style={{fontSize: '1.33em'}}>
                    Instead of focusing on content creation and hard work, we have learned how to master the
                    art of doing nothing by providing massive amounts of whitespace and generic content that
                    can seem massive, monolithic and worth your attention.
                </p>
                <Button as='a' size='large'>
                    Read More
                </Button>

                <Divider
                    as='h4'
                    className='header'
                    horizontal
                    style={{margin: '3em 0em', textTransform: 'uppercase'}}
                >
                    <a href='#'>Case Studies</a>
                </Divider>

                <Header as='h3' style={{fontSize: '2em'}}>
                    Did We Tell You About Our Bananas?
                </Header>
                <p style={{fontSize: '1.33em'}}>
                    Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
                    it's really true. It took years of gene splicing and combinatory DNA research, but our
                    bananas can really dance.
                </p>
                <Button as='a' size='large'>
                    I'm Still Quite Interested
                </Button>
            </Container>
        </Segment>

        <Segment inverted vertical style={{padding: '5em 0em'}}>
            <Container>
                <Grid divided inverted stackable>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='About'/>
                            <List link inverted>
                                <List.Item as='a'>Sitemap</List.Item>
                                <List.Item as='a'>Contact Us</List.Item>
                                <List.Item as='a'>Religious Ceremonies</List.Item>
                                <List.Item as='a'>Gazebo Plans</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='Services'/>
                            <List link inverted>
                                <List.Item as='a'>Banana Pre-Order</List.Item>
                                <List.Item as='a'>DNA FAQ</List.Item>
                                <List.Item as='a'>How To Access</List.Item>
                                <List.Item as='a'>Favorite X-Men</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Header as='h4' inverted>
                                Footer Header
                            </Header>
                            <p>
                                Extra space for a call to action inside the footer that could help re-engage users.
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    </ResponsiveContainer>
);


export default IndexPage
