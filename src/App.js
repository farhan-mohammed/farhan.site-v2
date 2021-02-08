import React, { Component } from 'react';
import './css/index.scss';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Plants from './pages/Plant';
import Awards from './pages/Awards';
import Projects from './pages/Projects';
export default class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/projects">
                        <Projects></Projects>
                    </Route>
                    <Route path="/plants">
                        <Plants></Plants>
                    </Route>
                    <Route path="/awards">
                        <Awards></Awards>
                    </Route>
                    <Route path="/">
                        <Home></Home>
                    </Route>
                </Switch>
            </Router>
        );
    }
}
