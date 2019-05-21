import React from 'react';
import PropTypes from 'prop-types';
import { addEllipses } from '../../utils/index';
import SiteBackButton from './SiteBackButton';

const MainPageHeader = ({
  history, location, title,
}) => (
  <ul className="page-header">
    <li>
      <SiteBackButton history={history} location={location} />
    </li>
    <li>
      {title && <h2>{addEllipses(title, 25)}</h2>}
    </li>
  </ul>
);

MainPageHeader.defaultProps = {
  title: '',
};

MainPageHeader.propTypes = {
  history: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({}).isRequired,
  title: PropTypes.string,
};

export default MainPageHeader;
