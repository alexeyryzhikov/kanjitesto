import React, { Component, PropTypes } from 'react';

import classnames from 'classnames';

export default class ChooseOneOption extends Component {

  static propTypes = {
    option: PropTypes.string,
    onSelect: PropTypes.func,
    correct: PropTypes.bool,
    incorrect: PropTypes.bool
  };

  render() {
    const { option, onSelect, correct, incorrect } = this.props;
    const className = classnames('list-group-item', {
      'list-group-item-success': correct,
      'list-group-item-danger': incorrect
    });
    const onClick = () => onSelect(option);
    return <a type="button" className={className} onClick={onClick}>{option}</a>;
  }
}
