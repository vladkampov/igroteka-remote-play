import React, { Component, Fragment } from 'react';
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
import { Loader, AccountGenerator } from '../../components';
import config from '../../config';

@inject('consoleGroupStore', 'paymentTypeStore', 'userStore')
@observer
class ConsoleGroupDetails extends Component {
  componentDidMount() {
    const {
      consoleGroupStore,
      paymentTypeStore,
      history,
      match: { params: { consoleGroupId, paymentTypeId } },
    } = this.props;

    consoleGroupStore.getConsoleGroupDetails(consoleGroupId)
      .catch(() => history.push('/not-found'));


    if (paymentTypeId) {
      paymentTypeStore.getPaymentTypeDetails(paymentTypeId);
    }
  }

  handleClick = () => {
    const { match: { params: { consoleGroupId, paymentTypeId } }, history } = this.props;

    if (!paymentTypeId) {
      return history.push(`/pay/${consoleGroupId}`);
    }

    // eslint-disable-next-line no-console
    console.log(`Pay for console ${consoleGroupId} with paymentTypeId ${paymentTypeId}`);
    return null;
  }

  render() {
    const {
      consoleGroupStore: { activeInstance },
      userStore: { userId },
      paymentTypeStore: { activeInstance: paymentType },
      match: { params: { paymentTypeId } },
    } = this.props;

    if (!activeInstance._id) {
      return <Loader />;
    }

    const { id, name, description, images = [], games, available } = activeInstance;

    return (
      <div className="Pay">
        <Grid>
          <Breadcrumb>
            <Breadcrumb.Item href="/"><FormattedMessage id="breadcrumbs.home" /></Breadcrumb.Item>
            <Breadcrumb.Item href="/catalog"><FormattedMessage id="breadcrumbs.catalog" /></Breadcrumb.Item>
            <Breadcrumb.Item href="/catalog/consoles">
              <FormattedMessage id="breadcrumbs.consoles" />
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
            </Col>
            <Col md={8}>
              <p>
                {description}
              </p>
              <h4><FormattedMessage id="consoleGroupDetails.games" />:</h4>
              <ListGroup>
                {games.map(game => (
                  <ListGroupItem key={`${id}_game_${game.id}`}>
                    <Link to={`/games/${game.id}`}>
                      {game.name}
                    </Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
              {paymentTypeId && (
                <Fragment>
                  <Alert bsStyle="info">
                    <h4>
                      <FormattedMessage
                        id="consoleGroupDetails.pay.title"
                        values={{
                          name: <Link to="/pay">{paymentType.name}</Link>,
                        }}
                      />
                    </h4>
                    <p><FormattedMessage id="consoleGroupDetails.pay.body" /></p>
                  </Alert>
                  {userId ? null : <AccountGenerator />}
                </Fragment>
              )}
              <Button bsSize="large" onClick={this.handleClick} disabled={!available}>
                <FormattedMessage id="consoleGroupDetails.buyButton" />
              </Button>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default ConsoleGroupDetails;
