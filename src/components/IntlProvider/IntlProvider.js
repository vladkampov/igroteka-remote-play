import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';


const mapStateToProps = state => ({
  key: state.locale.lang,
  locale: state.locale.lang,
  messages: state.locale.messages,
});

export default connect(mapStateToProps)(IntlProvider);
