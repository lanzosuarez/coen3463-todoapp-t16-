import React from 'react';
import ReactRouter, { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './../components/App';
import LogRegContainer from '../container/LogRegContainer';
import ToDoContainer from '../container/ToDoContainer';

var routes = (
    <Router history={browserHistory} >
        <Route path='/' component={App}>
            <Route path ='login' component={LogRegContainer} />
            <Route path ='signup' component={LogRegContainer} />
            <Route path ='test' component={ToDoContainer} />
        </Route>
    </Router>
)

export default routes;