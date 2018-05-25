import React, { Component } from 'react';
import { NavBar, Icon } from 'antd-mobile';
import './../css/Bookstore.scss';
import FilterWrap from './FilterWrap';

const typeData = [{name: '男生小说', id: 'boy'}, {name: '女生小说', id: 'girl'}, {name: '出版书籍', id: 'pub'}]

class BookStore extends Component {
    constructor (props) {
        super(props);
    }

    goShelf () {
        this.props.history.push('/shelf');
    }

    goSearch () {
        this.props.history.push('/search');
    }

    getBookList (id) {
        
    }

    render () {
        return (
            <div className="Bookstore">
                <NavBar
                    className="nav-bar"
                    mode="light"
                    leftContent={ [
                        <Icon key="0" type="left" onClick={ this.goShelf.bind(this) } />,
                        "书架"
                    ] }
                    rightContent={ [
                        <Icon key="0" type="search" onClick={ this.goSearch.bind(this) } />
                    ] }
                >书城</NavBar>

                <FilterWrap tags={ typeData } getBookList={ this.getBookList.bind(this) }></FilterWrap>
            </div>
        )
    }
}

export default BookStore;