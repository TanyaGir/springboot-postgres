import React, { Component } from 'react';
import ListStudentsComponent from './ListStudentsComponent';
import StudentsComponent from './StudentsComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class StudentsApp extends Component {
    render() {
        return (
            <Router>
            <>
                <h1>Hi there!! Welcome to my application</h1>
                <Switch>
                    <Route path="/" exact component={ListStudentsComponent} />
                    <Route path="/students" exact component={ListStudentsComponent} />
                    <Route path="/students/:id" component={StudentsComponent} />
                    <Route path="/addstudent" component={StudentsComponent} />
                </Switch>
            </>
        </Router>
        )
    }
}

export default StudentsApp
