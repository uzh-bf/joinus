import Image from 'next/image'
import React, { useState } from 'react'
import { Menu, Table } from 'semantic-ui-react'
import DeptImage from '../../../public/images/people/institut.jpg'
import { alumni, employees } from '../../data'
import SegmentContainer from '../SegmentContainer'
import EmployeeRow from './EmployeeRow'

export interface Props {
  backgroundColor: string
}

function DepartmentSegment({ backgroundColor }: Props) {
  const [isShown, setIsShown] = useState('current')

  return (
    <SegmentContainer
      id="department"
      title="Unser Institut"
      nextUp="#application"
      backgroundColor={backgroundColor}
    >
      <Menu pointing fluid widths={3}>
        <Menu.Item
          name="Unser Team"
          active={isShown === 'current'}
          onClick={() => setIsShown('current')}
        />
        <Menu.Item
          name="Unsere Alumni"
          active={isShown === 'alumni'}
          onClick={() => setIsShown('alumni')}
        />
        <Menu.Item
          name="Institutsteam"
          active={isShown === 'department'}
          onClick={() => setIsShown('department')}
        />
      </Menu>

      {isShown === 'department' && (
        <div>
          <p className="m-auto mb-4 prose prose-lg">
            Gesamthaft sind wir rund 250 Mitarbeiter, Professoren und Forscher.
          </p>
          <div>
            <Image src={DeptImage} layout="responsive" />
          </div>
        </div>
      )}

      {isShown === 'current' && (
        <Table className="!m-auto" basic="very" size="small" collapsing>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell>Studienrichtung</Table.HeaderCell>
              <Table.HeaderCell>Aufgabenbereiche u.A.</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {employees.map((employee) => (
              <EmployeeRow key={employee.name} {...employee} />
            ))}
          </Table.Body>
        </Table>
      )}

      {isShown === 'alumni' && (
        <Table className="!m-auto" basic="very" size="small" collapsing>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell />
              <Table.HeaderCell>Studienrichtung</Table.HeaderCell>
              <Table.HeaderCell>Aufgabenbereiche u.A.</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {alumni.map((alumnus) => (
              <EmployeeRow key={alumnus.name} withTime={false} {...alumnus} />
            ))}
          </Table.Body>
        </Table>
      )}
    </SegmentContainer>
  )
}

export default DepartmentSegment
