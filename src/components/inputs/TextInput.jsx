import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({
  autocomplete, classNames, inputName, onChangeHandler, onKeyDownHandler, placeholder, value,
}) => (
  <input
    autoComplete={autocomplete}
    className={classNames !== '' && `${classNames}`}
    name={inputName}
    onChange={onChangeHandler}
    onKeyDown={onKeyDownHandler}
    placeholder={placeholder !== '' ? placeholder : null}
    type="text"
    value={value}
  />
);

TextInput.defaultProps = {
  autocomplete: 'off',
  classNames: '',
  placeholder: '',
};

TextInput.propTypes = {
  autocomplete: PropTypes.string,
  classNames: PropTypes.string,
  inputName: PropTypes.string.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  onKeyDownHandler: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
};

export default TextInput;
