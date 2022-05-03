import React from 'react'
import { Bars, Nav, NavIcon, NavLink } from './Navbar'

const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavLink to ="/">9ja FoodHub </NavLink>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                    <Bars />
                </NavIcon>
            </Nav>

        </>
    );
}

export default Navbar