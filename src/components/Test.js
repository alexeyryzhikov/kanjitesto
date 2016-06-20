import React, { Component, PropTypes } from 'react';

import styles from '../style/test.scss';
import classnames from 'classnames';

class Test extends Component {

  static propTypes = {
    task: PropTypes.object.isRequired,
    nextTask: PropTypes.function
  }

  render() {
    const { task, nextTask } = this.props;
    if (task.type !== 'chooseOne') {
      return null;
    }

    const { prompt, options, correctAnswer } = task;
    return <ChooseOneTask prompt={prompt} options={options} correctAnswer={correctAnswer} taskComplete={nextTask}/>;
  }
}

class ChooseOneTask extends Component {

  static propTypes = {
    prompt: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    correctAnswer: PropTypes.string.isRequired,
    taskComplete: PropTypes.function.isRequired
  }

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
          <ChooseOneOption key={idx} option={option} onSelect={this.optionSelected.bind(this)}
                           correct={option == selected && option == correctAnswer}
                           incorrect={option == selected && option != correctAnswer}/>
        )}
      </ul>
    </div>;
  }
}

class ChooseOneOption extends Component {
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

export default Test;
