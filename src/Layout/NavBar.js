import React, { useContext, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

import { Link } from "react-router-dom";

import { UserContext } from "../Context/UserContext";

const NavBar = (props) => {
  const context = useContext(UserContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/" className="title_nav">
          GIT Api
        </NavbarBrand>
        <NavbarText className="text-white">
          {context.user?.email ? context.user?.email : ""}
        </NavbarText>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar className="flex_nav">
          <Nav className="mr-auto" navbar>
            {context.user ? (
              <NavItem>
                <NavLink
                  onClick={() => {
                    context.setUser(null);
                  }}
                >
                  LogOut
                </NavLink>
              </NavItem>
            ) : (
              <>
                <NavItem>
                  <NavLink tag={Link} to="/SignUp">
                    SignUp
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/SignIn">
                    SignIn
                  </NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
