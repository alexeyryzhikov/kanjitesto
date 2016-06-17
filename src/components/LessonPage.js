import React, {Component} from 'react'

import lessons from '../data/lessons/lessons'
import style from '../style/lesson.scss'

class LessonPage extends Component {

  kanjiWords(lesson, kanji) {
    return lesson.words.filter(word => word.jp.indexOf(kanji.letter) >= 0);
  }

  render() {
    const lessonId = this.props.params.id;
    const lesson = lessons.find(lesson => lesson.id == lessonId);

    return <div>
      <h1>{lesson.name}</h1>
      {lesson.kanji.map( (kanji, idx) =>
        <KanjiCard kanji={kanji} key={idx}/>
      )}
      {lesson.kanji.map( (kanji, idx) =>
        <KanjiWords kanji={kanji} words={this.kanjiWords(lesson, kanji)} key={idx}/>
      )}
    </div>
  }
}

class KanjiCard extends Component {
  render() {
    const {kanji} = this.props;
    return <div className={style.kanji}>
      <a href={'#' + kanji.letter}>{kanji.letter}</a>
    </div>
  }
}

class KanjiWords extends Component {
  render() {
    const {kanji, words} = this.props;
    return <div>
      <a name={kanji.letter}></a>
      <h2>{kanji.letter} - {kanji.meaning.en}</h2>
      <table className="table">
        <tbody>
        {words.map((word, idx) =>
          <KanjiWord word={word} key={idx}/>
        )}
        </tbody>
      </table>
    </div>
  }
}

class KanjiWord extends Component {
  render() {
    const {word} = this.props;
    return <tr>
      <td className="col-lg-2">{word.jp}</td>
      <td className="col-lg-2">{word.hiragana}</td>
      <td>{word.en}</td>
    </tr>;
  }
}

export default LessonPage
