import React, { useState } from 'react'
import { Grid, Header, Image, Segment, Table, Menu } from 'semantic-ui-react'

import { employees } from '../../fixtures'
import EmployeeRow from './EmployeeRow'

import styles from './DepartmentSegment.module.scss'

export interface Props {
  backgroundColor: string
}

function DepartmentSegment({ backgroundColor }: Props) {
  const [isShown, setIsShown] = useState(false)

  return (
    <Segment style={{ background: backgroundColor }} vertical id="department">
      <Grid container stackable verticalAlign="top">
        <Grid.Row centered>
          <Header as="h2" textAlign="center" size="huge">
            Unser Institut
          </Header>
        </Grid.Row>

        <Menu pointing fluid widths={2}>
          <Menu.Item
            name="Unser Informatikteam"
            active={!isShown}
            onClick={() => setIsShown(false)}
          />
          <Menu.Item
            name="Institutsteam"
            active={isShown}
            onClick={() => setIsShown(true)}
          />
        </Menu>

        {isShown && [
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
              Gesamthaft sind wir rund 250 Mitarbeiter, Professoren und
              Forscher.
            </p>
          </Grid.Row>,
        ]}

        {!isShown && [
          <Grid.Row centered>
            <Header as="h3">Unsere Informatik-Mitarbeiter</Header>
          </Grid.Row>,
          <Grid.Row centered>
            <Table basic="very" celled collapsing unstackable>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell> </Table.HeaderCell>
                  <Table.HeaderCell>Studienrichtung</Table.HeaderCell>
                  <Table.HeaderCell>Aktuelle Projekte</Table.HeaderCell>
                  <Table.HeaderCell className="mobile hidden">
                    Am Institut seit
                  </Table.HeaderCell>
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
      </Grid>
    </Segment>
  )
}

export default DepartmentSegment
