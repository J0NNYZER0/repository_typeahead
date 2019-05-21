import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonInput extends Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(e) {
    const { onClick } = this.props;

    e.preventDefault();
    onClick(e);
  }

  render() {
    const { buttonText, classNames, disableButton } = this.props;

    return (
      <button
        disabled={disableButton}
        onClick={this.handleOnClick}
        className={classNames !== '' && `${classNames}`}
        type="button"
      >
        {buttonText}
      </button>
    );
  }
}

ButtonInput.defaultProps = {
  classNames: '',
};

ButtonInput.propTypes = {
  buttonText: PropTypes.string.isRequired,
  classNames: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  disableButton: PropTypes.bool.isRequired,
};

export default ButtonInput;
