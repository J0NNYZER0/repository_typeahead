import React from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import starIcon from '../../assets/images/star-icon.svg';
import watchIcon from '../../assets/images/watch-icon.svg';
import issueIcon from '../../assets/images/issue-icon.svg';

const RepoCountsMenu = ({ stars, watchers, issues }) => (
  <ul className="counts-menu">
    <li>
      <Image
        alt="Stargazer Icon"
        source={starIcon}
        width="15"
      />
      <span>{stars}</span>
    </li>
    <li>
      <Image
        alt="Watch Icon"
        source={watchIcon}
        width="18"
      />
      <span>{watchers}</span>
    </li>
    <li>
      <Image
        alt="Issue Icon"
        source={issueIcon}
        width="15"
      />
      <span>{issues}</span>
    </li>
  </ul>
);

RepoCountsMenu.defaultProps = {
  issues: 0,
  stars: 0,
  watchers: 0,
};

RepoCountsMenu.propTypes = {
  issues: PropTypes.number,
  stars: PropTypes.number,
  watchers: PropTypes.number,
};

export default RepoCountsMenu;
