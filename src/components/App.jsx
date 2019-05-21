import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as reposActions from '../actions/repos';
import SiteHeader from './widgets/SiteHeader';
import Main from './widgets/Main';
import SiteAlert from './widgets/SiteAlert';
import SiteFooter from './widgets/SiteFooter';
import SearchPage from './pages/Search';
import ReposPage from './pages/Repos';
import SummaryPage from './pages/Summary';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alert: '',
    };
    this.handleSiteAlert = this.handleSiteAlert.bind(this);
  }

  handleSiteAlert(msg, ttl) {
    this.setState({ alert: msg },
      () => setTimeout(() => this.setState({ alert: '' }), ttl));
  }

  render() {
    const { alert } = this.state;

    return [
      alert !== '' && <SiteAlert alert={alert} key="site-alert" />,
      <SiteHeader key="site-header" title="Github Search Demo" />,
      <Switch key="switch">
        <Route
          exact
          path="/"
          render={props => (
            <Main {...props} title="Search Page">
              <SearchPage {...props} {...this.props} siteAlertHandler={this.handleSiteAlert} />
            </Main>
          )}
        />
        <Route
          path="/repos/:q"
          render={props => (
            <Main {...props} title="Search Results">
              <ReposPage {...props} {...this.props} />
            </Main>
          )}
        />
        <Route
          path="/repo/:repoId"
          render={(props) => {
            const { repos } = this.props;
            return (
              <Main {...props} title={repos[0] && repos[0].full_name}>
                <SummaryPage {...props} {...this.props} />
              </Main>
            );
          }}
        />
      </Switch>,
      <SiteFooter author="Jon Ortiz" key="footer" />,
    ];
  }
}

App.defaultProps = {
  repos: [],
  site: {},
};

App.propTypes = {
  actions: PropTypes.shape({}).isRequired,
  repos: PropTypes.arrayOf(PropTypes.shape({})),
  site: PropTypes.shape({}),
};

const mapStateToProps = state => ({
  repos: state.repos,
  site: state.site,
});


const mapDispatchToProps = dispatch => ({
  actions: {
    repos: bindActionCreators(reposActions, dispatch),
    site: bindActionCreators(reposActions, dispatch),
  },
});


export default hot(module)(connect(
  mapStateToProps,
  mapDispatchToProps,
)(App));
