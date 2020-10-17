import React from 'react'
import {
  Grid,
  Header,
  Icon,
  SemanticCOLORS,
  SemanticICONS,
} from 'semantic-ui-react'

interface Props {
  iconName: SemanticICONS
  iconColor: SemanticCOLORS
  advantageTitle: string
  advantageText: string
}

function AdvantageColumn({
  iconName,
  iconColor,
  advantageTitle,
  advantageText,
}: Props) {
  return (
    <Grid.Column>
      <div style={{ margin: '0 auto', width: '120px' }}>
        <Icon circular inverted color={iconColor} size="huge" name={iconName} />
      </div>
      <Header as="h3" textAlign="center" style={{ fontSize: '2em' }}>
        {advantageTitle}
      </Header>
      <p style={{ fontSize: '1.33em' }}>{advantageText}</p>
    </Grid.Column>
  )
}

export default AdvantageColumn
