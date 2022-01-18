import React from 'react'
import { List } from 'semantic-ui-react'

interface Props {
  header: string
  must: string[]
}

function RequirementColumn({ header, must }: Props) {
  return (
    <div className="flex-1 px-4">
      <h4 className="text-2xl font-normal md:text-3xl font-thesans-bold">
        {header}
      </h4>

      <List bulleted relaxed>
        {must.map((item) => (
          <List.Item key={item}>{item}</List.Item>
        ))}
      </List>
    </div>
  )
}

export default RequirementColumn
