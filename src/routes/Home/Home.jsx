import React from 'react';
import { Grid } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';


export default () => (
  <div className="">
    <Grid>
      <h1><FormattedMessage id="home.title" /></h1>
      <h2><FormattedMessage id="home.subtitle" /></h2>
      <p><FormattedMessage id="home.callToAction" /></p>

      <h3><FormattedMessage id="home.reasons.title" /></h3>
      <ul className="reasons">
        <li><FormattedMessage id="home.reasons.0" /></li>
        <li><FormattedMessage id="home.reasons.1" /></li>
        <li><FormattedMessage id="home.reasons.2" /></li>
        <li><FormattedMessage id="home.reasons.4" /></li>
      </ul>

      <h3><FormattedMessage id="home.paymentTypes.title" /></h3>
      <p><FormattedMessage id="home.paymentTypes.subscription" /></p>


      <h3><FormattedMessage id="home.games.title" /></h3>
      <p><FormattedMessage id="home.games.subtitle" /></p>
      <p><FormattedMessage id="home.games.search" /></p>


      <p><FormattedMessage id="home.footer.title" /></p>
      <p><FormattedMessage id="home.footer.callToAction" /></p>
    </Grid>
  </div>
);
