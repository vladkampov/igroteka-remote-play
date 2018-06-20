import React, { Fragment } from 'react';
import { observer, inject } from 'mobx-react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { FormattedMessage } from 'react-intl';


const Header = ({ userStore, history }) => (
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
        <LinkContainer to="/catalog/consoles">
          <NavItem eventKey={1}>
            <FormattedMessage id="header.catalog" />
          </NavItem>
        </LinkContainer>
        <LinkContainer to="/about">
          <NavItem eventKey={2}>
            <FormattedMessage id="header.about" />
          </NavItem>
        </LinkContainer>
        <LinkContainer to="/download">
          <NavItem eventKey={3}>
            <FormattedMessage id="header.download" />
          </NavItem>
        </LinkContainer>
        <LinkContainer to="/pay">
          <NavItem eventKey={4} href="#">
            <FormattedMessage id="header.pay" />
          </NavItem>
        </LinkContainer>
      </Nav>
      <Nav pullRight>
        {userStore.user ? (
          <NavDropdown eventKey={6} title={userStore.user.username} id="basic-nav-dropdown">
            <LinkContainer to="/profile">
              <MenuItem eventKey={6.1}><FormattedMessage id="header.profile" /></MenuItem>
            </LinkContainer>
            <MenuItem divider />
            <MenuItem onClick={() => {
              userStore.logout();
              history.push('/');
            }} eventKey={6.2}><FormattedMessage id="header.logout" /></MenuItem>
          </NavDropdown>
        ) : (
          <Fragment>
            <LinkContainer to="/login">
              <NavItem eventKey={5}>
                <FormattedMessage id="header.login" />
              </NavItem>
            </LinkContainer>
            <LinkContainer to="/signup">
              <NavItem eventKey={7}>
                <FormattedMessage id="header.signup" />
              </NavItem>
            </LinkContainer>
          </Fragment>
        )}
      </Nav>
    </Navbar>
  </header>
);

export default inject('userStore')(observer(withRouter(Header)));
