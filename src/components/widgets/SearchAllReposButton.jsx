import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SearchAllReposButton = ({ q }) => (
  <li
    className="type-ahead-item"
  >
    <Link to={`/repos/${q}`}>
      <span className="search-icon" />
      <span>{q}</span>
      <span className="sub-dir-arrow-icon" />
    </Link>
  </li>
);

SearchAllReposButton.propTypes = {
  q: PropTypes.string.isRequired,
};

export default SearchAllReposButton;
