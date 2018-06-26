import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Grid, Button, Row, Col, ListGroup, ListGroupItem, FormGroup, FormControl } from 'react-bootstrap';
import { FormattedMessage, injectIntl } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Loader } from '../../components';
import Pay from '../Pay';
import './Home.scss';

@injectIntl
@inject('gameStore')
@observer
class Home extends Component {
  componentDidMount() {
    this.props.gameStore.getGames();
  }

  onSearch = ({ target: { value } }) => this.props.gameStore.setFilter(value);

  render() {
    if (this.props.gameStore.isLoading) {
      return <Loader />;
    }

    return (
      <div className="Home">
        <Grid>
          <div className="top text-center">
            <h1 className="title">
              iteka<span className="first">Remote</span><span className="second">Play</span>
            </h1>
            <h2><FormattedMessage id="home.title" /></h2>
            <h4><FormattedMessage id="home.subtitle" /></h4>
            <p>
              <Button bsSize="large" className="callToAction">
                <FormattedMessage id="home.callToAction" />
              </Button>
            </p>
          </div>

          <div className="reasons">
            <h3 className="section-title"><FormattedMessage id="home.reasons.title" /></h3>
            <Row>
              <Col md={3} className="reason">
                <div className="icon">
                  <FontAwesomeIcon icon="desktop" />
                </div>
                <div className="text">
                  <FormattedMessage id="home.reasons.0" />
                </div>
              </Col>
              <Col md={3} className="reason">
                <div className="icon">
                  <FontAwesomeIcon icon="credit-card" />
                </div>
                <div className="text">
                  <FormattedMessage id="home.reasons.1" />
                </div>
              </Col>
              <Col md={3} className="reason">
                <div className="icon">
                  <FontAwesomeIcon icon="gamepad" />
                </div>
                <div className="text">
                  <FormattedMessage id="home.reasons.2" />
                </div>
              </Col>
              <Col md={3} className="reason">
                <div className="icon">
                  <FontAwesomeIcon icon="globe" />
                </div>
                <div className="text">
                  <FormattedMessage id="home.reasons.3" />
                </div>
              </Col>
            </Row>
          </div>

          <div className="paymentTypes">
            <h3 className="section-title"><FormattedMessage id="home.paymentTypes.title" /></h3>
            <h4 className="section-subtitle"><FormattedMessage id="home.paymentTypes.subtitle" /></h4>
            <Pay {...this.props} />
          </div>

          <div className="games">
            <h3 className="section-title"><FormattedMessage id="home.games.title" /></h3>
            <h4 className="section-subtitle"><FormattedMessage id="home.games.subtitle" /></h4>
            <div className="games-list">
              <FormGroup>
                <FormControl
                  type="text"
                  placeholder={this.props.intl.formatMessage({ id: 'home.games.search' })}
                  onChange={this.onSearch}
                />
              </FormGroup>
              <ListGroup>
                {this.props.gameStore.filteredInstances.length ? (
                  this.props.gameStore.filteredInstances.map(game => (
                    <ListGroupItem key={`home${game.id}`}>{game.name}</ListGroupItem>
                  ))
                ) : (
                  <ListGroupItem><FormattedMessage id="home.games.noGame" /></ListGroupItem>
                )}
              </ListGroup>
            </div>
          </div>
          <div className="footer-section">
            <h3 className="section-title"><FormattedMessage id="home.footer.title" /></h3>
            <p>
              <Button bsSize="large" className="callToAction">
                <FormattedMessage id="home.footer.callToAction" />
              </Button>
            </p>
          </div>
        </Grid>
      </div>
    );
  }
}

export default Home;
