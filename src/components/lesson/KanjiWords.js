import React, { Component, PropTypes } from 'react';
import KanjiWord from './KanjiWord';

export default class KanjiWords extends Component {

  static propTypes = {
    kanji: PropTypes.object.isRequired,
    words: PropTypes.array.isRequired
  }

  render() {
    const { kanji, words } = this.props;
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
    </div>;
  }
}
