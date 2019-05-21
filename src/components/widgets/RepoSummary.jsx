import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { convertDate } from '../../utils/index';
import Image from './Image';
import preloaderSrc from '../../assets/images/preloader.svg';
import RepoCountsMenu from './RepoCountsMenu';

class Summary extends Component {
  componentDidMount() {
    const { getSummary, repoId } = this.props;
    getSummary(repoId);
  }

  render() {
    const { repos } = this.props;

    return (
      <section>
        {repos.length === 1 ? repos.map(el => (
          <div className="summary" key={el.id}>
            <div className="avatar">
              <Image
                alt={el.owner.login}
                width="150"
                source={el.owner.avatar_url}
              />
            </div>
            <div className="counts">
              <RepoCountsMenu
                issues={el.open_issues_count}
                stars={el.stargazers_count}
                watchers={el.watchers_count}
              />
            </div>
            <div className="description">
              {el.description ? el.description : <i>No Description</i>}
            </div>
            <div className="owner-type">
              {`Account type: ${el.owner.type}`}
            </div>
            <div className="created-on">
              {`Created ons ${convertDate(el.created_at)}`}
            </div>
          </div>
        )) : (
          <div className="preloader">
            <Image
              alt="Data is loading..."
              key="preloader"
              source={preloaderSrc}
              width="100"
            />
          </div>
        )}
      </section>
    );
  }
}

Summary.defaultProps = {
  repos: [],
};

Summary.propTypes = {
  getSummary: PropTypes.func.isRequired,
  repoId: PropTypes.string.isRequired,
  repos: PropTypes.arrayOf(PropTypes.shape({})),
};

export default Summary;
