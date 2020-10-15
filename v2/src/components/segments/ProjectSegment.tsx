import {
  Grid,
  Header,
  Segment,
  Button,
  Transition,
  Image,
} from 'semantic-ui-react'
import React, { useState } from 'react'
import animateScrollTo from 'animated-scroll-to'

const mapping = {
  '': {
    img: '',
    text: '',
  },
  klicker: {
    img: 'klicker.jpg',
    title: 'Klicker',
    desc:
      'Klicker ist ein Open-Source Instant Audience Response System - auf Deutsch ein Service, bei dem man' +
      ' Abstimmungen erstellt und einer Audienz zum Ausfüllen übergibt und in Echtzeit Zugriff auf die Resultate hat. ' +
      'Das Frontend wurde in React entwickelt, das Backend mit node.js. Wichtig war von Anfang an, dass der Service ' +
      'leicht zu bedienen ist, gut aussieht und bestens für Smartphones ausgelegt ist. So kann die grösste Anzahl ' +
      'Studenten in den Hörsälen ermuntert werden, mitzumachen.',
    cite:
      '« Um Klicker so interaktiv wie möglich zu machen, habe ich die Seite mit React mit einem node.js Server ' +
      'aufgebaut. Mit einem QR Code gelangen die Teilnehmer auf die Seite und müssen nur einmal klicken. »',
    citeName: 'Roli',
  },
  dynamics: {
    img: 'dynamics.jpg',
    title: 'Dynamics CRM Customizing und Automatisierungen',
    desc:
      'Das Weiterbildungsteam setzt für ihre Kundenverwaltung Microsoft Dynamics CRM ein. Der gesamte Teilnehmerworkflow ist darin abgebildet: ' +
      'Von Anmeldung über Kursteilnahmen bis zu Abschlüssen sind darin alle Informationen zu jedem Kursteilnehmer erfasst.' +
      ' Der Prozess soll möglichst automatisiert ablaufen und Fehler verhindern. Über einer neu entwickelten WebAPI kann ' +
      "man nun auf die Daten zugreifen, sodass diese direkt auf der Webseite dargestellt werden können. Hier halten wir uns an das 'One source of truth Prinzip'.",
    cite:
      '« Trotz Startschwierigkeiten kenne ich mich mittlerweile so gut im CRM aus, dass ich Automatisierungen schon fast schneller als unser Customizing-Partner implementieren kann. ' +
      ' Ich bin zwar noch immer kein Fan der C# / .NET Umgebung, doch das CRM bietet uns so viel Mehrwert, dass sich die Mühe lohnt. »',
    citeName: 'Manuel',
  },
  redesign: {
    img: 'redesign.jpg',
    title: 'Redesign Institutswebseite',
    desc:
      'Die Universität Zürich verwendet seit langem Magnolia als Content Management System (CMS)' +
      '. Die Webseite unseres Instituts basierte aber lange Zeit noch auf dem in Contao eingebetteten Vorgänge' +
      'r. Im Rahmen eines umfassenden Redesigns wurde die Webseite auf Magnolia umgestellt sowie um neue Element' +
      'e wie die Mitarbeiter- oder Vorlesungsübersicht erweitert. Wo die Möglichkeiten des CMS nicht ausreichten' +
      ', wurden diese mit PHP und Javascript ergänzt. Im Hintergrund werden die Daten in einer von uns entwickelten MySQL Datenban' +
      'k gespeichert, auf die wir mit einer PHP API zugreifen. Anschliessend werden die Daten visualisiert. Alle ' +
      'Daten externer Quellen werden bei uns gecached, mit nächtlich durchlaufende Skripts werden diese aktualisiert.',
    cite:
      '« Obwohl die neue Webseite der alten aufgrund der Corporate Identity Bestimmungen der UZH sehr ähnelt' +
      ', ist die technische Grundlage komplett neu. Mit eigenentwickelten Komponenten versuchen wir die Nach' +
      'teile und Einschränkungen des CMS zu umgehen und haben performante und benutzerfreundliche Zusätze eing' +
      'epflegt. Die neue Struktur der Datenbank erlaubt uns ausserdem, viel mehr Informationen aus den Daten zu ziehen. »',
    citeName: 'Pascal',
  },
  tools: {
    img: 'tools.jpg',
    title: 'Interne Tools',
    desc:
      'Unser Institut besteht aus über 50 Teams an vier verschiedenen Standorten. Um die Mitarbeiter möglichst effizient zu verwalten, haben wir interne Tools zur Arbeitsstundenaufzeichnung und für die Anwesenheit implementiert. Mit letzterem können die Mitarbeiter ihre Absenzen festhalten und die Absenzen ihrer Team-Mitglieder festhalten. ' +
      'Zudem gibt es das Management Information System (MIS), welches der Institutsleitung über diverse Visualisierungen, Metriken, etc. aufschlussreiche Informationen über das Institut, dessen Mitarbeiter und die aktuelle Forschung liefert. Momentan befindet sich eine Version 2 in Entwicklung. ',
    cite:
      '« Die Anwesenheits Web Applikation war für mich das erste Projekt am Institut und die optimale Gelegenheit mich ' +
      'einzuarbeiten und das Institut und seine Mitarbeiter kennenzulernen. Bei der Implementierung hatte ich ' +
      'grosse gestalterische Freiheiten und konnte meine Web Development Skills deutlich erweitern. Es freut mich besonders,' +
      ' dass das Endresultat nun von so vielen Mitarbeitern aktiv benutzt wird. »',
    citeName: 'Flo',
    cite2:
      '« Das Management Information System ist ein Business Intelligence Tool. Es zieht aus verschiedenen Quellen Daten und' +
      ' veranschaulicht die darin enthaltenen Informationen. Als Data Science Masterstudent kann ich hier mein Wissen voll nutzen ' +
      'und so die Institutsleitung unterstützen. Daneben lerne ich viel über Visualisierungen und Web Development. »',
    cite2Name: 'Pascal',
  },
  lehre: {
    img: 'olat.jpg',
    title: 'Lehrveranstaltungen',
    desc:
      'Wer Lehrveranstaltungen von unserem Institut besucht, weiss, dass wir Innovation und Interaktivität fördern. ' +
      'Für einige Vorlesungen bieten wir beispielsweise elektronische Skripts an, mit welchen die Studenten lernen können. ' +
      'Wir fördern den Einsatz von eAssessment Prüfungen, stellen auf OLAT eLearning Inhalte bereit und bieten den ' +
      'Dozenten interaktive Möglichkeiten wie Klicker. Auch die Übungen während dem Semester sind digital und können ' +
      'mit clever implementierten Excels, etc. erarbeitet werden.',
    cite:
      '« Aus den Feedbacks der Studenten wissen wir, dass diese die zur Verfügung gestellten Materialien sehr schätzen. ' +
      'Wir sind stets daran, die Inhalte auf dem aktuellsten Stand zu halten und entwickeln neue Unterstützungsmöglichkeiten.' +
      'Momentan haben wir gerade eine Idee, welche vielleicht in naher Zukunft realisiert werden kann. »',
    citeName: 'Christian',
  },
  jobeye: {
    img: 'jobeye.jpg',
    title: 'Jobeye - Stellenportal für Studenten',
    desc:
      'Jobeye bietet teilnehmenden Firmen die Möglichkeit, nach studentischen Mitarbeitern zu suchen. Dies ' +
      'vereinfacht die Stellenausschreibung für unser Institut und gibt den Studenten gleichzeitig die Möglichkeit,' +
      ' einen Nebenverdienst während dem Studium zu finden.',
    cite:
      '« Jobeye war das erste Projekt, welches wir extern auf einer Docker Instanz gehostet haben. Docker ' +
      'vereinfacht das Deployment stark und sorgt dafür, dass stets die korrekte Laufzeitumgebung verfügbar ist. »',
    citeName: 'Roli',
  },
}

