import React from 'react'
import {
  Grid,
  Header,
  Icon,
  SemanticCOLORS,
  SemanticICONS,
} from 'semantic-ui-react'
import styles from './AdvantageColumn.module.scss'

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
      <div className={styles.icon}>
        <Icon circular inverted color={iconColor} size="huge" name={iconName} />
      </div>
      <Header as="h3" size="large">
        {advantageTitle}
      </Header>
      <p className={styles.description}>{advantageText}</p>
    </Grid.Column>
  )
}

export default AdvantageColumn
