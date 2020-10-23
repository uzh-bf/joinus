import React, { useState } from 'react'
import { Form, Button, Message } from 'semantic-ui-react'

function ApplicationForm() {
  const [submissionState, setSubmissionState] = useState<{
    loading: boolean
    success: boolean
    error?: string
  }>({
    loading: false,
    success: false,
    error: null,
  })

  const [gender, setGender] = useState()
  const [pensum, setPensum] = useState()
  const [study, setStudy] = useState()

  const handleChangeSelect = (func) => (_, { value }) => func(value)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const data = new FormData(e.target)
      data.append('gender', gender)
      data.append('pensum', pensum)
      data.append('study', study)

      setSubmissionState({ loading: true, success: false })
      await fetch(
        'https://www.uzh.ch/finance-weiterbildung/static/joinus/api/public/index.php/joinus_apply',
        {
          method: 'POST',
          body: data,
        }
      )
      setSubmissionState({ loading: false, success: true })
    } catch (e) {
      alert(
        'Etwas ist schiefgelaufen (eventuell zu grosse Anhänge), bitte sende uns die Anmeldung per E-Mail.'
      )
      setSubmissionState({ loading: false, success: false, error: e })
      console.log(e)
    }
  }

  return (
    <Form
      onSubmit={handleSubmit}
      loading={submissionState.loading}
      success={submissionState.success}
    >
      <Form.Select
        fluid
        label="Anrede"
        options={[
          { key: 'm', text: 'Herr', value: 'Herr' },
          {
            key: 'f',
            text: 'Frau',
            value: 'Frau',
          },
        ]}
        placeholder="Anrede"
        name="gender"
        value={gender}
        onChange={handleChangeSelect(setGender)}
      />
      <Form.Group widths="equal">
        <Form.Input
          fluid
          label="Vorname"
          placeholder="Vorname"
          name="firstName"
        />
        <Form.Input
          fluid
          label="Nachname"
          placeholder="Nachname"
          name="lastName"
        />
      </Form.Group>
      <Form.Input fluid label="Adresse" placeholder="Adresse" name="street" />
      <Form.Input fluid label="PLZ / Ort" placeholder="PLZ / Ort" name="city" />
      <Form.Input fluid label="Telefon" placeholder="Telefon" name="phone" />
      <Form.Input fluid label="E-Mail" placeholder="E-Mail" name="mail" />
      <Form.Select
        fluid
        label="Hauptfach"
        name="study"
        options={[
          { key: 'INF', text: 'Informatik', value: 'INF' },
          {
            key: 'WI',
            text: 'Wirtschaftsinformatik',
            value: 'Wirtschaftsinformatik',
          },
          {
            key: 'DS',
            text: 'Data Science',
            value: 'Data Science',
          },
          { key: 'CL', text: 'Computerlinguistik', value: 'CL' },
          {
            key: 'anderes',
            text: 'Anderes, bitte angeben',
            value: 'anderes',
          },
        ]}
        placeholder="Hauptfach"
        value={study}
        onChange={handleChangeSelect(setStudy)}
      />
      <Form.Select
        fluid
        label="Ungefähres gewünschtes Pensum (Stellenprozente)"
        name="pensum"
        options={[
          { key: 'kleiner20', text: '< 20%', value: '< 20%' },
          { key: '20', text: '20%', value: '20%' },
          { key: '30', text: '30%', value: '30%' },
          { key: '40', text: '40%', value: '40%' },
          { key: '50', text: '50%', value: '50%' },
          { key: '60', text: '60%', value: '60%' },
          { key: 'grösser60', text: '> 60%', value: '> 60%' },
        ]}
        placeholder="Pensum"
        value={pensum}
        onChange={handleChangeSelect(setPensum)}
      />
      <Form.Field>
        <label>Lebenslauf (Max. 5Mb)</label>
        <input
          placeholder="Lebenslauf (Max. 5Mb)"
          accept=".pdf"
          type="file"
          value={null}
          name="cvFile"
        />
      </Form.Field>
      <Form.Field>
        <label>Aktuelle Leistungsübersicht (Max. 5Mb)</label>
        <input
          placeholder="Leistungsübersicht (Max. 5Mb)"
          accept=".pdf"
          type="file"
          value={null}
          name="grades"
        />
      </Form.Field>
      <Form.TextArea
        label="Motivation für die Bewerbung"
        placeholder="Bitte stelle dich vor und erzähle von deinen bisherigen Projekten und Erfahrungen."
        rows={10}
        name="motivation"
      />
      <Button type="submit">Bewerbung abschicken</Button>
      <Message
        success
        header="Bewerbung versendet"
        content="Vielen Dank für deine Bewerbung. Du solltest nun ein Bestätigungsemail von uns erhalten haben."
      />
    </Form>
  )
}

export default ApplicationForm
