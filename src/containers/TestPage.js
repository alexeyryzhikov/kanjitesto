import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { compose, branch, renderComponent } from 'recompose';

import { nextTask } from '../actions/test';
import TestResults from '../components/test/TestResults';
import Test from '../components/test/Test';

export default compose(
  connect(
    state => ({
      complete: state.test.complete
    })
  ),
  branch(
    props => props.complete,
    compose(
      connect(
        state => ({
          tasks: state.test.tasks
        })
      ),
      renderComponent(TestResults)
    ),
    compose(
      connect(
        state => ({
          task: state.test.tasks[state.test.currentTask]
        }),
        (dispatch) => bindActionCreators({
          nextTask
        }, dispatch)
      ),
      renderComponent(Test)
    )
  )
)(Component);
