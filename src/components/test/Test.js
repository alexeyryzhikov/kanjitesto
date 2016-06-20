import React, { Component, PropTypes } from 'react';
import ChooseOneTask from './ChooseOneTask';

export default class Test extends Component {

  static propTypes = {
    task: PropTypes.object.isRequired,
    nextTask: PropTypes.function
  };

  render() {
    const { task, nextTask } = this.props;
    if (task.type !== 'chooseOne') {
      return null;
    }

    const { prompt, options, correctAnswer } = task;
    return <ChooseOneTask prompt={prompt} options={options} correctAnswer={correctAnswer} taskComplete={nextTask}/>;
  }
}
