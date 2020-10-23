export const employees = [
  {
    name: 'Roli',
    picture: 'images/rolli.jpg',
    team: 'Teaching Center',
    study: 'Master Data Science (abgeschlossen)',
    tasklist: [
      'Leitung IT-Team TC',
      'Webapps wie Klicker UZH, Jobeye, und eLearning CMS',
      'Umsetzung von Projekten im Game-Based Learning',
      'Devops und Cloud Infrastruktur des IBF',
    ],
    time: 'Januar 2015',
  },
  {
    name: 'Manuel',
    picture: 'images/manuel.jpg',
    team: 'Weiterbildung',
    study: 'Master Information Systems (abgeschlossen)',
    tasklist: [
      'Leitung IT-Team WB',
      'Dynamics CRM Customizing, Integrationen und Automatisierungen',
      'Webseitenbetreuung und -entwicklung',
    ],
    time: 'Juni 2017',
  },
  {
    name: 'Christian',
    team: 'Teaching Center',
    picture: 'images/christian.jpg',
    study: 'Bachelor Banking & Finance (aktuell)',
    tasklist: [
      'Erstellung und Betreuung der OLAT Kurse',
      'Erarbeiten Online-Prüfungen',
    ],
    time: 'April 2018',
  },
  {
    name: 'Michael',
    team: 'Weiterbildung',
    picture: null,
    study: 'Bachelor Informatik (aktuell)',
    tasklist: [
      'Betreuung Website',
      'Betreuung und Erstellung Webapps',
      'Erarbeitung Semesterplanungstool',
    ],
    time: 'Januar 2019',
  },
  {
    name: 'Luca',
    team: 'Teaching Center',
    picture: 'images/luca.jpg',
    study: 'Bachelor Informatik & Ökonomik (aktuell)',
    tasklist: [
      'Erstellung und Betreuung der Kursinhalte',
      'Erarbeiten Online-Prüfungen',
    ],
    time: 'April 2019',
  },
  {
    name: 'Senthuasa',
    team: 'Weiterbildung',
    picture: 'images/senthuasa.jpg',
    study: 'Master Wirtschaftsinformatik (aktuell)',
    tasklist: ['Betreuung Website', 'Betreuung Webapps'],
    time: 'April 2019',
  },
  {
    name: 'Dimitri',
    team: 'Teaching Center',
    picture: 'images/Dimitri.jpeg',
    study: 'Master Banking & Finance (aktuell)',
    tasklist: [
      'Erstellung und Betreuung von Website-Projekten',
      'Erarbeiten eines CMS für Kursinhalte',
      'Unterstützung div. IT Projekte des TC',
    ],
    time: 'August 2019',
  },
  {
    name: 'Rémy',
    team: 'Webteam/Kommunikation',
    picture: '',
    study: '...',
    tasklist: ['...'],
    time: 'Februar 2020',
  },
  {
    name: 'Claudine',
    team: 'Webteam/Kommunikation',
    picture: '',
    study: '...',
    tasklist: ['...'],
    time: 'Oktober 2020',
  },
]

export const alumni = [
  {
    name: 'Florian',
    picture: '',
    team: 'Webteam',
    study: 'Master Data Science (abgeschlossen)',
    tasklist: [
      'Weiterentwicklung MSFinance Application',
      'Entwicklung und Wartung diverser Webapplikationen'
    ],
    time: 'August 2020',
  },
  {
    name: 'Pascal',
    picture: 'images/pascal.jpg',
    team: 'Webteam',
    study: 'Master Information Systems (abgeschlossen)',
    tasklist: [
      'Migration bf.uzh.ch Webseite und Datenbanken',
      'Entwicklung des Management Information System 2.0',
      'Entwicklung und Wartung diverser Webapplikationen'
    ],
    time: 'Februar 2020',
  },
]

