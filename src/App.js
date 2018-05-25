import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import BookStore from './component/BookStore';
import BookDetail from './component/BookDetail';
import Search from './component/Search';

import './scss/App.scss';
import 'antd-mobile/dist/antd-mobile.css';

export default class App extends Component {

    constructor (props) {
        super(props);

    }

    render () {
        return (
            <div>
                <Router>
                    <div>
                        <Route exact path="/" component={ BookStore } />
                        <Route path="/details/:id" component={ BookDetail } />
                        <Route path="/search" component={ Search } />
                    </div>
                </Router>
            </div>
        )
    }
}