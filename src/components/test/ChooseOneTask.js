import React, { Component, PropTypes } from 'react';
import ChooseOneOption from './ChooseOneOption';

import styles from '../../style/test.scss';

export default class ChooseOneTask extends Component {

  static propTypes = {
    prompt: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    correctAnswer: PropTypes.string.isRequired,
    taskComplete: PropTypes.func.isRequired
  };

  optionSelected(option) {
    if (this.state && this.state.selected) {
      this.setState({
        selected: null
      });
      this.props.taskComplete();
    } else {
      this.setState({
        selected: option
      });
    }
  }

  render() {
    const { prompt, options, correctAnswer } = this.props;
    const { selected } = this.state || {};
    return <div>
      <h3 className={styles.prompt}>{prompt}</h3>
      <ul className="list-group">
        {options.map((option, idx) =>
          <ChooseOneOption
            key={idx} option={option} onSelect={this.optionSelected.bind(this)}
            correct={option === selected && option === correctAnswer}
            incorrect={option === selected && option !== correctAnswer}
          />
        )}
      </ul>
    </div>;
  }
}
