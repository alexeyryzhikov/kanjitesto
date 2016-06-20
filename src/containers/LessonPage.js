import { connect } from 'react-redux';
import Lesson from '../components/lesson/Lesson';

export default connect(
  (state, props) => ({
    lesson: state.lessons.find(lesson => lesson.id === props.params.id)
  })
)(Lesson);
