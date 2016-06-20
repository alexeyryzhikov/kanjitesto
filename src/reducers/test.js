import { createReducer } from 'redux-create-reducer';
import * as TestActions from '../actions/test';
import _ from 'lodash';
import * as TaskTypes from '../utils/taskTypes';

const OPTIONS_COUNT = 5;
const HIRAGANA_TO_KANJI = 'HIRAGANA_TO_KANJI';
const EN_TO_KANJI = 'EN_TO_KANJI';

function createTask(words, promptSelector, answerSelector) {
  return {
    prompt: words[0][promptSelector],
    options: _.shuffle(_.flatMap(words, answerSelector)),
    correctAnswer: words[0][answerSelector],
    type: TaskTypes.CHOOSE_ONE
  };
}

function prepareTask(words, type) {
  const taskWords = _.sampleSize(words, OPTIONS_COUNT);

  switch (type) {
    case HIRAGANA_TO_KANJI:
      return createTask(taskWords, 'hiragana', 'jp');
    case EN_TO_KANJI:
      return createTask(taskWords, 'en', 'jp');
    default:
      throw new Error(`Unknown task type ${type}`);
  }
}

function prepareTest(lessons, limitWordsToLessons = true, taskCount = 10) {
  const kanji = _.flatMap(_.flatMap(lessons, 'kanji'), 'letter');
  const wordsInLessons = _.uniq(_.flatMap(lessons, 'words'));

  const words = limitWordsToLessons
    ? _.filter(wordsInLessons, word => _.some(kanji, kanji => word.jp.indexOf(kanji) >= 0))
    : wordsInLessons;

  const tasks = _.map(_.range(taskCount), () => prepareTask(words, _.sample([HIRAGANA_TO_KANJI, EN_TO_KANJI])));

  return {
    tasks,
    currentTask: 0
  };
}

export default createReducer({}, {
  [TestActions.PREPARE_TEST](state, action) {
    const { options: { lessons } } = action;

    return prepareTest(lessons, true);
  },
  [TestActions.NEXT_TASK](state) {
    return {
      ...state,
      currentTask: state.currentTask + 1
    };
  }
});
