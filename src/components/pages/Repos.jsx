import React from 'react';
import PropTypes from 'prop-types';
import Repos from '../widgets/Repos';

const ReposPage = ({
  actions, match, repos, site,
}) => (
  <Repos
    isLoading={actions.repos.isLoading}
    q={match.params.q}
    repos={repos}
    searchAllRepos={actions.repos.searchAllRepos}
    site={site}
  />
);

ReposPage.defaultProps = {
  repos: [],
  site: {},
};

ReposPage.propTypes = {
  actions: PropTypes.shape({}).isRequired,
  match: PropTypes.shape({}).isRequired,
  repos: PropTypes.arrayOf(PropTypes.shape({})),
  site: PropTypes.shape({}),
};

export default ReposPage;
