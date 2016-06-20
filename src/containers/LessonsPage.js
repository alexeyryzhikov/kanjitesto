import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LessonsList from '../components/lessonList/LessonList';

import { startLessonTest } from '../actions/test';

export default connect(
  state => ({
    lessons: state.lessons
  }),
  dispatch => bindActionCreators({
    startTest: startLessonTest
  }, dispatch)
)(LessonsList);
