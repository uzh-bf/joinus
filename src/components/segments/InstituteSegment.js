import {Grid, Header, Image, Segment, Table, Menu} from "semantic-ui-react";
import TeamBild from "../../images/institut.jpg";
import React, {Component} from "react";
import Manu from "../../images/manuel.jpg";
import Rolli from "../../images/rolli.jpg";
import Luca from "../../images/luca.jpg";
import Dimitri from "../../images/Dimitri.jpeg";
import Christian from "../../images/christian.jpg";
import {EmployeeRow} from "../EmployeeRow";

class InstituteSegment extends Component {
    state = {
        institute: false,
    };

    hideInsti = () => this.setState({institute: false});
    showInsti = () => this.setState({institute: true});

    render() {
        const {backgroundColor} = this.props;
        return (
            <Segment style={{background: backgroundColor,}} vertical id="institute">
                <Grid container stackable verticalAlign='top'>
                    <Grid.Row>
                        <Header as='h2' textAlign='center' style={{fontSize: "2.5em", width: "100%"}}>
                            Unser Institut
                        </Header>
                    </Grid.Row>

                    <Menu pointing fluid widths={2} style={{fontFamily: "IBM Plex Mono"}}>
                        <Menu.Item name='Unser Informatikteam' active={this.state.institute === false} onClick={this.hideInsti} />
                        <Menu.Item name='Institutsteam' active={this.state.institute === true} onClick={this.showInsti} />
                    </Menu>

                    {
                        this.state.institute && [
                            <Grid.Row centered>
                                <Header as='h3'>
                                    Unsere Instituts-Mitarbeiter
                                </Header>
                            </Grid.Row>,
                            <Grid.Row style={{maxHeight: 400, height: 'auto'}}>
                            <Image centered
                                   style={{width: "70%", height: "100%", objectFit: 'cover', borderRadius: '3px',}}
                                   src={TeamBild}/>
                        </Grid.Row>,
                            <Grid.Row centered>
                                <p>Gesamthaft sind wir rund 250 Mitarbeiter, Professoren und Forscher.</p>
                            </Grid.Row>
                        ]
                    }
                    {
                        ! this.state.institute && [
                            <Grid.Row centered>
                                <Header as='h3'>
                                    Unsere Informatik-Mitarbeiter
                                </Header>
                            </Grid.Row>,
                            <Grid.Row centered>
                                <Table basic='very' celled collapsing unstackable>
                                    <Table.Header>
                                        <Table.Row>
                                            <Table.HeaderCell> </Table.HeaderCell>
                                            <Table.HeaderCell>Studienrichtung</Table.HeaderCell>
                                            <Table.HeaderCell>Aktuelle Projekte</Table.HeaderCell>
                                            <Table.HeaderCell style={{minWidth:"55px"}} className={'mobile hidden'}>Am Institut seit</Table.HeaderCell>
                                        </Table.Row>
                                    </Table.Header>

                                    <Table.Body>
                                        <EmployeeRow
                                            name="Roli"
                                            picture={Rolli}
                                            team="Teaching Center"
                                            study='Master Data Science abgeschlossen'
                                            tasklist={['Leitung IT-Team TC', 'Klicker UZH', 'Jobeye', 'Erarbeiten eines CRM für Kursinhalte']}
                                            time='Januar 2015'
                                        />
                                        <EmployeeRow
                                            name="Manuel"
                                            picture={Manu}
                                            team="Weiterbildung"
                                            study='Master Information Systems abgeschlossen'
                                            tasklist={['Leitung IT-Team WB', 'Dynamics CRM Customizing, Integrationen und Automatisierungen', 'Webseitenbetreuung und -entwicklung']}
                                            time='Juni 2017'
                                        />
                                        <EmployeeRow
                                          name="Christian"
                                          team="Teaching Center"
                                          picture={Christian}
                                          study='Bachelor Banking & Finance'
                                          tasklist={['Erstellung und Betreuung der OLAT Kurse', 'Erarbeiten Online-Prüfungen']}
                                          time='April 2018'
                                        />
                                        <EmployeeRow
                                          name="Dimitri"
                                          team="Teaching Center"
                                          picture={Dimitri}
                                          study='Master Banking & Finance'
                                          tasklist={['Erstellung und Betreuung von Website-Projekten', 'Erarbeiten eines CMS für Kursinhalte', 'Unterstützung div. IT Projekte']}
                                          time='August 2019'
                                        />
                                        <EmployeeRow
                                          name="Luca"
                                          team="Teaching Center"
                                          picture={Luca}
                                          study='Bachelor Informatik'
                                          tasklist={['Erstellung und Betreuung der Kursinhalte', 'Erarbeiten Online-Prüfungen']}
                                          time='Juni 2018'
                                        />
                                        <EmployeeRow
                                          name="Senthuasa"
                                          team="Weiterbildung"
                                          study='Master Informatik'
                                          tasklist={['Betreuung Website', 'Betreuung Webapps']}
                                          time='Januar 2019'
                                        />
                                        <EmployeeRow
                                          name="Michael"
                                          team="Weiterbildung"
                                          study='Bachelor Informatik'
                                          tasklist={['Betreuung Website', 'Betreuung und Erstellung Webapps', 'Erarbeitung Semesterplanungstool']}
                                          time='Januar 2019'
                                        />
                                    </Table.Body>
                                </Table>
                            </Grid.Row>
                        ]
                    }

                </Grid>
            </Segment>
        )
    };
}

export default InstituteSegment;
