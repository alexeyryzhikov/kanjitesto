import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { nextTask } from '../actions/test';
import Test from '../components/test/Test';

export default connect(
  state => ({
    task: state.test.tasks[state.test.currentTask]
  }),
  dispatch => bindActionCreators({
    nextTask
  }, dispatch)
)(Test);
