import React, { Fragment, Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Glyphicon } from 'react-bootstrap';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { FormattedMessage } from 'react-intl';
import './Header.scss';

@inject('userStore')
@observer
@withRouter
class Header extends Component {
  handleNotificationClick = (e, id) => {
    e.preventDefault();

    this.props.userStore.markNotificationReaded(id)
      .then(() => this.forceUpdate());
  }

  render() {
    const { userStore, history } = this.props;


    return (
      <header className="Header">
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/" className="navbar-brand">
                iteka<span className="first">Remote</span><span className="second">Play</span>
              </Link>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <LinkContainer to="/catalog/consoles">
              <NavItem eventKey={1}>
                <FormattedMessage id="header.catalog" />
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
              <Fragment>
                <NavDropdown
                  className={`notifications ${userStore.unreadedNotifications.length && 'has-notifications'}`}
                  eventKey={6}
                  title={<Glyphicon glyph="bell" />}
                  id="notifications-dropdown"
                >
                  {userStore.unreadedNotifications.length
                    ? userStore.unreadedNotifications.map(({ _id, body }) => (
                      <li className="notification" key={_id}>
                        {body}
                        <a href="" onClick={e => this.handleNotificationClick(e, _id)}>
                          <Glyphicon glyph="ok" />
                        </a>
                      </li>
                    )) : (
                      <li className="empty"><FormattedMessage id="header.emptyNotifications" /></li>
                    )
                  }
                </NavDropdown>
                <NavDropdown eventKey={6} title={userStore.user.username} id="user-dropdown">
                  <LinkContainer to="/profile">
                    <MenuItem eventKey={6.1}><FormattedMessage id="header.profile" /></MenuItem>
                  </LinkContainer>
                  <MenuItem divider />
                  <MenuItem
                    eventKey={6.2}
                    onClick={() => {
                      userStore.logout();
                      history.push('/');
                    }}
                  >
                    <FormattedMessage id="header.logout" />
                  </MenuItem>
                </NavDropdown>
              </Fragment>
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
  }
}

export default Header;
