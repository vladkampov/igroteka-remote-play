import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import IntlProvider from './components/IntlProvider';
import Router from './routes';
import UiStore from './store/uiStore';
import DomainStore from './store/domainStore';
import './index.scss';

addLocaleData([...en]);

const store = Object.assign({}, new DomainStore(), { uiStore: new UiStore() });

ReactDOM.render(
  <Provider {...store}>
    <IntlProvider>
      <Router />
    </IntlProvider>
  </Provider>,
  document.getElementById('root')
);
