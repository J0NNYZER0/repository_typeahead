import React from 'react';
import PropTypes from 'prop-types';

const SiteAlert = ({
  alert,
}) => (
  <div className="alert">
    {alert}
  </div>
);

SiteAlert.propTypes = {
  alert: PropTypes.string.isRequired,
};

export default SiteAlert;
