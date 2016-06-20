import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';

export default class TaskResult extends Component {

  static propTypes = {
    index: PropTypes.number.isRequired,
    task: PropTypes.shape({
      response: PropTypes.string.isRequired,
      correctAnswer: PropTypes.string.isRequired
    })
  }

  taskAnswer(response, correctAnswer) {
    if (response === correctAnswer) {
      return <td>{response}</td>;
    }
    return <td><del>{response}</del> {correctAnswer}</td>;
  }

  render() {
    const { index, task: { response, correctAnswer } } = this.props;
    const correct = response === correctAnswer;
    const className = classnames({
      success: correct,
      danger: !correct
    });
    return <tr className={className}>
      <td>{index + 1}</td>
      {this.taskAnswer(response, correctAnswer)}
    </tr>;
  }
}
