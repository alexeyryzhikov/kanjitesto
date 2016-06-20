import React, { Component, PropTypes } from 'react';
import KanjiCard from './KanjiCard';
import KanjiWords from './KanjiWords';

export default class Lesson extends Component {

  static propTypes = {
    lesson: PropTypes.object.isRequired
  }

  kanjiWords(lesson, kanji) {
    return lesson.words.filter(word => word.jp.indexOf(kanji.letter) >= 0);
  }

  render() {
    const { lesson } = this.props;

    return <div>
      <h1>{lesson.name}</h1>
      {lesson.kanji.map((kanji, idx) =>
        <KanjiCard kanji={kanji} key={idx}/>
      )}
      {lesson.kanji.map((kanji, idx) =>
        <KanjiWords kanji={kanji} words={this.kanjiWords(lesson, kanji)} key={idx}/>
      )}
    </div>;
  }
}
