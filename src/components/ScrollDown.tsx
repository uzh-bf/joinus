import animateScrollTo from 'animated-scroll-to'
import React from 'react'
import { Icon } from 'semantic-ui-react'
import styles from './ScrollDown.module.css'

interface Props {
  scrollTo: string
  inverted?: boolean
}

function ScrollDown({ scrollTo, inverted }: Props) {
  return (
    <a
      href="#"
      onClick={() => animateScrollTo(document.querySelector(scrollTo))}
    >
      <div className={styles.downArrow}>
        <Icon inverted={inverted} name="chevron down" size="huge" />
      </div>
    </a>
  )
}

export default ScrollDown
