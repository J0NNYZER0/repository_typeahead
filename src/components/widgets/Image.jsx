import React from 'react';
import PropTypes from 'prop-types';

const Image = ({
  alt, source, width,
}) => (
  <img
    alt={alt}
    width={width}
    src={source}
  />
);

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
};

export default Image;
