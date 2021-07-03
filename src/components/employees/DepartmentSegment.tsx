import Image from 'next/image'
import React, { useState } from 'react'
import { Grid, Header, Menu, Table } from 'semantic-ui-react'
import DeptImage from '../../../public/images/people/institut.jpg'
import { alumni, employees } from '../../data'
import SegmentContainer from '../SegmentContainer'
import styles from './DepartmentSegment.module.scss'
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
      nextUp="#requirements"
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

      {isShown === 'department' && [
        <Grid.Row centered>
          <Header as="h3">Unsere Instituts-Mitarbeiter</Header>
        </Grid.Row>,
        <Grid.Row className={styles.imageRow}>
          <Image src={DeptImage} />
        </Grid.Row>,
        <Grid.Row centered>
          <p>
            Gesamthaft sind wir rund 250 Mitarbeiter, Professoren und Forscher.
          </p>
        </Grid.Row>,
      ]}

      {isShown === 'current' && [
        <Grid.Row centered>
          <Header as="h3">Unser Team</Header>
        </Grid.Row>,
        <Grid.Row centered>
          <Table basic="very" size="small" collapsing>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell />
                <Table.HeaderCell>Studienrichtung</Table.HeaderCell>
                <Table.HeaderCell>Aufgabenbereiche u.A.</Table.HeaderCell>
                <Table.HeaderCell>Am Institut seit</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {employees.map((employee) => (
                <EmployeeRow {...employee} />
              ))}
            </Table.Body>
          </Table>
        </Grid.Row>,
      ]}

      {isShown === 'alumni' && [
        <Grid.Row centered>
          <Header as="h3">Unsere Alumni (seit 2020)</Header>
        </Grid.Row>,
        <Grid.Row centered>
          <Table basic="very" size="small" collapsing>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell />
                <Table.HeaderCell>Studienrichtung</Table.HeaderCell>
                <Table.HeaderCell>Aufgabenbereiche u.A.</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {alumni.map((alumnus) => (
                <EmployeeRow withTime={false} {...alumnus} />
              ))}
            </Table.Body>
          </Table>
        </Grid.Row>,
      ]}
    </SegmentContainer>
  )
}

export default DepartmentSegment
