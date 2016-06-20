import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from '../containers/App';
import LessonsPage from '../containers/LessonsPage';
import LessonPage from '../containers/LessonPage';
import TestPage from '../containers/TestPage';
import NotFoundPage from '../containers/NotFoundPage';

export default (
  <Route component={App}>
    <Route path="/" component={LessonsPage}/>
    <Route path="/lessons" component={LessonsPage} />
    <Route path="/lessons/:id" component={LessonPage}/>
    <Route path="/test" component={TestPage}/>
    <Route path="*" component={NotFoundPage} />
  </Route>
);
