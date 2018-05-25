import React, { Component } from 'react';

export default class Counter extends Component {
    constructor (props) {
        super(props);
    }

    state = { count : 1 }

    componentWillMount = () => {
        console.log('Component WILL MOUNT!')
    }

    componentDidMount = () => {
        console.log('Component DID MOUNT!')
    }

    componentWillReceiveProps = (newProps) => {
        console.log('Component WILL RECEIVE PROPS!')
    }

    shouldComponentUpdate = (newProps, newState) => {
        var hasOver = this.state.count < 5;
        console.log('Component Should UPDATE? ' + hasOver);
        return hasOver;
    }

    componentWillUpdate = (nextProps, nextState) => {
        console.log('Component WILL UPDATE! Count: ' + this.state.count);
    }

    componentDidUpdate = (prevProps, prevState) => {
        this.refs['countBtn'].disabled = this.state.count > 4
        console.log('Component DID UPDATE!')
    }

    componentWillUnmount = () => {
        console.log('Component WILL UNMOUNT!')
    }

    handleClick = () => {
        this.setState({ count: this.state.count + 1 })
    }

    render () {
        console.log('Component Render!');
        return (
            <div>
                { this.state.count }
                {' '}
                <button ref="countBtn" onClick={ () => this.handleClick() }>Add</button>
            </div>
        )
    }
}