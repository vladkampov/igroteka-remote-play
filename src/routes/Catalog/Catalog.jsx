import React, { Component, Fragment } from 'react';
import { observer, inject } from 'mobx-react';
import { Grid, Row, Col, Alert } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { Submenu, CatalogCard, Loader, Slider, AccountGenerator } from '../../components';


@inject('gameStore', 'consoleGroupStore', 'paymentTypeStore', 'userStore')
@observer
class Catalog extends Component {
  componentDidMount() {
    const {
      gameStore,
      consoleGroupStore,
      paymentTypeStore,
      history,
      match: { params: { listType, paymentTypeId } },
    } = this.props;

    if (!listType) {
      history.push('/catalog/consoles');
    } else if (listType !== 'consoles' && listType !== 'games') {
      history.push('/not-found');
    }

    consoleGroupStore.getConsoleGroups();
    gameStore.getGames();

    if (paymentTypeId) {
      paymentTypeStore.getPaymentTypeDetails(paymentTypeId);
    }
  }

  renderGrid = () => {
    const { gameStore, consoleGroupStore, match: { params: { listType, paymentTypeId } } } = this.props;
    const { filteredInstances } = listType === 'games' ? gameStore : consoleGroupStore;

    if (gameStore.isLoading || consoleGroupStore.isLoading) {
      return <Loader />;
    }

    return filteredInstances.map(instance => (
      <Col md={4} key={instance.id}>
        <CatalogCard type={listType} paymentTypeId={paymentTypeId} {...instance} />
      </Col>
    ));
  }

  render() {
    const {
      paymentTypeStore: { activeInstance },
      userStore: { userId },
      match: { params: { listType, paymentTypeId } },
    } = this.props;

    return (
      <div>
        <Slider />
        <Submenu listType={listType} />
        <Grid>
          <Row>
            {paymentTypeId && (
              <Fragment>
                <Alert bsStyle="info">
                  <h4>
                    <FormattedMessage
                      id="catalog.pay.title"
                      values={{
                        name: <Link to="/pay">{activeInstance.name}</Link>,
                      }}
                    />
                  </h4>
                  <p><FormattedMessage id="catalog.pay.body" /></p>
                </Alert>
                {userId ? null : <AccountGenerator />}
              </Fragment>
            )}
            {this.renderGrid()}
          </Row>
        </Grid>
      </div>
    );
  }
}


export default Catalog;
