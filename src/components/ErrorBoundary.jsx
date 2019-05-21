import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      stack: null,
    };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    this.setState({
      error,
      stack: info.componentStack,
    });

    if (window.rg4js) {
      window.rg4js('send', error);
    }
  }

  render() {
    const { error, stack } = this.state;
    const { children } = this.props;

    if (error) {
      // You can render any custom fallback UI
      return (
        <div className="error">
          <h4>Something went wrong</h4>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {error.toString()}
            <br />
            {stack}
          </details>
        </div>
      );
    }

    return children;
  }
};

ErrorBoundary.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ErrorBoundary;
