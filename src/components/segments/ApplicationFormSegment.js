import {Button, Container, Header, Segment, Grid, Form, Icon, Message} from "semantic-ui-react";
import React, {Component} from "react";

class ApplicationFormSegment extends Component {
    constructor(props) {
        super(props);
        this.state = {gender: '', pensum: '', study: '', loading: false, success: false};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeGender = this.handleChangeGender.bind(this);
        this.handleChangePensum = this.handleChangePensum.bind(this);
        this.handleChangeStudy = this.handleChangeStudy.bind(this);

    }

    handleChangeGender = (e, { value }) => {
        this.setState({gender: value });
    }
    handleChangePensum = (e, { value }) => this.setState({pensum: value });
    handleChangeStudy = (e, { value }) => this.setState({study: value });

    handleSubmit(event) {
        event.preventDefault();

        const data = new FormData(event.target);
        data.append('gender', this.state.gender);
        data.append('pensum', this.state.pensum);
        data.append('study', this.state.study);

        this.setState({loading: true});

        fetch('https://www.uzh.ch/finance-weiterbildung/static/joinus/api/public/joinus_apply', {
            method: 'POST',
            body: data,
        }).then(() => {
            this.setState({loading: false});
            this.setState({success: true});
        }, (e) => {
            alert("Etwas ist schiefgelaufen (eventuell zu grosse Anhänge), bitte sende uns die Anmeldung per E-Mail.");
            console.log(e)
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
                                Wir suchen momentan keine neuen Mitarbeiter. Leider ist das Bewerbungsformular deswegen geschlossen.
                            </Header>
                            <Header as='h2' textAlign='center' style={{fontSize: "2.5em", width: "100%"}}>
                            </Header>

                        </Grid.Row>
                        <Grid.Row centered>
                            <Grid.Column width={10}>
                                <Form style={{width: "100%"}} onSubmit={this.handleSubmit} loading={this.state.loading} success={this.state.success}>
                                    <Form.Select disabled fluid label='Anrede'
                                                 options={[{key: "m", text: "Herr", value: "Herr"}, {
                                                     key: "f",
                                                     text: "Frau",
                                                     value: "Frau"
                                                 }]}
                                                 placeholder='Anrede'
                                                 name="gender"
                                                 value={this.state.gender} onChange={this.handleChangeGender}
                                    />
                                    <Form.Group widths='equal'>
                                        <Form.Input disabled fluid label='Vorname' placeholder='Vorname' name="firstName"/>
                                        <Form.Input disabled fluid label='Nachname' placeholder='Nachname' name='lastName'/>
                                    </Form.Group>
                                    <Form.Input disabled fluid label='Adresse' placeholder='Adresse' name='street'/>
                                    <Form.Input disabled fluid label='PLZ / Ort' placeholder='PLZ / Ort' name='city'/>
                                    <Form.Input disabled fluid label='Telefon' placeholder='Telefon' name='phone'/>
                                    <Form.Input disabled fluid label='E-Mail' placeholder='E-Mail' name='mail'/>
                                    <Form.Select disabled fluid label='Hauptfach' name='study'
                                                 options={[{key: "INF", text: "Informatik", value: "INF"},
                                                     {
                                                         key: "WI",
                                                         text: "Wirtschaftsinformatik",
                                                         value: "Wirtschaftsinformatik"
                                                     },
                                                     {key: "DS", text: "Data Science", value: "Data Science"},
                                                     {key: "CL", text: "Computerlinguistik", value: "CL"},
                                                     {key: "anderes", text: "Anderes, bitte angeben", value: "anderes"},
                                                 ]}
                                                 placeholder='Hauptfach'
                                                 onChange={this.handleChangeStudy}
                                    />
                                    <Form.Select disabled fluid label='Ungefähres gewünschtes Pensum (Stellenprozente)' name='pensum'
                                                 options={[
                                                     {key: "kleiner20", text: "< 20%", value: "< 20%"},
                                                     {key: "20", text: "20%", value: "20%"},
                                                     {key: "30", text: "30%", value: "30%"},
                                                     {key: "40", text: "40%", value: "40%"},
                                                     {key: "50", text: "50%", value: "50%"},
                                                     {key: "60", text: "60%", value: "60%"},
                                                     {key: "grösser60", text: "> 60%", value: "> 60%"},
                                                 ]}
                                                 placeholder='Pensum'
                                                 onChange={this.handleChangePensum}
                                    />
                                    <Form.Field disabled >
                                        <label>
                                            Lebenslauf (Max. 5Mb)
                                        </label>
                                        <input placeholder="Lebenslauf (Max. 5Mb)" accept='.pdf' type="file" value={null} name='cvFile'/>
                                    </Form.Field>
                                    <Form.Field disabled >
                                        <label>
                                            Aktuelle Leistungsübersicht (Max. 5Mb)
                                        </label>
                                        <input placeholder="Leistungsübersicht (Max. 5Mb)" accept='.pdf' type="file" value={null} name='grades'/>
                                    </Form.Field>
                                    <Form.TextArea disabled
                                        label='Motivation für die Bewerbung'
                                        placeholder='Bitte stelle dich vor und erzähle von deinen bisherigen Projekten und Erfahrungen.'
                                        style={{minHeight: 150}}
                                        name='motivation'/>
                                    <Button disabled type='submit'>Bewerbung abschicken</Button>
                                    <Message success header='Bewerbung versendet' content="Vielen Dank für deine Bewerbung. Du solltest nun ein Bestätigungsemail von uns erhalten haben." />
                                </Form>

                            </Grid.Column>

                        </Grid.Row>

                    </Grid>
                </Container>

                <Header as='h2' textAlign='center'>
                    Hast du Fragen? Gerne beantworten wir diese per Telefon oder E-Mail. <br/>
                    <a href='https://www.bf.uzh.ch/static/employee/detail/index.php?language=de&alias=liechti-elisabeth&tab=detail'>Kontaktdaten <Icon
                        name="external alternate"/></a></Header>

            </Segment>
        );
    }
}

export default ApplicationFormSegment;
