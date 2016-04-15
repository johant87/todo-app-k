import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PageNotFound from './PageNotFound';
import ShowList from './ShowList';
import ListItem from './ListItem';
import ShowAllLists from './ShowAllLists';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={ShowAllLists} />
      <Route path="/lists/:listId" component={ShowList}/>
      <Route path="*" component={PageNotFound}/>
    </Route>
  </Router>
), document.getElementById('root'));
