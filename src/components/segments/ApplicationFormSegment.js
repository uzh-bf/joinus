import {Button, Container, Header, Segment, Grid, Form, Icon} from "semantic-ui-react";
import React, {Component} from "react";


class ApplicationFormSegment extends Component {
    constructor(props) {
        super(props);
        ApplicationFormSegment.handleSubmit = ApplicationFormSegment.handleSubmit.bind(this);
    }

    static handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        fetch('https://www.uzh.ch/finance-weiterbildung/static/joinus/api/public/joinus_apply', {
            method: 'POST',
            body: data,
        });
    }

    render() {
        const {backgroundColor} = this.props;
        return (
        <Segment style={{background: backgroundColor,}} vertical id="application">
            <Container>
                <Grid divided stackable>
                    <Grid.Row>
                        <Header as='h2' textAlign='center' style={{fontSize: "2.5em", width: "100%"}}>
                            Jetzt bewerben via E-Mail unter: <a href='mailto:info@bf.uzh.ch'>info@bf.uzh.ch</a>
                        </Header>
                        <Header as='h2' textAlign='center' style={{fontSize: "2.5em", width: "100%"}}>
                            Oder direkt via Formular:
                        </Header>

                    </Grid.Row>
                    <Grid.Row centered>
                        <Grid.Column width={10}>
                            <Form style={{width: "100%"}} onSubmit={ApplicationFormSegment.handleSubmit}>
                                <Form.Select fluid label='Anrede'
                                             options={[{key: "m", text: "Herr", value: "Herr"}, {
                                                 key: "f",
                                                 text: "Frau",
                                                 value: "Frau"
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
                                             options={[{key: "INF", text: "Informatik", value: "INF"},
                                                 {
                                                     key: "WI",
                                                     text: "Wirtschaftsinformatik",
                                                     value: "Wirtschaftsinformatik"
                                                 },
                                                 {key: "DS", text: "Data Science", value: "DS"},
                                                 {key: "CL", text: "Computerlinguistik", value: "CL"},
                                                 {key: "anderes", text: "Anderes, bitte angeben", value: "anderes"},
                                             ]}
                                             placeholder='Hauptfach'/>
                                <Form.Select fluid label='Ungefähres gewünschtes Pensum (Stellenprozente)'
                                             options={[
                                                 {key: "kleiner20", text: "< 20%", value: "< 20%"},
                                                 {key: "20", text: "20%", value: "20%"},
                                                 {key: "30", text: "30%", value: "30%"},
                                                 {key: "40", text: "40%", value: "40%"},
                                                 {key: "50", text: "50%", value: "50%"},
                                                 {key: "60", text: "60%", value: "60%"},
                                                 {key: "grösser60", text: "> 60%", value: "> 60%"},
                                             ]}
                                             placeholder='Pensum'/>
                                <Form.Field>
                                    <label>
                                        Lebenslauf
                                    </label>
                                    <input placeholder="Lebenslauf" type="file" value={null}/>
                                </Form.Field>
                                <Form.Field>
                                    <label>
                                        Aktuelle Leistungsübersicht
                                    </label>
                                    <input placeholder="Leistungsübersicht" type="file" value={null}/>
                                </Form.Field>
                                <Form.Field>
                                    <label>
                                        Aktuelle Leistungsübersicht
                                    </label>
                                    <input placeholder="Leistungsübersicht" type="file" value={null}/>
                                </Form.Field>
                                <Form.TextArea
                                    label='Motivation für die Bewerbung'
                                    placeholder='Bitte stelle dich vor und erzähle von deinen bisherigen Projekten und Erfahrungen.'
                                    style={{minHeight: 150}}/>
                                <Button type='submit'>Bewerbung abschicken</Button>
                            </Form>

                        </Grid.Column>

                    </Grid.Row>

                </Grid>
            </Container>

            <Header as='h2' textAlign='center'>
                Hast du Fragen? Gerne beantworten wir diese per Telefon oder E-Mail. <br />
                <a href='https://www.bf.uzh.ch/static/employee/detail/index.php?language=de&alias=liechti-elisabeth&tab=detail'>Kontaktdaten <Icon name="external alternate"/></a></Header>

        </Segment>
    );

export default ApplicationFormSegment;