import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { FormStore } from 'reactive-mobx-form';
import { addLocaleData } from 'react-intl';
import enLang from 'react-intl/locale-data/en';
import ruLang from 'react-intl/locale-data/ru';
import ukLang from 'react-intl/locale-data/uk';
import { IntlProvider } from './components';
import Router from './routes';
import UiStore from './store/uiStore';
import DomainStore from './store/domainStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';

addLocaleData([...enLang, ...ruLang, ...ukLang]);

const store = Object.assign({}, new DomainStore(), { uiStore: new UiStore(), formStore: new FormStore() });

ReactDOM.render(
  <Provider {...store}>
    <IntlProvider>
      <Router />
    </IntlProvider>
  </Provider>,
  document.getElementById('root')
);
