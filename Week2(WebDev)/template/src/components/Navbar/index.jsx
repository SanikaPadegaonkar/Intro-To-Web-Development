import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
          <NavLink to='/Music' activeStyle>
            Music Inventory
          </NavLink>
          <NavLink to='/Sports' activeStyle>
            Sports Inventory
          </NavLink>
          <NavLink to='/Tech' activeStyle>
            Tech Inventory
          </NavLink>
          <NavLink to='/ShoppingCart' activeStyle>
            Cart
          </NavLink>
          <NavLink to='/ContactUS' activeStyle>
            Contact Us
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Subscribe</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};
  
export default Navbar;