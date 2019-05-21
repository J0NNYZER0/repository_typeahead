import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BackArrow from './Image';
import imgSrc from '../../assets/images/back-arrow-icon.svg';

class SiteBackButton extends Component {
  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick() {
    const { history } = this.props;
    history.goBack();
  }

  render() {
    const { location } = this.props;
    return (
      location.pathname !== '/' && (
      <div
        className="back-button"
        onClick={this.handleOnClick}
        onKeyPress={() => {}}
        role="button"
        tabIndex="0"
      >
        <BackArrow
          alt="Click to go back"
          classNames="back-button"
          source={imgSrc}
          width="20"
        />
      </div>
      )
    );
  }
};

SiteBackButton.propTypes = {
  location: PropTypes.shape({}).isRequired,
  history: PropTypes.shape({}).isRequired,
};

export default SiteBackButton;