// TODO: add K8s, Strapi, Tailwind
export const technologies = [
  {
    image: 'images/slideshow/python.png',
    title: 'Python für Statistiken und Modellierung',
  },
  {
    image: 'images/slideshow/semanticui.png',
    title: 'Semantic UI für Layouting',
  },
  {
    image: 'images/slideshow/react.jpg',
    title: 'ReactJS für performante Webapplikationen',
  },
  {
    image: 'images/slideshow/gitlab.png',
    title: 'GitLab für Versionsmanagement und CI',
  },
  {
    image: 'images/slideshow/directus.png',
    title: 'Directus Headless CMS für Inhalte',
  },
  {
    image: 'images/slideshow/slim.png',
    title: 'Slim Framework für einfache PHP APIs',
  },
  {
    image: 'images/slideshow/docker.png',
    title: 'Docker für Containervirtualisierung von WebApps',
  },
  {
    image: 'images/slideshow/node.png',
    title: 'NodeJS als Backend für WebApps',
  },
  {
    image: 'images/slideshow/openolat.png',
    title: 'OpenOLAT für eLearning Kurse',
  },
  {
    image: 'images/slideshow/sentry.png',
    title: 'Sentry zur Fehlererkennung von WebApps',
  },
]

export const projects = {
  klicker: {
    img: 'klicker.jpg',
    title: 'Klicker',
    subtitle:
      'Open-Source Abstimmungs-Tool für Interaktivität in den Vorlesungen',
    desc:
      'Klicker ist ein Open-Source Instant Audience Response System - auf Deutsch ein Service, bei dem man' +
      ' Abstimmungen erstellt und einer Audienz zum Ausfüllen übergibt und in Echtzeit Zugriff auf die Resultate hat. ' +
      'Das Frontend wurde in React entwickelt, das Backend mit node.js. Wichtig war von Anfang an, dass der Service ' +
      'leicht zu bedienen ist, gut aussieht und bestens für Smartphones ausgelegt ist. So kann die grösste Anzahl ' +
      'Studenten in den Hörsälen ermuntert werden, mitzumachen.',
    cite:
      'Um Klicker so interaktiv wie möglich zu machen, habe ich die Seite mit React mit einem node.js Server ' +
      'aufgebaut. Mit einem QR Code gelangen die Teilnehmer auf die Seite und müssen nur einmal klicken.',
    citeName: 'Roli',
    tags: ['react', 'node.js', 'graphql', 'docker'],
  },
  dynamics: {
    img: 'dynamics.jpg',
    title: 'Dynamics CRM',
    subtitle: 'Customizing und Automatisierungen',
    desc:
      'Das Weiterbildungsteam setzt für ihre Kundenverwaltung Microsoft Dynamics CRM ein. Der gesamte Teilnehmerworkflow ist darin abgebildet: ' +
      'Von Anmeldung über Kursteilnahmen bis zu Abschlüssen sind darin alle Informationen zu jedem Kursteilnehmer erfasst.' +
      ' Der Prozess soll möglichst automatisiert ablaufen und Fehler verhindern. Über einer neu entwickelten WebAPI kann ' +
      "man nun auf die Daten zugreifen, sodass diese direkt auf der Webseite dargestellt werden können. Hier halten wir uns an das 'One source of truth Prinzip'.",
    cite:
      'Trotz Startschwierigkeiten kenne ich mich mittlerweile so gut im CRM aus, dass ich Automatisierungen schon fast schneller als unser Customizing-Partner implementieren kann. ' +
      ' Ich bin zwar noch immer kein Fan der C# / .NET Umgebung, doch das CRM bietet uns so viel Mehrwert, dass sich die Mühe lohnt.',
    citeName: 'Manuel',
    tags: ['automation', 'CRM', 'azure'],
  },
  redesign: {
    img: 'redesign.jpg',
    title: 'Redesign bf.uzh.ch',
    subtitle:
      'Technische Aktualisierung der Institutswebseite mit Wechsel des CMS',
    desc:
      'Die Universität Zürich verwendet seit langem Magnolia als Content Management System (CMS)' +
      '. Die Webseite unseres Instituts basierte aber lange Zeit noch auf dem in Contao eingebetteten Vorgänge' +
      'r. Im Rahmen eines umfassenden Redesigns wurde die Webseite auf Magnolia umgestellt sowie um neue Element' +
      'e wie die Mitarbeiter- oder Vorlesungsübersicht erweitert. Wo die Möglichkeiten des CMS nicht ausreichten' +
      ', wurden diese mit PHP und Javascript ergänzt. Im Hintergrund werden die Daten in einer von uns entwickelten MySQL Datenban' +
      'k gespeichert, auf die wir mit einer PHP API zugreifen. Anschliessend werden die Daten visualisiert. Alle ' +
      'Daten externer Quellen werden bei uns gecached, mit nächtlich durchlaufende Skripts werden diese aktualisiert.',
    cite:
      'Obwohl die neue Webseite der alten aufgrund der Corporate Identity Bestimmungen der UZH sehr ähnelt' +
      ', ist die technische Grundlage komplett neu. Mit eigenentwickelten Komponenten versuchen wir die Nach' +
      'teile und Einschränkungen des CMS zu umgehen und haben performante und benutzerfreundliche Zusätze eing' +
      'epflegt. Die neue Struktur der Datenbank erlaubt uns ausserdem, viel mehr Informationen aus den Daten zu ziehen.',
    citeName: 'Pascal',
    tags: ['react', 'php'],
  },
  tools: {
    img: 'tools.jpg',
    title: 'Intranet',
    subtitle: 'Intranet mit Management-Tools',
    desc:
      'Unser Institut besteht aus über 50 Teams an vier verschiedenen Standorten welche im aktuellen Umfeld immer mehr auf ' +
        'IT-Tools wie Zoom und ähnliches angewiesen sind. Deswegen ist geplant, ein Intranet zu entwickeln, wo man sich' +
        ' über die aktuellsten Tools und deren Einsatzgebiete informieren kann. Dazu kommt, dass das Institut diverse ' +
        'Management-Informations-Tools einsetzt, wie zum Beispiel eine eigene Mitarbeiter-Verwaltung. Auch diese Tools müssen ins Intranet überführt' +
        ' und dort eingegliedert werden.',
    cite:
      '« Die Anwesenheits-Web Applikation war für mich das erste Projekt am Institut und die optimale Gelegenheit mich ' +
      'einzuarbeiten und das Institut und seine Mitarbeiter kennenzulernen. Bei der Implementierung hatte ich ' +
      'grosse gestalterische Freiheiten und konnte meine Web Development Skills deutlich erweitern. Es freut mich besonders,' +
      ' dass das Endresultat nun von so vielen Mitarbeitern aktiv benutzt wird. »',
    citeName: 'Flo',
    cite2:
      'Das Management Information System ist ein Business Intelligence Tool. Es zieht aus verschiedenen Quellen Daten und' +
      ' veranschaulicht die darin enthaltenen Informationen. Als Data Science Masterstudent kann ich hier mein Wissen voll nutzen ' +
      'und so die Institutsleitung unterstützen. Daneben lerne ich viel über Visualisierungen und Web Development.',
    cite2Name: 'Pascal',
    tags: ['react', 'php', 'data modelling'],
  },
  lehre: {
    img: 'olat.jpg',
    title: 'eLearning',
    subtitle:
      'Digitale Lerninhalte in Form von eSkripten, Aufgaben (IAs), eAssessment und mehr',
    desc:
      'Wer Lehrveranstaltungen von unserem Institut besucht, weiss, dass wir Innovation und Interaktivität fördern. ' +
      'Für einige Vorlesungen bieten wir beispielsweise elektronische Skripts an, mit welchen die Studenten lernen können. ' +
      'Wir fördern den Einsatz von eAssessment Prüfungen, stellen auf OLAT eLearning Inhalte bereit und bieten den ' +
      'Dozenten interaktive Möglichkeiten wie Klicker. Auch die Übungen während dem Semester sind digital und können ' +
      'mit clever implementierten Excels, etc. erarbeitet werden.',
    cite:
      'Aus den Feedbacks der Studenten wissen wir, dass diese die zur Verfügung gestellten Materialien sehr schätzen. ' +
      'Wir sind stets daran, die Inhalte auf dem aktuellsten Stand zu halten und entwickeln neue Unterstützungsmöglichkeiten.',
    citeName: 'Christian',
    tags: ['react', 'strapi', 'lms', 'python'],
  },
  jobeye: {
    img: 'jobeye.jpg',
    title: 'Game-Based Learning',
    subtitle:
      'Unterstützung der Lehre durch Simulationen und Serious Games (e.g., Portfoliomanagement-Game)',
    desc: ``,
    cite:
      'Jobeye war das erste Projekt, welches wir extern auf einer Docker Instanz gehostet haben. Docker ' +
      'vereinfacht das Deployment stark und sorgt dafür, dass stets die korrekte Laufzeitumgebung verfügbar ist.',
    citeName: 'Roli',
    tags: ['react', 'graphql', 'node.js', 'gamification'],
  },
}

