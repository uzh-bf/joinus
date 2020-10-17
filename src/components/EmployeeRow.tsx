import React from 'react'
import { Image, Table, Header, List } from 'semantic-ui-react'

interface Props {
  name: string
  picture: string
  team: string
  study: string
  tasklist: string[]
  time: string
}

function EmployeeRow({ name, picture, team, study, tasklist, time }: Props) {
  return (
    <Table.Row>
      <Table.Cell>
        <Header as="h4" image>
          <Image
            src={picture}
            rounded
            size="large"
            style={{ marginBottom: 0, width: 100 }}
          />
          <Header.Content>
            {name}
            <Header.Subheader>{team}</Header.Subheader>
          </Header.Content>
        </Header>
      </Table.Cell>
      <Table.Cell>{study}</Table.Cell>
      <Table.Cell>
        <List bulleted>
          {tasklist.map((task) => (
            <List.Item>{task}</List.Item>
          ))}
        </List>
      </Table.Cell>
      <Table.Cell className={'mobile hidden'}>{time}</Table.Cell>
    </Table.Row>
  )
}

export default EmployeeRow