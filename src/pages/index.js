import React from 'react'
import Manu from '../images/manuel.jpg'
import Pascal from '../images/pascal.jpg'
import {Button, Container, Divider, Form, Grid, Header, Icon, Image, List, Segment,} from 'semantic-ui-react'
import {ResponsiveContainer} from "../components/ContainerComponents";
import TeamBild from '../images/team.jpg'
import TeamSegment from "../components/TeamSegment";


/* eslint-disable react/no-multi-comp */
class IndexPage extends React.Component{
    state = {}

    handleChange = (e, { value }) => this.setState({ value })

    render() {
      return(
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
                          <Container style={{marginTop: 70}}>
                              {/*<Message color='white'>*/}
                              <Header as='h3' style={{fontSize: '2em'}}>
                                  Am Insti zu arbeiten ist sooo toll.
                              </Header>
                              <p style={{fontSize: '1.33em'}}>
                                  Ich lerne jeden Tag Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                  Pellentesque
                                  risus lectus, aliquet a pellentesque ac, eleifend quis magna. Aliquam vitae felis
                                  augue.
                                  Cras vitae velit ex. Integer at convallis felis. Donec est mauris, accumsan ut
                                  sollicitudin
                                  ac, efficitur non sapien. Suspendisse a lorem erat. Integer a feugiat metus.
                              </p>
                              <p style={{fontSize: '1.33em'}}>
                                  <i>- Manuel Keller, Senior Software Engineer</i>
                              </p>
                              {/*</Message>*/}
                          </Container>

                      </Grid.Column>
                      <Grid.Column width={7}>
                          <Image bordered rounded size='large' src={Manu}/>
                      </Grid.Column>
                  </Grid.Row>
                  <Grid.Row/>
                  <Grid.Row>
                      <Grid.Column width={7}>
                          <Image bordered size='large' src={Pascal}/>
                      </Grid.Column>
                      <Grid.Column width={9}>
                          <Container style={{marginTop: 60}}>
                              <Header as='h3' style={{fontSize: '2em'}}>
                                  Am Insti zu arbeiten ist das beste.
                              </Header>
                              <p style={{fontSize: '1.33em'}}>
                                  Ich lerne jeden Tag Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                  Pellentesque
                                  risus lectus, aliquet a pellentesque ac, eleifend quis magna. Aliquam vitae felis
                                  augue.
                                  Cras vitae velit ex. Integer at convallis felis. Donec est mauris, accumsan ut
                                  sollicitudin
                                  ac, efficitur non sapien. Suspendisse a lorem erat. Integer a feugiat metus.
                              </p>
                              <p style={{fontSize: '1.33em'}}>
                                  <i>- Roland Schläftli, Mr. Devops</i>
                              </p>
                          </Container>
                      </Grid.Column>
                  </Grid.Row>
                  <Divider/>
                  <Grid.Row>
                      <Header as='h2' textAlign='center' style={{fontSize: '2.5em', width: "100%"}}>
                          Was wir dir bieten:
                      </Header>
                  </Grid.Row>
                  <Grid.Row>
                      <Grid.Column width={4}>
                          {/*TODO: center without ugly hacking AND vertically align to the top*/}
                          <div style={{margin: "0 auto", width: "120px"}}>
                              <Icon circular inverted size='huge' name='code branch'/>
                          </div>
                          <Header as='h3' textAlign='center' style={{fontSize: '2em'}}>
                              #code
                          </Header>
                          <p style={{fontSize: '1.33em'}}>
                              Wende deine Programmierkenntnisse in einem praktischen Umfeld an und sammle Erfahrung für
                              spätere Berufe.
                          </p>
                      </Grid.Column>
                      <Grid.Column width={4}>
                          {/*TODO: center without ugly hacking*/}
                          <div style={{margin: "0 auto", width: "120px"}}>
                              <Icon circular inverted color='green' size='huge' name='dollar sign'/>
                          </div>
                          <Header as='h3' textAlign='center' style={{fontSize: '2em'}}>
                              #cash
                          </Header>
                          <p style={{fontSize: '1.33em'}}>
                              Bei uns verdienst du mehr als bei Promotion-Jobs oder an der Kasse im Supermarkt.
                          </p>
                      </Grid.Column>
                      <Grid.Column width={4}>
                          {/*TODO: center without ugly hacking*/}
                          <div style={{margin: "0 auto", width: "120px"}}>
                              <Icon circular inverted color='brown' size='huge' name='clock outline'/>
                          </div>
                          <Header as='h3' textAlign='center' style={{fontSize: '2em'}}>
                              #cflexibility
                          </Header>
                          <p style={{fontSize: '1.33em'}}>
                              Dein Studium geht vor! Dementsprechend kannst du bei uns auch deine Arbeitszeiten so
                              anpassen, dass dir die Arbeit nicht in die Quere kommt.
                          </p>
                      </Grid.Column>
                      <Grid.Column width={4}>
                          {/*TODO: center without ugly hacking*/}
                          <div style={{margin: "0 auto", width: "120px"}}>
                              <Icon circular inverted color='orange' size='huge' name='users'/>
                          </div>
                          <Header as='h3' textAlign='center' style={{fontSize: '2em'}}>
                              #crew
                          </Header>
                          <p style={{fontSize: '1.33em'}}>
                              Sei Teil von einem ambitionierten Team von Studenten. Neben regelmässigen Events wie z.B.
                              einem Schlitteltag in Engelberg, grillen wir auch gerne oder besetzen das BQM.
                          </p>
                      </Grid.Column>
                  </Grid.Row>
                  <Divider/>
                  <Grid.Row>
                      <Header as='h2' textAlign='center' style={{fontSize: '2.5em', width: "100%"}}>
                          Helf uns bei diesen oder ähnlichen Projekten:
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
              </Grid>
          </Segment>

          <TeamSegment
            headerText="Unsere drei Teams:" />

          <Segment style={{padding: '8em 0em', background: 'lightgrey',}} vertical>
              <Grid celled='internally' columns='equal' stackable>
                  <Grid.Row>
                      <Header as='h2' textAlign='center' style={{fontSize: '2.5em', width: "100%"}}>
                          ...
                      </Header>
                  </Grid.Row>
                  <Divider/>
                  <Grid.Row>
                      <Header as='h2' textAlign='center' style={{fontSize: '2.5em', width: "100%"}}>
                          Was du mitbringen sollst:
                      </Header>
                  </Grid.Row>
                  <Grid celled='internally'>
                      <Grid.Row centered style={{width: "100%"}}>
                          <Grid.Column width={6}>
                              <Header as='h3' textAlign='center' style={{fontSize: '2em', width: "100%"}}>
                                  Allgemein
                              </Header>
                              <List as='ul'>
                                  <List.Item as='li'>Du studierst etwa im 3. Semester (Informatik oder
                                      Wirtschaftsinformatik)</List.Item>
                                  <List.Item as='li'>Teamfähigkeit</List.Item>
                                  <List.Item as='li'>Eigenständiges Arbeiten</List.Item>
                              </List>
                              <Header as='h3' textAlign='center' style={{fontSize: '1.5em', width: "100%"}}>
                                  Fakultativ
                              </Header>
                              <List as='ul'>
                                  <List.Item as='li'>Interesse am Finanzplatz Schweiz</List.Item>
                              </List>
                          </Grid.Column>
                          <Grid.Column width={1}/>
                          <Grid.Column width={6}>
                              <Header as='h3' textAlign='center' style={{fontSize: '2em', width: "100%"}}>
                                  Informatik
                              </Header>
                              <List as='ul'>
                                  <List.Item as='li'>Du bist interessiert an den neusten Technologien</List.Item>
                                  <List.Item as='li'>Du kannst dich schnell einarbeiten in neue Programmiersprachen und
                                      Frameworks</List.Item>
                              </List>
                              <Header as='h3' textAlign='center' style={{fontSize: '1.5em', width: "100%"}}>
                                  Fakultativ
                              </Header>
                              <List as='ul'>
                                  <List.Item as='li'>Erfahrung im Webdevelopment</List.Item>
                              </List>
                          </Grid.Column>
                      </Grid.Row>
                  </Grid>
              </Grid>
          </Segment>

          <Segment style={{padding: '8em 0em'}} vertical>
              <Grid container stackable verticalAlign='top'>
                  <Grid.Row>
                      <Header as='h2' textAlign='center' style={{fontSize: '2.5em', width: "100%"}}>
                          Unser Institut:
                      </Header>
                  </Grid.Row>
                  <Grid.Row>
                      <Image style={{width: "100%", height: "100%"}} src={TeamBild}/>
                      <p style={{fontSize: '1.33em'}}>
                          Am Institut arbeiten insgesamt rund 25 studentische Mitarbeiter. Diese werden von sechs
                          Festangestellten unter Kontrolle gehalten.
                      </p>
                  </Grid.Row>
              </Grid>
          </Segment>

          <Segment style={{padding: '8em 0em'}} vertical id="bewerbungsformular">
              <Container>
                  <Grid divided stackable>
                      <Grid.Row>
                          <Header as='h2' textAlign='center' style={{fontSize: '2.5em', width: "100%"}}>
                              Jetzt bewerben via Formular:
                          </Header>
                      </Grid.Row>
                      <Grid.Row centered>
                          <Grid.Column width={10}>
                              <Form style={{width: '100%'}}>
                                  <Form.Select fluid label='Anrede'
                                               options={[{key: 'm', text: 'Herr', value: 'Herr'}, {
                                                   key: 'f',
                                                   text: 'Frau',
                                                   value: 'Frau'
                                               }]}
                                               placeholder='Anrede'/>
                                  <Form.Group widths='equal'>
                                      <Form.Input fluid label='Vorname' placeholder='Vorname'/>
                                      <Form.Input fluid label='Nachname' placeholder='Nachname'/>
                                  </Form.Group>
                                  <Form.Input fluid label='Adresse' placeholder='Adresse'/>
                                  <Form.Input fluid label='PLZ / Ort' placeholder='PLZ / Ort'/>
                                  <Form.Input fluid label='Telefon' placeholder='Telefon'/>
                                  <Form.Input fluid label='E-Mail' placeholder='E-Mail'/>
                                  <Form.Select fluid label='Hauptfach'
                                               options={[{key: 'INF', text: 'Informatik', value: 'INF'},
                                                   {
                                                       key: 'WI',
                                                       text: 'Wirtschaftsinformatik',
                                                       value: 'Wirtschaftsinformatik'
                                                   },
                                                   {key: 'DS', text: 'Data Science', value: 'DS'},
                                                   {key: 'CL', text: 'Computerlinguistik', value: 'CL'},
                                                   {key: 'anderes', text: 'Anderes, bitte angeben', value: 'anderes'},
                                               ]}
                                               placeholder='Hauptfach'/>
                                  <Form.Field>
                                      <label>
                                          Lebenslauf
                                      </label>
                                      <input placeholder="Lebenslauf" type="file" value={null}/>
                                  </Form.Field>
                                  <Form.TextArea
                                      label='Motivation für die Bewerbung'
                                      placeholder='Bitte stelle dich vor und erzähle von deinen bisherigen Projekten und Erfahrungen.'
                                      style={{minHeight: 150}}/>
                                  <Button type='submit'>Bewerben</Button>
                              </Form>
                          </Grid.Column>

                      </Grid.Row>

                  </Grid>
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
      </ResponsiveContainer>)
  }
}


export default IndexPage
