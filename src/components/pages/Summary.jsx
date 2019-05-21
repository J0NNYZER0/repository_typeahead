import React from 'react';
import PropTypes from 'prop-types';
import RepoSummary from '../widgets/RepoSummary';

const SummaryPage = ({ actions, match, repos }) => (
  <RepoSummary
    getSummary={actions.repos.getSummary}
    repoId={match.params.repoId}
    repos={repos}
  />
);

SummaryPage.defaultProps = {
  repos: [],
};

SummaryPage.propTypes = {
  actions: PropTypes.shape({}).isRequired,
  match: PropTypes.shape({}).isRequired,
  repos: PropTypes.arrayOf(PropTypes.shape({})),
};

export default SummaryPage;
