import React from 'react';
import PropTypes from 'prop-types';

const TypeAhead = ({ children }) => (
  <ul className="type-ahead">
    {children}
  </ul>
);

TypeAhead.defaultProps = {
  children: {},
};

TypeAhead.propTypes = {
  children: PropTypes.shape({}),
};

export default TypeAhead;
