import { connect } from 'react-redux';
import Lesson from '../components/Lesson'

export default connect(
  state => {
    return {
      lesson: state.lessons.find(lesson => lesson.id == state.params.id)
    }
  }
)(Lesson)


