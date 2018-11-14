import React from 'react'
import { slide as Menu } from 'react-burger-menu'

const BurgerMenu = () => {
  // could use isOpen prop to make background clickable and make it open the menu as well
  return (
    <div>
      <div class="burgerMenuUnderlay">
      </div>

      <Menu>
        <a className="menu-item" href="www.google.com">
          Home
        </a>
        <br/>
        <a className="menu-item" href="/burgers">
          Burgers
        </a>
        <br/>
        <a className="menu-item" href="/pizzas">
          Pizzas
        </a>
        <br/>
        <a className="menu-item" href="#bewerbungsformular">
          Bewerbungsformular
        </a>
      </Menu>
    </div>

  )
}

export default BurgerMenu
