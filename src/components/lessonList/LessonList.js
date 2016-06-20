import React, { Component, PropTypes } from 'react';
import ListItem from './ListItem';
import styles from '../../style/table.scss';

export default class LessonList extends Component {

  static propTypes = {
    lessons: PropTypes.array.isRequired,
    startTest: PropTypes.func.isRequired
  };

  render() {
    const { lessons, startTest } = this.props;

    return <div>
      <h1>Lessons</h1>
      <table className={`table table-hover ${styles.table}`}>
        <thead>
        <tr>
          <th className="col-lg-9">Name</th>
          <th className="col-lg-3"/>
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
