import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class BookDetail extends Component {
    render () {
        console.log(this.props.match.params);
        return (
            <div>
                <div>BookDetail</div>
            </div>
        )
    }
}