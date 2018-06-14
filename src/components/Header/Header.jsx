import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const Header  = () => (
  <header className="Header">
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/" className="navbar-brand">
            Logo
          </Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <NavItem eventKey={1} href="/">
          <FormattedMessage id="header.home" />
        </NavItem>
        <NavItem eventKey={2} href="#">
          <FormattedMessage id="header.about" />
        </NavItem>
        <NavItem eventKey={3} href="#">
          <FormattedMessage id="header.download" />
        </NavItem>
        <NavItem eventKey={4} href="#">
          <FormattedMessage id="header.pay" />
        </NavItem>
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={5} href="#">
          <FormattedMessage id="header.login" />
        </NavItem>
        <NavDropdown eventKey={6} title="User" id="basic-nav-dropdown">
          <MenuItem eventKey={6.1}><FormattedMessage id="header.profile" /></MenuItem>
          <MenuItem divider />
          <MenuItem eventKey={6.2}><FormattedMessage id="header.logout" /></MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>
  </header>
);

export default Header;
