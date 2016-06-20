import { createReducer } from 'redux-create-reducer';
import * as TestActions from '../actions/test';
import _ from 'lodash';

const OPTIONS_COUNT = 5;
const HIRAGANA_TO_KANJI = 'HIRAGANA_TO_KANJI';
const EN_TO_KANJI = 'EN_TO_KANJI';

function prepareTest(lessons, limitWordsToLessons) {
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

function prepareTask(test, type) {
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

function prepareTask(){
  return prepareTask(test, _.sample([HIRAGANA_TO_KANJI, EN_TO_KANJI]))
}

export default createReducer({}, {
  [TestActions.PREPARE_TEST](state, action) {
    const { lessons: lessonIds } = action;
    const lessons = state.lessons.filter(lesson => lessonIds.indexOf(lesson.id) >= 0);

    return prepareTest(lessons, true);
  }
});;
