import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { throttle, debounce } from 'lodash';
import TextInput from '../inputs/TextInput';
import Preloader from '../widgets/Image';
import preloaderSrc from '../../assets/images/preloader.svg';
import TypeAhead from '../widgets/TypeAhead';
import SearchAllReposButton from '../widgets/SearchAllReposButton';
import TypeAheadItem from '../widgets/TypeAheadItem';

class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 0,
      q: '',
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.autoCompleteDebounced = debounce(this.autoComplete, 1000);
    this.autoCompleteThrottled = throttle(this.autoComplete, 500);
    this.renderDropDownMenu = this.renderDropDownMenu.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  autoComplete(q) {
    const { actions } = this.props;

    if (q.length > 0) {
      this.setState({ page: 1 }, () => {
        actions.repos.isLoading(true);
        actions.repos.searchLimitedRepos(q);
      });
    }
  }

  handleKeyPress(e) {
    const { q } = this.state;
    const { actions, history, siteAlertHandler } = this.props;

    if (e.keyCode === 13) {
      e.preventDefault();
      if (q.length === 0) {
        siteAlertHandler('Enter a valid search term', 3000);
      } else {
        actions.repos.searchLimitedRepos(q);
        history.push(`/repos/${q}`);
      }
    }
  }

  handleOnChange(e) {
    this.setState({ q: e.target.value }, () => {
      const { q } = this.state;

      if (q.length < 5) {
        this.autoCompleteThrottled(q);
      } else {
        this.autoCompleteDebounced(q);
      }
    });
  }

  handleScroll() {
    const {
      page, q,
    } = this.state;
    const { actions } = this.props;
    window.requestAnimationFrame(() => {
      if (page === 2 || window.innerHeight + document.documentElement.scrollTop
        === document.documentElement.scrollHeight) {
        this.setState({ page: page + 1 }, () => {
          actions.repos.isLoading(true);
          actions.repos.searchPaginatedRepos(q, page + 1);
        });
      }
    });
  }

  renderDropDownMenu() {
    const { repos, search, site } = this.props;
    const { q } = this.state;
    const list = repos.map(el => (
      <TypeAheadItem
        cat1={el[search]}
        cat2={el.owner.avatar_url}
        cat3={el.id}
        key={`${el.id}_${Math.random()}`}
      />
    ));

    return (
      <div>
        <SearchAllReposButton key={Math.random()} q={q} />
        {site.isLoading === false || list.length > 0 ? list : null}
        {site.isLoading === true && (
        <li className="preloader">
          <Preloader
            alt="Data is loading..."
            key="preloader"
            source={preloaderSrc}
            width="100"
          />
        </li>
        )
        }
      </div>
    );
  }

  render() {
    const { q } = this.state;

    return (
      <form className="search-form">
        <TextInput
          classNames="search-input"
          inputName="search"
          onChangeHandler={this.handleOnChange}
          onKeyDownHandler={this.handleKeyPress}
          placeholder="Search top github repos"
          ref={this.nav}
          value={q}
        />
        <TypeAhead>
          {q !== '' ? this.renderDropDownMenu() : null}
        </TypeAhead>
      </form>
    );
  }
}

SearchForm.defaultProps = {
  repos: [],
  site: {},
  siteAlertHandler: () => {},
};

SearchForm.propTypes = {
  actions: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
  repos: PropTypes.arrayOf(PropTypes.shape({})),
  search: PropTypes.string.isRequired,
  site: PropTypes.shape({}),
  siteAlertHandler: PropTypes.func,
};

export default SearchForm;
