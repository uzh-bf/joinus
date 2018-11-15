import React from 'react'
import {Icon} from 'semantic-ui-react'
import {slide as Menu} from 'react-burger-menu'

const BurgerMenu = () => {
    return (
        <div>
            <div class="burgerMenuUnderlay">
            </div>

            <Menu isOpen={false}>
                <h3>
                    Dein nächster Job?
                </h3>
                <br/>
                <br/>
                <a className="menu-item" href="#citations" >
                    <Icon name="comment"/> Was sagen unsere Mitarbeiter
                </a>
                <br/>
                <a className="menu-item" href="#advantages">
                    <Icon name="thumbs up"/> Deine Vorteile bei uns
                </a>
                <br/>
                <a className="menu-item" href="#project">
                    <Icon name="code"/> Aktuelle Projekte
                </a>
                <br/>
                <a className="menu-item" href="#team">
                    <Icon name="id badge"/> Unsere Teams
                </a>
                <br/>
                <a className="menu-item" href="#requirements">
                    <Icon name="clipboard list"/> Was du mitbringen solltest
                </a>
                <br/>
                <a className="menu-item" href="#institute">
                    <Icon name="building"/> Über unser Institut
                </a>
                <br/>
                <a className="menu-item" href="#application">
                    <Icon name="street view"/> Bewerbungsformular
                </a>
            </Menu>
        </div>

    )
}

export default BurgerMenu
