import React from 'react';
import rg4js from 'raygun4js';

// This has not been tested with a browser that doesn't support the window.performance api
export default function LogRenderingTime(Component) {
  let boot = 0;

  class LogRenderTime extends React.Component {
    constructor(props) {
      super(props);

      boot = window.performance ? performance.now() : 0;
    }

    componentDidMount() {
      const renderTime = window.performance ? performance.now() - boot : 0;

      rg4js('trackEvent', {
        type: 'customTimings',
        timings: {
          custom1: renderTime
        }
      });
    }

    render() {
      return <Component {...this.props} />;
    }
  }

  return LogRenderTime;
}
