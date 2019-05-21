import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from '../forms/SearchForm';

const SearchPage = ({
  actions, siteAlertHandler, history, repos, site,
}) => (
  <SearchForm
    actions={actions}
    history={history}
    repos={repos}
    site={site}
    siteAlertHandler={siteAlertHandler}
    search="full_name"
  />
);

SearchPage.defaultProps = {
  repos: [],
  site: {},
};

SearchPage.propTypes = {
  actions: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
  repos: PropTypes.arrayOf(PropTypes.shape({})),
  site: PropTypes.shape({}),
  siteAlertHandler: PropTypes.func.isRequired,
};

export default SearchPage;
