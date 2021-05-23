import React from 'react'
import { Header, Image } from 'semantic-ui-react'
import styles from './Framework.module.scss'

interface Props {
  image: string
  title: string
}

function Framework({ image, title }: Props) {
  return (
    <div className={styles.container}>
      <Image src={image} />
      <Header className={styles.description}>{title}</Header>
    </div>
  )
}

export default Framework