export const requirements = [
  {
    header: 'Informatik',
    must: [
      'Bereitschaft, dich mit den eingesetzten Technologien vertieft zu befassen',
      'Fähigkeit, sich neue Programmierkenntnisse schnell anzueignen',
      'Kreative und effiziente Problemlösung',
      'Fähigkeit, Architektur und Design möglichst zukunftssicher zu entwerfen',
    ],
  },
  {
    header: 'Allgemein',
    must: [
      'Du studierst Informatik, Data Science oder Wirtschaftsinformatik (ca. zwischen 3. und 7. Semester)',
      'Eigenständiges und engagiertes Arbeiten',
      'Teamfähigkeit',
      'Möglichkeit, mit einem Pensum von 20-60% zu arbeiten, mehr auf Anfrage (flexibel mehr oder weniger während Ferien oder Prüfungen)',
      'Gute Englischkentnisse, weitere Sprachen von Vorteil',
    ],
  },
]

export const teams = [
  {
    teamName: 'Kommunikation',
    imageSrc: 'images/lisa.jpg',
    leaderName: 'Lisa Liechti',
    leaderPosition: 'Leitung Kommunikation IBF',
    teamDescription:
      'Bei mir stehen viele Data Science Projekte an, bei welchen ich eure ' +
      'Unterstützung brauche. Dazu kommen immer wieder Aufgaben im Web-Design und der Gestaltung von ' +
      'Magazinen und Newslettern. Ich suche also kreative Data Scientists!',
  },
  {
    teamName: 'Teaching Center',
    imageSrc: 'images/johanna.jpg',
    leaderName: 'Johanna Braun',
    leaderPosition: 'Leitung Teaching Center IBF',
    teamDescription:
      'Wir wollen die Lehrveranstaltungen unseres Instituts innovativ und interaktiv ' +
      'gestalten. Deshalb brauchen wir IT-Support für die digital unterstützten Kurse, für Klicker und ' +
      'Jobeye oder eine neue Idee von dir!',
  },
  {
    teamName: 'Weiterbildung',
    imageSrc: 'images/beni.jpg',
    leaderName: 'Benjamin Wilding',
    leaderPosition: 'Geschäftsführer, Leitung Lehre & Weiterbildung',
    teamDescription:
      'Als Weiterbildungsanbieter brauchen wir kreative Informatiker*innen, die die User ' +
      'Experience mit innovativen Tools verbessern und die Kundenverwaltung mit ' +
      'Automatisierungen effizienter gestalten.',
  },
]
