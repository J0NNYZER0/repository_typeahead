import React from 'react';
import PropTypes from 'prop-types';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import ErrorBoundary from './ErrorBoundary';
import App from './App';

const Root = ({ history, store }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </ConnectedRouter>
  </Provider>
);

Root.propTypes = {
  history: PropTypes.shape({}).isRequired,
  store: PropTypes.shape({}).isRequired,
};
export default Root;
