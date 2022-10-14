import animateScrollTo from 'animated-scroll-to'
import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Button, Icon } from 'semantic-ui-react'
import styles from './BurgerMenu.module.css'

function BurgerMenu() {
  return (
    <div>
      <Button
        className="animate-bounce  fixed !bg-[#00023e] top-8 md:top-auto md:bottom-8 right-4 !text-white !z-10"
        onClick={() => animateScrollTo(document.querySelector('#application'))}
      >
        Jetzt bewerben!
      </Button>

      <div className={styles.burgerMenuUnderlay} />

      <Menu isOpen={false}>
        <a
          href="#"
          onClick={() => animateScrollTo(document.querySelector('#top'))}
        >
          <h3>Dein neuer Job?</h3>
        </a>
        <br />
        <br />
        <a
          href="#"
          onClick={() => animateScrollTo(document.querySelector('#citations'))}
        >
          <Icon name="comment" /> Was sagen unsere Mitarbeiter
        </a>
        <br />
        <a
          href="#"
          onClick={() => animateScrollTo(document.querySelector('#advantages'))}
        >
          <Icon name="thumbs up" /> Was wir dir bieten
        </a>
        <br />
        <a
          href="#"
          onClick={() => animateScrollTo(document.querySelector('#projects'))}
        >
          <Icon name="code" /> Unsere Projekte
        </a>
        <br />
        <a
          href="#"
          onClick={() => animateScrollTo(document.querySelector('#positions'))}
        >
          <Icon name="user" /> Positionen am IBF
        </a>
        <br />
        <a
          href="#"
          onClick={() =>
            animateScrollTo(document.querySelector('#technologies'))
          }
        >
          <Icon name="cog" /> Unsere Lieblingstechnologien
        </a>
        <br />
        <a
          href="#"
          onClick={() =>
            animateScrollTo(document.querySelector('#requirements'))
          }
        >
          <Icon name="clipboard list" /> Was du mitbringen solltest
        </a>
        <br />

        <a
          href="#"
          onClick={() => animateScrollTo(document.querySelector('#teams'))}
        >
          <Icon name="id badge" /> Unsere Teams
        </a>
        <br />
        <a
          href="#"
          onClick={() => animateScrollTo(document.querySelector('#department'))}
        >
          <Icon name="building" /> Unser Institut
        </a>
        <br />
        <a
          href="#"
          onClick={() =>
            animateScrollTo(document.querySelector('#application'))
          }
        >
          <Icon name="street view" /> Jetzt bewerben!
        </a>
      </Menu>
    </div>
  )
}

export default BurgerMenu
