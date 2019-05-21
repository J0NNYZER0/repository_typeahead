import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SiteFooter extends Component {
  constructor(props) {
    super(props);
    const today = new Date();

    this.year = today.getFullYear();
  }

  render() {
    const { author } = this.props;
    return (
      <footer>
        <ul>
          <li>{`© ${this.year} ${author}`}</li>
        </ul>
      </footer>
    );
  }
}

SiteFooter.defaultProps = {
  author: '',
};

SiteFooter.propTypes = {
  author: PropTypes.string,
};

export default SiteFooter;