interface Props {
  backgroundColor: string
}

function ProjectSegment({ backgroundColor }: Props) {
  const [showProject, setShowProject] = useState(null)

  return (
    <Segment style={{ background: backgroundColor }} vertical id="project">
      <Header
        as="h2"
        textAlign="center"
        style={{ fontSize: '2.5em', width: '100%' }}
      >
        Hilf uns bei diesen oder ähnlichen Projekten:
      </Header>
      <Grid container celled stackable columns="equal">
        <Grid.Row centered columns="equal">
          <Grid.Column>
            <Header as="h3" textAlign="center">
              Klicker
            </Header>
            <p>
              Open-Source Abstimmungs-Tool für Interaktivität in den
              Vorlesungen.
            </p>
            <Button onClick={() => setShowProject('klicker')} floated="right">
              Details
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Header as="h3" textAlign="center">
              Redesign Webseite
            </Header>
            <p>
              Technische Aktualisierung der Institutswebseite mit Wechsel des
              CMS
            </p>
            <Button onClick={() => setShowProject('redesign')} floated="right">
              Details
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Header as="h3" textAlign="center">
              Dynamics CRM
            </Header>
            <p>
              Customizing und Automatisiimport
              '../../semantic/dist/semantic.min.css' import
              '../layout.css'rungen implementieren
            </p>
            <Button onClick={() => setShowProject('dynamics')} floated="right">
              Details
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Transition visible={showProject} animation="slide down" duration={300}>
        <div>
          <Grid
            container
            stackable
            verticalAlign="middle"
            columns="equal"
            id="projectDescription"
          >
            <Grid.Row
              centered
              inverted
              style={{ maxWidth: '1100px', margin: 'auto' }}
            >
              <Grid.Column width={6}>
                {showProject && (
                  <Image src={'images/' + mapping[showProject].img} />
                )}
              </Grid.Column>
              <Grid.Column width={10}>
                {showProject && [
                  <Header as="h3" textAlign="center">
                    {mapping[showProject].title}
                  </Header>,
                  <p>{mapping[showProject].desc}</p>,
                  <br />,
                  <i>
                    <p>{mapping[showProject].cite}</p>
                  </i>,
                  <Header as="h5" textAlign="right">
                    - {mapping[showProject].citeName}
                  </Header>,

                  mapping[showProject].cite2 && [
                    <br />,
                    <i>
                      <p>{mapping[showProject].cite2}</p>
                    </i>,
                    <Header as="h5" textAlign="right">
                      - {mapping[showProject].cite2Name}
                    </Header>,
                  ],
                ]}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </Transition>
      <Grid container celled stackable columns="equal">
        <Grid.Row centered columns="equal">
          <Grid.Column>
            <Header as="h3" textAlign="center">
              Interne Tools
            </Header>
            <p>Mitarbeiteradministration und Management Support</p>
            <Button onClick={() => setShowProject('tools')} floated="right">
              Details
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Header as="h3" textAlign="center">
              Lehrveranstaltungen
            </Header>
            <p>
              Digitale Lerninhalte in Form von eSkripten, Aufgaben (IAs),
              eAssessment und mehr
            </p>
            <Button onClick={() => setShowProject('lehre')} floated="right">
              Details
            </Button>
          </Grid.Column>
          <Grid.Column>
            <Header as="h3" textAlign="center">
              Jobeye
            </Header>
            <p>Plattform für Studenten auf der Suche nach Teilzeitjobs</p>
            <Button onClick={() => setShowProject('jobeye')} floated="right">
              Details
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <style jsx>{`
        #projectDescription {
          padding: 0px 10%;
          background: rgba(0, 0, 63, 0.1);
          width: 100% !important;
          margin: auto;
        }
      `}</style>
    </Segment>
  )

  // state = {
  //   show: false,
  //   showWhat: '',
  //   width: 0,
  //   height: 0,
  // }

  // UNSAFE_componentWillMount() {
  //   // get screen size
  //   this.setState({
  //     height: typeof window !== 'undefined' && window.innerHeight,
  //   })
  //   this.setState({ width: typeof window !== 'undefined' && window.innerWidth })
  // }

  // showProject = (title) => {
  //   this.setState({ show: false })
  //   this.setState({ showWhat: title })
  //   this.setState({ show: true })
  //   if (this.state.width < 480) {
  //     setTimeout(() => {
  //       animateScrollTo(document.querySelector('#projectDescription'))
  //     }, 300)
  //   }
  // }
}

export default ProjectSegment
