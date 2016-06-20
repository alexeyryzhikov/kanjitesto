import React, { Component, PropTypes } from 'react';
import ChooseOneTask from './ChooseOneTask';
import * as TaskTypes from '../../utils/taskTypes';

export default class Test extends Component {

  static propTypes = {
    task: PropTypes.object.isRequired,
    nextTask: PropTypes.func
  };

  render() {
    const { task, nextTask } = this.props;

    if (task.type === TaskTypes.CHOOSE_ONE) {
      const { prompt, options, correctAnswer } = task;
      return <ChooseOneTask prompt={prompt} options={options} correctAnswer={correctAnswer} taskComplete={nextTask}/>;
    }

    return null;
  }
}
