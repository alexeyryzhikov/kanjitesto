import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import styles from '../style/table.scss';

class ListItem extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    startTest: PropTypes.func.isRequired
  }

  render() {
    const { name, id, startTest } = this.props;
    const onClick = () => startTest(id);

    return <tr>
      <td>{name}</td>
      <td>
        <div className="btn-group pull-right">
          <Link className="btn btn-default" aria-label="View Lesson" to={'/lessons/' + id}>
            <span className="glyphicon glyphicon-list" aria-hidden="true"/> View
          </Link>
          <button type="button" className="btn btn-default" aria-label="Start Test" onClick={onClick}>
            <span className="glyphicon glyphicon-play" aria-hidden="true"/> Start
          </button>
        </div>
      </td>
    </tr>;
  }
}

export default class LessonList extends Component {

  static propTypes = {
    lessons: PropTypes.array.isRequired,
    startTest: PropTypes.function.isRequired
  }

  render() {
    const { lessons, startTest } = this.props;

    return <div>
      <h1>Lessons</h1>
      <table className={`table table-hover ${styles.table}`}>
        <thead>
        <tr>
          <th className="col-lg-9">Name</th>
          <th className="col-lg-3"></th>
        </tr>
        </thead>
        <tbody>
        { lessons.map(lesson =>
          <ListItem key={lesson.id} name={lesson.name} id={lesson.id} startTest={startTest}/>
        )}
        </tbody>
      </table>
    </div>;
  }
}
