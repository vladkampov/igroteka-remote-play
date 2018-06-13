import React from 'react';
import { FormattedMessage } from 'react-intl';

const Header  = () => (
  <header>
    Logo
    <FormattedMessage id="header.about" />
    <FormattedMessage id="header.download" />
    <FormattedMessage id="header.pay" />
    <FormattedMessage id="header.logout" />
    <FormattedMessage id="header.profile" />
    <FormattedMessage id="header.login" />
  </header>
);

export default Header;
