import React, { Component, PropTypes } from 'react';
import style from '../../style/lesson.scss';

export default class KanjiCard extends Component {

  static propTypes = {
    kanji: PropTypes.object.isRequired
  };

  render() {
    const { kanji } = this.props;
    return <div className={style.kanji}>
      <a href={`#{kanji.letter}`}>{kanji.letter}</a>
    </div>;
  }
}
