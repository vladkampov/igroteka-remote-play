import React, { Component, Fragment } from 'react';
import { observer, inject } from 'mobx-react';
import { Grid, Row, Col, Alert } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { Loader, PaymentCard, AccountGenerator } from '../../components';

@inject('paymentTypeStore', 'consoleGroupStore', 'userStore')
@observer
class Pay extends Component {
  componentDidMount() {
    const { paymentTypeStore, consoleGroupStore, match: { params: { consoleGroupId } } } = this.props;

    paymentTypeStore.getPaymentTypes();
    if (consoleGroupId) {
      consoleGroupStore.getConsoleGroupDetails(consoleGroupId);
    }
  }

  render() {
    const {
      paymentTypeStore: { instances, isLoading },
      consoleGroupStore: { activeInstance },
      userStore: { userId },
      match: { params: { consoleGroupId } },
    } = this.props;

    if (isLoading) {
      return <Loader />;
    }

    return (
      <div className="Pay">
        <Grid>
          <h2><FormattedMessage id="pay.title" /></h2>
          {consoleGroupId && (
            <Fragment>
              <Alert bsStyle="info">
                <h4>
                  <FormattedMessage
                    id="pay.consoleGroup.title"
                    values={{
                      name: <Link to={`/catalog/consoles/${activeInstance.id}`}>{activeInstance.name}</Link>,
                    }}
                  />
                </h4>
                <p><FormattedMessage id="pay.consoleGroup.body" /></p>
              </Alert>
              {userId ? null : <AccountGenerator />}
            </Fragment>
          )}
          <Row>
            {instances.map(paymentType => (
              <Col md={3} key={paymentType.id}>
                <PaymentCard {...paymentType} consoleGroupId={consoleGroupId} />
              </Col>
            ))}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Pay;
