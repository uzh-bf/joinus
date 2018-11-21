import {Grid, Header, Segment, Button, Transition, Image} from "semantic-ui-react";
import React, {Component} from "react";
import animateScrollTo from 'animated-scroll-to';


class ProjectSegment extends Component {
    mapping = {
        '' : {
            img: '',
            text:'',
        },
        klicker: {
            img: 'klicker.jpg',
            title: 'Klicker',
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
            title: 'Dynamics CRM Customizing und Automatisierungen',
            desc: "Das Weiterbildungsteam setzt für ihre Kundenverwaltung Microsoft Dynamics CRM ein. Der gesamte Teilnehmerworkflow ist darin abgebildet: " +
                "Von Anmeldung über Kursteilnahmen bis zu Abschlüssen sind darin alle Informationen zu jedem Kursteilnehmer erfasst." +
                " Der Prozess soll möglichst automatisiert ablaufen und Fehler verhindern. Über einer neu entwickelten WebAPI kann " +
                "man nun auf die Daten zugreifen, sodass diese direkt auf der Webseite dargestellt werden können. Hier halten wir uns an das 'One source of truth Prinzip'.",
            cite: "« Trotz Startschwierigkeiten kenne ich mich mittlerweile so gut im CRM aus, dass ich Automatisierungen schon fast schneller als unser Customizing-Partner implementieren kann. " +
                " Ich bin zwar noch immer kein Fan der C# / .NET Umgebung, doch das CRM bietet uns so viel Mehrwert, dass sich die Mühe lohnt. »",
            citeName: "Manuel"
        },
        redesign: {
            img: 'dynamics.jpg',
            title: 'Redesign Institutswebseite',
            desc: "Die Universität Zürich verwendet seit Langem Magnolia als Content Management System. Die Webseite unseres " +
                "Instituts basierte aber lange Zeit noch auf dem Vorgänger (XXX). Im Rahmen eines umfassenden Redesigns wurde die Webseite" +
                "auf Magnolia umgestellt sowie um neue Elemente wie die Mitarbeiterübersicht eingebaut. Wo die Möglichkeiten des CMS nicht ausreichten, " +
                "wurden diese mittels Javascript, extern eingebundenen Webseiten sowie einfachen PHP Backends erweitert.",
            cite: "« Obwohl die neue Webseite der alten aufgrund der Corporate Identity Bestimmungen der UZH sehr ähnelt ," +
                " ist die technische Grundlage komplett neu. Wir profitieren nun von neuen Möglichkeiten des CMS und haben " +
                "performante und benutzerfreundliche Zusätze eingepflegt. »",
            citeName: "Pascal"
        },
        tools: {
            img: 'tools.jpg',
            title: 'Interne Mitarbeitertools',
            desc: "Da das Institut insgesamt etwa 30 Semesterassistenten beschäftigt, wurden Tools zur Mitarbeiterverwaltung notwendig. " +
                "Mit diesen Tools können zum Beispiel die Arbeitsstunden aufgezeichnet werden oder die Anwesenheit in der nächsten Zeit" +
                " angegeben werden. Eine ganze Reihe an Tools unterstützen die Mitarbeiter und steigern die Effizienz. ",
            cite: "« Die Mitarbeitertools erleichtern die Verwaltung in vielerlei Hinsicht. Mir gefällt vorallem, dass ich so" +
                " weniger Verwaltungsarbeit auf Papier habe. Allerdings müssten einige der Tools dringend überarbeitet werden, " +
                " leider haben wir bisher noch keine Zeit dafür gefunden. »",
            citeName: "Flo"
        },
        lehrveranstaltungen: {
            img: 'tools.jpg',
            title: 'Lehrveranstaltungen',
            desc: "Wer Lehrveranstaltungen von unserem Institut besucht, weiss, dass wir Innovation und Interaktivität fördern. " +
                "Für einige Vorlesungen bieten wir beispielsweise elektronische Skripts an, mit welchen die Studenten lernen können. " +
                "Wir fördern den Einsatz von eAssessment Prüfungen, stellen auf OLAT eLearning Inhalte bereit und bieten den " +
                "Dozenten interaktive Möglichkeiten wie Klicker. Auch die Übungen während dem Semester sind digital und können " +
                "mit clever implementierten Excels, etc. erarbeitet werden.",
            cite: "« Aus den Feedbacks der Studenten wissen wir, dass diese die zur Verfügung gestellten Materialien sehr schätzen. " +
                "Wir sind stets daran, die Inhalte auf dem aktuellsten Stand zu halten und entwickeln neue Unterstützungsmöglichkeiten." +
                "Momentan haben wir gerade eine Idee, welche vielleicht in naher Zukunft realisiert werden kann. »",
            citeName: "Christian"
        },
        jobeye: {
            img: 'tools.jpg',
            title: 'Jobeye',
            desc: "JOBEYE TEXT",
            cite: "« Supidupu »",
            citeName: "Roli"
        },

    };

