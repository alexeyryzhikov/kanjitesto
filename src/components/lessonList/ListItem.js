import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class ListItem extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    startTest: PropTypes.func.isRequired
  };

  render() {
    const { name, id, startTest } = this.props;
    const onClick = () => startTest(id);

    return <tr>
      <td>{name}</td>
      <td>
        <div className="btn-group pull-right">
          <Link className="btn btn-default" aria-label="View Lesson" to={`/lessons/${id}`}>
            <span className="glyphicon glyphicon-list"/> View
          </Link>
          <button type="button" className="btn btn-default" onClick={onClick}>
            <span className="glyphicon glyphicon-play"/> Start
          </button>
        </div>
      </td>
    </tr>;
  }
}
