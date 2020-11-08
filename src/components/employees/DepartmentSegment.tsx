import React, { useState } from 'react'
import { Grid, Header, Image, Segment, Table, Menu } from 'semantic-ui-react'

import { employees, alumni } from '../../data'
import EmployeeRow from './EmployeeRow'

import styles from './DepartmentSegment.module.scss'
import SegmentContainer from '../SegmentContainer'

export interface Props {
  backgroundColor: string
}

function DepartmentSegment({ backgroundColor }: Props) {
  const [isShown, setIsShown] = useState('current')

  return (
    <SegmentContainer
      id="department"
      title="Unser Institut"
      nextUp="#positions"
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
          <Image
            centered
            className={styles.deptImage}
            src="images/institut.jpg"
          />
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
          <Table basic="very" collapsing>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell> </Table.HeaderCell>
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
          <Table basic="very" collapsing>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell> </Table.HeaderCell>
                <Table.HeaderCell>Studienrichtung</Table.HeaderCell>
                <Table.HeaderCell>Aufgabenbereiche u.A.</Table.HeaderCell>
                <Table.HeaderCell>Am Institut bis</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {alumni.map((alumnus) => (
                <EmployeeRow {...alumnus} />
              ))}
            </Table.Body>
          </Table>
        </Grid.Row>,
      ]}
    </SegmentContainer>
  )
}

export default DepartmentSegment
