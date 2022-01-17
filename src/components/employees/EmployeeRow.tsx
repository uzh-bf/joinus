import Image from 'next/image'
import React from 'react'
import { List, Table } from 'semantic-ui-react'

interface Props {
  name: string
  picture: string
  team: string
  study: string
  tasklist: string[]
  time?: string
  withTime?: boolean
}

function EmployeeRow({
  name,
  picture,
  team,
  study,
  tasklist,
  time,
  withTime,
}: Props) {
  const ImageSrc = require(`../../../public/images/people/${picture}`)
  return (
    <Table.Row>
      <Table.Cell>
        <div className="relative h-24 w-36">
          <Image
            src={ImageSrc}
            layout="fill"
            objectFit="cover"
            className="rounded"
          />
        </div>
        <div className="mt-2 text-lg font-normal font-thesans-bold">{name}</div>
        <div className="text-md">{team}</div>
      </Table.Cell>
      <Table.Cell>{study}</Table.Cell>
      <Table.Cell>
        <List bulleted>
          {tasklist.map((task) => (
            <List.Item key={task}>{task}</List.Item>
          ))}
        </List>
      </Table.Cell>
      {withTime && <Table.Cell className="hidden mobile">{time}</Table.Cell>}
    </Table.Row>
  )
}

EmployeeRow.defaultProps = {
  time: undefined,
  withTime: true,
}

export default EmployeeRow
