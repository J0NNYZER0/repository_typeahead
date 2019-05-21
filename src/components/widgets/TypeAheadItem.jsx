import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { addEllipses } from '../../utils/index';
import Image from './Image';

const TypeAheadItem = ({ cat1, cat2, cat3 }) => (
  <li className="type-ahead-item">
    <Link to={`/repo/${cat3}`}>
      <span>
        <Image
          alt={cat1}
          width="25"
          source={cat2}
        />
      </span>
      <span>{addEllipses(cat1, 20)}</span>
      <span className="sub-dir-arrow-icon" />
    </Link>
  </li>
);

TypeAheadItem.defaultProps = {
  cat1: '',
  cat2: '',
  cat3: 0,
};

TypeAheadItem.propTypes = {
  cat1: PropTypes.string,
  cat2: PropTypes.string,
  cat3: PropTypes.number,
};

export default TypeAheadItem;
