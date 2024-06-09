import React from "react";
import {
  NavContainer,
  NavElementsLeft,
  NavLink,
  NavWrapper,
} from "./NavbarElements";

function Navbar() {
  return (
    <NavContainer>
      <NavWrapper>
        <NavElementsLeft>
          <NavLink to="/"> Expense Tracker </NavLink>
        </NavElementsLeft>
      </NavWrapper>
    </NavContainer>
  );
}

export default Navbar;