import React, { Component, PropTypes } from 'react';
import Header from '../components/Header';
import styles from '../style/index.scss';

export default class Main extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired
  };

  render() {
    return (
      <div>
        <Header />
        {/* this will render the child routes */}
        <div className={styles.content}>
          <div className="container">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
