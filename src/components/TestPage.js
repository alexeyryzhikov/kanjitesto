import React, {Component} from 'react'

import lessons from '../data/lessons/lessons'
import styles from '../style/test.scss'
import _ from 'lodash'
import classnames from 'classnames'

const OPTIONS_COUNT = 5;
const HIRAGANA_TO_KANJI = 'HIRAGANA_TO_KANJI';
const EN_TO_KANJI = 'EN_TO_KANJI';

function prepareTest({lessons, limitWordsToLessons}) {
  const kanji = _.flatMap(_.flatMap(lessons, 'kanji'), 'letter');
  const wordsInLessons = _.uniq(_.flatMap(lessons, 'words'));

  const words = limitWordsToLessons
    ? _.filter(wordsInLessons, word => _.some(kanji, kanji => word.jp.indexOf(kanji) >= 0))
    : wordsInLessons;

  return {
    kanji: kanji,
    words: words
  }
}

const test = prepareTest({lessons, limitWordsToLessons: false});

function prepareTask(test, type) {
  console.log(test);
  const words = _.sampleSize(test.words, OPTIONS_COUNT);

  switch (type) {
    case HIRAGANA_TO_KANJI:
      return createTask(words, 'hiragana', 'jp');
    case EN_TO_KANJI:
      return createTask(words, 'en', 'jp');
  }
}

function createTask(words, promptSelector, answerSelector) {
  return {
    prompt: words[0][promptSelector],
    options: _.shuffle(_.flatMap(words, answerSelector)),
    correctAnswer: words[0][answerSelector]
  }
}

class TestPage extends Component {

  constructor(props) {
    super(props);
  }

  state = {
    task: this.prepareTask()
  }

  prepareTask() {
    return prepareTask(test, _.sample([HIRAGANA_TO_KANJI, EN_TO_KANJI]))
  }

  taskComplete() {
    this.setState({
      task: this.prepareTask()
    });
  }

  render() {
    const {prompt, options, correctAnswer} = this.state.task;
    return <ChooseOneTask prompt={prompt} options={options} correctAnswer={correctAnswer}
                          taskComplete={this.taskComplete.bind(this)}/>
  }
}

class ChooseOneTask extends Component {

  optionSelected(option) {
    if (this.state && this.state.selected) {
      this.setState({
        selected: null
      });
      this.props.taskComplete();
    } else {
      this.setState({
        selected: option
      });
    }
  }

  render() {
    console.log(this.props);
    const {prompt, options, correctAnswer} = this.props;
    const {selected} = this.state || {};
    return <div>
      <h3 className={styles.prompt}>{prompt}</h3>
      <ul className="list-group">
        {options.map((option, idx) =>
          <ChooseOneOption key={idx} option={option} onSelect={this.optionSelected.bind(this)}
                           correct={option == selected && option == correctAnswer}
                           incorrect={option == selected && option != correctAnswer} />
        )}
      </ul>
    </div>
  }
}

class ChooseOneOption extends Component {
  render() {
    const {option, onSelect, correct, incorrect} = this.props;
    const className = classnames('list-group-item', {
      'list-group-item-success': correct,
      'list-group-item-danger': incorrect
    });
    const onClick = () => onSelect(option);
    return <a type="button" className={className} onClick={onClick}>{option}</a>;
  }
}

export default TestPage
