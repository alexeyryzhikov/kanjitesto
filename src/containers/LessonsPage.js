import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LessonsList from '../components/LessonList';

import { startLessonTest } from '../actions/test'

export default connect(
  state => {
    return {
      lessons: state.lessons
    }
  },
  dispatch => {
    return bindActionCreators({
      startTest: startLessonTest
    }, dispatch)
  }
)(LessonsList)
