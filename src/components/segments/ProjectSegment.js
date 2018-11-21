import {Grid, Header, Segment, Button, Transition, Image} from "semantic-ui-react";
import React, {Component} from "react";

class ProjectSegment extends Component {
    mapping = {
        '' : {
            img: '',
            text:'',
        },
        klicker: {
            img: 'klicker.jpg',
            desc: "Klicker ist ein Open-Source Instant Audience Response System - auf Deutsch ein Service, bei dem man" +
                " Abstimmungen erstellt und einer Audienz zum Ausfüllen übergibt und in Echtzeit Zugriff auf die Resultate hat. " +
                "Das Frontend wurde in React entwickelt, das Backend mit node.js. Wichtig war von Anfang an, dass der Service " +
                "leicht zu bedienen ist, gut aussieht und bestens für Smartphones ausgelegt ist. So kann die grösste Anzahl " +
                "Studenten in den Hörsälen ermuntert werden, mitzumachen.",
            cite: "« Um Klicker so interaktiv wie möglich zu machen, habe ich die Seite mit React mit einem node.js Server " +
                "aufgebaut. Mit einem QR Code gelangen die Teilnehmer auf die Seite und müssen nur einmal klicken. »",
            citeName: "Roli"
        },
        dynamics: {
            img: 'dynamics.jpg',
            desc: "Das Weiterbildungsteam setzt für ihre Kundenverwaltung Microsoft Dynamics CRM ein. Der gesamte Teilnehmerworkflow ist darin abgebildet: " +
                "Von Anmeldung über Kursteilnahmen bis zu Abschlüssen sind darin alle Informationen zu jedem Kursteilnehmer erfasst." +
                " Der Prozess soll möglichst automatisiert ablaufen und Fehler verhindern. Über einer neu entwickelten WebAPI kann " +
                "man nun auf die Daten zugreifen, sodass diese direkt auf der Webseite dargestellt werden können. Hier halten wir uns an das 'One source of truth Prinzip'.",
            cite: "« Trotz Startschwierigkeiten kenne ich mich mittlerweile so gut im CRM aus, dass ich Automatisierungen schneller wie unser Customizing-Partner implementieren kann." +
                "Ich bin zwar noch immer kein Fan der C# / .NET Umgebung, doch das CRM bietet uns so viel Mehrwert, dass sich die Mühe lohnt. »",
            citeName: "Manuel"
        },

    };

    state = {
        show: false,
        showWhat: '',
    };

    showKlicker = () => {
        this.setState({show: false});
        this.setState({showWhat: 'klicker'});
        this.setState({show: true});
    }
    showDynamics = () => {
        this.setState({show: false});
        this.setState({showWhat: 'dynamics'});
        this.setState({show: true});
    }

    render() {
        const {backgroundColor} = this.props;
        return (
        <Segment style={{background: backgroundColor,}} vertical id="project">
            <Header as='h2' textAlign='center' style={{fontSize: "2.5em", width: "100%"}}>
                Helf uns bei diesen oder ähnlichen Projekten:
            </Header>
            <Grid container celled stackable verticalAlign='top' columns='equal'>
                <Grid.Row centered celled columns='equal'>
                    <Grid.Column>
                        <Header as='h3' textAlign='center'>
                            Klicker
                        </Header>
                        <p>Open-Source Abstimmungs-Tool für Interaktivität in den Vorlesungen.</p>
                        <Button onClick={this.showKlicker} floated='right'>
                            Details
                        </Button>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h3' textAlign='center'>
                            Klicker
                        </Header>
                        <p>Open-Source Abstimmungs-Tool für Interaktivität in den Vorlesungen.</p>
                        <Button onClick={this.showKlicker} floated='right'>
                            Details
                        </Button>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h3' textAlign='center'>
                            Klicker
                        </Header>
                        <p>Open-Source Abstimmungs-Tool für Interaktivität in den Vorlesungen.</p>
                        <Button onClick={this.showKlicker} floated='right'>
                            Details
                        </Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
                    <Transition visible={this.state.show} animation='slide down' duration={300}>
                        {
                            <div>
                            <style>
                                {`
                                    #projectDescription {
                                        padding: 0px 10%;
                                        background: rgba(0,0,63,0.1);
                                        width: 100% !important;
                                        margin: auto;
                                    }
                                `}
                            </style>
                            <Grid container stackable verticalAlign='top' columns='equal' id={"projectDescription"}>
                            <Grid.Row centered inverted style={{maxWidth:'1100px', margin:'auto'}}>
                                <Grid.Column width={6}>
                                    {
                                       this.state.show &&
                                       <Image src={ require('../../images/' + this.mapping[this.state.showWhat].img)}/>
                                    }
                                </Grid.Column>
                                <Grid.Column width={10}>
                                    {
                                        this.state.show && [
                                            <p>{this.mapping[this.state.showWhat].desc}</p>,
                                            <br />,
                                            <i><p>{this.mapping[this.state.showWhat].cite}</p></i>,
                                            <Header as='h5' textAlign='center'>
                                                - {this.mapping[this.state.showWhat].citeName}
                                            </Header>
                                        ]

                                    }
                                </Grid.Column>
                            </Grid.Row>
                            </Grid>
                            </div>
                        }
                    </Transition>
                <Grid container celled stackable verticalAlign='top' columns='equal'>
                <Grid.Row centered celled columns='equal'>
                    <Grid.Column>
                        <Header as='h3' textAlign='center'>
                            Dynamics
                        </Header>
                        <p>Ein interaktives Polling Tool für Vorlesungen.</p>
                        <Button onClick={this.showDynamics} floated='right'>
                            Details
                        </Button>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h3' textAlign='center'>
                            Dynamics
                        </Header>
                        <p>Ein interaktives Polling Tool für Vorlesungen.</p>
                        <Button onClick={this.showDynamics} floated='right'>
                            Details
                        </Button>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h3' textAlign='center'>
                            Dynamics
                        </Header>
                        <p>Ein interaktives Polling Tool für Vorlesungen.</p>
                        <Button onClick={this.showDynamics} floated='right'>
                            Details
                        </Button>
                    </Grid.Column>
                </Grid.Row>

            </Grid>
        </Segment>
)}}

export default ProjectSegment;