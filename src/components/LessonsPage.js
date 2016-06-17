import React, {Component} from 'react'
import { Link } from 'react-router'
import lessons from '../data/lessons/lessons'

import styles from '../style/table.scss'

class ListItem extends Component {
  render() {
    const {name, id} = this.props;

    return <tr>
      <td>{name}</td>
      <td>
        <div className="btn-group pull-right">
          <Link className="btn btn-default" aria-label="View Lesson" to={'/lessons/' + id}>
            <span className="glyphicon glyphicon-list" aria-hidden="true"></span> View
          </Link>
          <button type="button" className="btn btn-default" aria-label="Start Test">
            <span className="glyphicon glyphicon-play" aria-hidden="true"></span> Start
          </button>
        </div>
      </td>
    </tr>
  }
}

export default class LessonsPage extends Component {
  render() {
    return <div>
      <h1>Lessons</h1>
      <table className={"table table-hover " + styles.table}>
        <thead>
          <tr>
            <th className="col-lg-9">Name</th>
            <th className="col-lg-3"></th>
          </tr>
        </thead>
        <tbody>
        { lessons.map(lesson =>
          <ListItem key={lesson.id} name={lesson.name} id={lesson.id}/>
        )}
        </tbody>
      </table>
    </div>
  }
}
