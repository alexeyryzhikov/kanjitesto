import React, { Component, PropTypes } from 'react';
import TaskResult from './TaskResult';

export default class TestResults extends Component {

  static propTypes = {
    tasks: PropTypes.array.isRequired
  }

  render() {
    const { tasks } = this.props;
    return <table className="table">
      <thead>
        <tr>
          <th className="col-lg-1">#</th>
          <th>Answer</th>
        </tr>
      </thead>
      <tbody>
      { tasks.map((task, idx) =>
        <TaskResult key={idx} task={task} index={idx}/>
      )}
      </tbody>
    </table>;
  }
}