    state = {
        show: false,
        showWhat: '',
        width: 0,
        height: 0
    };

    UNSAFE_componentWillMount(){
        // get screen size
        this.setState({height: typeof window !== 'undefined' && window.innerHeight});
        this.setState({width: typeof window !== 'undefined' && window.innerWidth});
    }

    showProject = (title) => {
        this.setState({show: false});
        this.setState({showWhat: title});
        this.setState({show: true});
        if (this.state.width < 480) {
            setTimeout(() => {animateScrollTo(document.querySelector('#projectDescription'));}, 300)
        }
    };

    showKlicker = () => { this.showProject('klicker') };
    showDynamics = () => { this.showProject('dynamics') };
    showRedesign = () => { this.showProject('redesign') };
    showTools = () => { this.showProject('tools') };
    showLehr = () => { this.showProject('lehrveranstaltungen') };
    showJobeye = () => { this.showProject('jobeye') };

    render() {
        const {backgroundColor} = this.props;
        return (
        <Segment style={{background: backgroundColor,}} vertical id="project">
            <Header as='h2' textAlign='center' style={{fontSize: "2.5em", width: "100%"}}>
                Hilf uns bei diesen oder ähnlichen Projekten:
            </Header>
            <Grid container celled stackable columns='equal'>
                <Grid.Row centered columns='equal'>
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
                            Redesign Webseite
                        </Header>
                        <p>Technische Aktualisierung der Institutswebseite mit Wechsel des CMS</p>
                        <Button onClick={this.showRedesign} floated='right'>
                            Details
                        </Button>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h3' textAlign='center'>
                            Dynamics CRM
                        </Header>
                        <p>Customizing und Automatisierungen implementieren</p>
                        <Button onClick={this.showDynamics} floated='right'>
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
                                            <Header as='h3' textAlign='center'>
                                                {this.mapping[this.state.showWhat].title}
                                            </Header>,
                                            <p>{this.mapping[this.state.showWhat].desc}</p>,
                                            <br />,
                                            <i><p>{this.mapping[this.state.showWhat].cite}</p></i>,
                                            <Header as='h5' textAlign='right'>
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
                <Grid container celled stackable columns='equal'>
                <Grid.Row centered celled columns='equal'>
                    <Grid.Column>
                        <Header as='h3' textAlign='center'>
                            Interne Tools
                        </Header>
                        <p>Mitarbeitertools, die die tägliche Arbeit erleichtern</p>
                        <Button onClick={this.showTools} floated='right'>
                            Details
                        </Button>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h3' textAlign='center'>
                            Lehrveranstaltungen
                        </Header>
                        <p>Digitale Lerninhalte in Form von eSkripten, Aufgaben (IAs), eAssessment und mehr</p>
                        <Button onClick={this.showLehr} floated='right'>
                            Details
                        </Button>
                    </Grid.Column>
                    <Grid.Column>
                        <Header as='h3' textAlign='center'>
                            Jobeye
                        </Header>
                        <p>Plattform für Studenten auf der Suche nach Teilzeitjobs</p>
                        <Button onClick={this.showJobeye} floated='right'>
                            Details
                        </Button>
                    </Grid.Column>
                </Grid.Row>

            </Grid>
        </Segment>
)}}

export default ProjectSegment;