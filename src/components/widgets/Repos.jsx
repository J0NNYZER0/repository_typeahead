import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { addEllipses } from '../../utils/index';
import Image from './Image';
import preloaderSrc from '../../assets/images/preloader.svg';

class Repos extends Component {
  componentDidMount() {
    const { isLoading, q, searchAllRepos } = this.props;
    isLoading(true);
    searchAllRepos(q);
  }

  render() {
    const { repos, site } = this.props;

    return (
      <ul className="repo-list">
        {repos.length > 0 && site.isLoading === false ? repos.map(el => (
          <li key={el.id} className="repo-item">
            <Link to={`/repo/${el.id}`}>
              <span className="avatar">
                <Image
                  alt={el.owner.login}
                  width="75"
                  source={el.owner.avatar_url}
                />
              </span>
              <span className="full-name">
                {addEllipses(el.full_name, 20)}
              </span>
              <span className="sub-dir-arrow-icon" />
            </Link>
          </li>
        )) : (
          <li className="preloader">
            <Image
              alt="Data is loading..."
              key="preloader"
              source={preloaderSrc}
              width="100"
            />
          </li>
        )}
      </ul>
    );
  }
}

Repos.defaultProps = {
  repos: [],
  site: {},
};

Repos.propTypes = {
  isLoading: PropTypes.func.isRequired,
  q: PropTypes.string.isRequired,
  repos: PropTypes.arrayOf(PropTypes.shape({})),
  searchAllRepos: PropTypes.func.isRequired,
  site: PropTypes.shape({}),
};

export default Repos;
