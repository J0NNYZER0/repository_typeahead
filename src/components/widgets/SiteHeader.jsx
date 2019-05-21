import React from 'react';
import PropTypes from 'prop-types';
import Logo from './Image';
import imgSrc from '../../assets/images/github-logo.svg';

const SiteHeader = ({ title }) => (
  <header>
    <div>
      <Logo
        alt="GitHub Octocat"
        key="logo"
        source={imgSrc}
        width="40"
      />
    </div>
    <div>
      <h1>{title}</h1>
    </div>
  </header>
);

SiteHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SiteHeader;
