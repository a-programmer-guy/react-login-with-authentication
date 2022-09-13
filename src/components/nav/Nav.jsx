import React, { useState } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

import './nav.css';
import Button from '../button/Button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [loggedIn, setLoggedIn] = useState(false);

  const navigate = useNavigate();

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavbarBrand href="/">NoCtrl</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="me-auto" navbar>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="https://github.com/a-programmer-guy">GitHub</NavLink>
          </NavItem>
        </Nav>
        {loggedIn ? (
          <>
            <UncontrolledDropdown className="me-2">
              <DropdownToggle nav caret>
                User Name
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => setLoggedIn(!loggedIn)}>
                  Logout
                </DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            {/* <NavLink href="/logout">Logout</NavLink>
            <NavbarText className="ml-2">User Name</NavbarText> */}
          </>
        ) : (
          <>
            <NavLink href="/login">Login</NavLink>
            <NavLink href="/register">Register</NavLink>
          </>
        )}
      </Collapse>
    </Navbar>
  );
};

export default Navigation;
