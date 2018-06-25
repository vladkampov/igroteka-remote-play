import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import {
  Grid,
  Row,
  Col,
  Carousel,
  Breadcrumb,
  ListGroup,
  ListGroupItem,
  Alert,
  Button,
} from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { Loader } from '../../components';
import config from '../../config';
import { getYouTubeId } from '../../utils';

@inject('gameStore', 'paymentTypeStore')
@observer
class GameDetails extends Component {
  componentDidMount() {
    const {
      gameStore,
      paymentTypeStore,
      history,
      match: { params: { gameId, paymentTypeId } },
    } = this.props;

    gameStore.getGameDetails(gameId)
      .catch(() => history.push('/not-found'));


    if (paymentTypeId) {
      paymentTypeStore.getPaymentTypeDetails(paymentTypeId);
    }
  }

  handleClick = () => {
    const { gameStore: { activeInstance }, match: { params: { paymentTypeId } }, history } = this.props;

    const avalaibleConsoleGroups = activeInstance.consoleGroups.filter(({ available }) => available === true);

    if (avalaibleConsoleGroups.length) {
      if (!paymentTypeId) {
        return history.push(`/pay/${avalaibleConsoleGroups[0]._id}`);
      }

      // eslint-disable-next-line no-console
      console.log(`Pay for console ${avalaibleConsoleGroups[0]._id} with paymentTypeId ${paymentTypeId}`);
    }

    return null;
  }

  render() {
    const {
      gameStore: { activeInstance },
      paymentTypeStore: { activeInstance: paymentType },
      match: { params: { paymentTypeId } },
    } = this.props;

    if (!activeInstance._id) {
      return <Loader />;
    }

    const { id, name, description, images = [], consoleGroups, youtube_url: ytUrl } = activeInstance;

    return (
      <div className="Pay">
        <Grid>
          <Breadcrumb>
            <Breadcrumb.Item href="/"><FormattedMessage id="breadcrumbs.home" /></Breadcrumb.Item>
            <Breadcrumb.Item href="/catalog"><FormattedMessage id="breadcrumbs.catalog" /></Breadcrumb.Item>
            <Breadcrumb.Item href="/catalog/games">
              <FormattedMessage id="breadcrumbs.games" />
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{name}</Breadcrumb.Item>
          </Breadcrumb>
          <h2>{name}</h2>

          <Row>
            <Col md={4}>
              <Carousel>
                {images.map(({ url }) => (
                  <Carousel.Item key={`${id}_image_${url}`}>
                    <img src={`${config('CORE_API_DOMAIN')}${url}`} alt="" />
                  </Carousel.Item>
                ))}
              </Carousel>
              <div className="video">
                <h4><FormattedMessage id="gameDetails.trailer" />:</h4>
                <iframe
                  width="100%"
                  height="215"
                  src={`https://www.youtube.com/embed/${getYouTubeId(ytUrl)}`}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  title="video"
                />
              </div>
            </Col>
            <Col md={8}>
              <p>
                {description}
              </p>
              <h4><FormattedMessage id="gameDetails.consoleGroups" />:</h4>
              <ListGroup>
                {consoleGroups.map(consoleGroup => (
                  <ListGroupItem key={`${id}_consoleGroup_${consoleGroup.id}`}>
                    <Link to={`/consoles/${consoleGroup.id}`}>
                      {consoleGroup.name}
                    </Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
              {paymentTypeId && (
                <Alert bsStyle="info">
                  <h4>
                    <FormattedMessage
                      id="gameDetails.pay.title"
                      values={{
                        name: <Link to="/pay">{paymentType.name}</Link>,
                      }}
                    />
                  </h4>
                  <p><FormattedMessage id="gameDetails.pay.body" /></p>
                </Alert>
              )}
              <Button
                bsSize="large"
                onClick={this.handleClick}
                disabled={!consoleGroups.filter(({ available }) => available === true).length}
              >
                <FormattedMessage id="gameDetails.buyButton" />
              </Button>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default GameDetails;
