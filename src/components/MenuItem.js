import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class MenuItem extends Component {

  static propTypes = {
    text: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
  };

  static contextTypes = {
    router: PropTypes.object
  };

  render() {
    const { text, location } = this.props;
    const isActive = this.context.router.isActive(this.props.location);
    return <li className={isActive ? 'active' : ''}>
      <Link {...this.props} to={location}>{text}</Link>
    </li>;
  }
}
