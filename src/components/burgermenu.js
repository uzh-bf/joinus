import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu'

const BurgerMenu = () => (
  <Menu >
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
    <a className="menu-item" href="/desserts">
      Desserts
    </a>
  </Menu>
)

export default BurgerMenu
