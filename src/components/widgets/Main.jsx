import React from 'react';
import PropTypes from 'prop-types';
import MainPageHeader from './MainPageHeader';

const Main = ({
  children, location, history, title,
}) => (
  <main>
    <MainPageHeader history={history} location={location} title={title} />
    {children}
  </main>
);

Main.defaultProps = {
  title: '',
};

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.shape({})),
  ]).isRequired,
  history: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({}).isRequired,
  title: PropTypes.string,
};

export default Main;
