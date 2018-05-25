import React, { Component } from 'react';
import './../scss/Bookstore.scss';
import FilterWrap from './FilterWrap';
import { NavBar, Icon, Grid } from 'antd-mobile';
import Slider from './Slider';

const typeData = [{name: '男生小说', id: 'boy'}, {name: '女生小说', id: 'girl'}, {name: '出版书籍', id: 'pub'}];
// const gdata = Array.from(new Array(4)).map((_val, i) => ({
//     icon: `data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='56' height='56' viewBox='0 0 56 56'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Crect width='56' height='56' fill='%23F57749' rx='28'/%3E%3Cpath fill='%23FFF' d='M39.757 37.316L16.784 18.04C19.532 14.947 23.538 13 28 13c8.284 0 15 6.716 15 15 0 3.52-1.213 6.757-3.243 9.316zm-2.095 2.158C35.052 41.674 31.682 43 28 43c-8.284 0-15-6.716-15-15 -1-2.742.736-5.312 2.02-7.524l22.642 18.998z'/%3E%3Cpath fill='%23F57749' d='M30.423 25H35v3h-5v2h5v3h-5v5h-4v-5h-5v-3h5v-2h-5v-3h4.175L22 19.5l2.598-1.5 3.2 5.544L31 18l2.598 1.5-3.175 5.5z'/%3E%3C/g%3E%3C/svg%3E`,
//     text: `name${i}`,
//   }));

class BookStore extends Component {
    constructor (props) {
        super(props);

        this.state = {
            currentTag: 'boy',
            data: ['1', '2', '3'],
        }
    }

    componentWillMount () {
        
    }

    goShelf () {
        this.props.history.push('/shelf');
    }

    goSearch () {
        this.props.history.push('/search');
    }

    getBookList (id) {
        this.setState({
            currentTag: id
        });
    }

    render () {
        const { 
            currentTag,
            imgHeight,
            data
         } = this.state;
        return (
            <div className="Bookstore">
                {/* 导航条 */}
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

                {/* 阅读喜好 */}
                <FilterWrap tags={ typeData } currentTag={ currentTag } getBookList={ this.getBookList.bind(this) }></FilterWrap>
               

               {/* 轮播图 */}
                <Slider data={data} />

                {/* 选择分类 */}
                <Grid data={gdata} activeStyle={false} />
            </div>
        )
    }
}

export default BookStore;