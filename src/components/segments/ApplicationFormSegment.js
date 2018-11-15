import {Button, Container, Header, Segment, Grid, Form} from "semantic-ui-react";
import React from "react";

const ApplicationFormSegment = ({backgroundColor}) => (
    <Segment style={{background: backgroundColor,}} vertical id="application">
        <Container>
            <Grid divided stackable>
                <Grid.Row>
                    <Header as='h2' textAlign='center' style={{fontSize: "2.5em", width: "100%"}}>
                        Jetzt bewerben via Formular:
                    </Header>
                </Grid.Row>
                <Grid.Row centered>
                    <Grid.Column width={10}>
                        <Form style={{width: "100%"}}>
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
);

export default ApplicationFormSegment;