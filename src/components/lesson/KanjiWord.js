import React, { Component, PropTypes } from 'react';

export default class KanjiWord extends Component {

  static propTypes = {
    word: PropTypes.object.isRequired
  };

  render() {
    const { word } = this.props;
    return <tr>
      <td className="col-lg-2">{word.jp}</td>
      <td className="col-lg-2">{word.hiragana}</td>
      <td>{word.en}</td>
    </tr>;
  }
}
