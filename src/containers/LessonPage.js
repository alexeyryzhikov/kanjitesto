import { connect } from 'react-redux';
import Lesson from '../components/lesson/Lesson';

export default connect(
  state => ({
    lesson: state.lessons.find(lesson => lesson.id === state.params.id)
  })
)(Lesson);
