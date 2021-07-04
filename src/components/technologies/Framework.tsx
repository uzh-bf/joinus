import Image from 'next/image'
import React from 'react'
import { Header } from 'semantic-ui-react'
import styles from './Framework.module.scss'

interface Props {
  image: string
  title: string
}

function Framework({ image, title }: Props) {
  const ImageSrc = require(`../../../public/images/slideshow/${image}`)
  return (
    <div className={styles.container}>
      <Image src={ImageSrc} />
      <Header className={styles.description}>{title}</Header>
    </div>
  )
}

export default Framework
