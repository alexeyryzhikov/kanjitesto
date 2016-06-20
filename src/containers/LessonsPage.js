import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { startLessonTest } from '../actions/test';
import LessonsList from '../components/lessonList/LessonList';

export default connect(
  state => ({
    lessons: state.lessons
  }),
  dispatch => bindActionCreators({
    startTest: startLessonTest
  }, dispatch)
)(LessonsList);
