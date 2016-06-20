import React, { Component } from 'react';
import { Link } from 'react-router';
import MenuItem from './MenuItem';

export default class Header extends Component {

  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
            </button>
            <Link to={'/'} className="navbar-brand">Kanji Testo</Link>
          </div>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <MenuItem location="/lessons" text="Lessons"/>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

}
