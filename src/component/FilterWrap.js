import React from 'react';
import './../scss/FilterWrap.scss'

function FilterWrap (props) {
    const {
        tags,
        currentTag,
        getBookList
    } = props;
    return (
        <div className="filter-wrap">
            <div className="filter-item-title">
                <span></span>
                <h1>选择阅读喜好</h1>
                <span></span>
            </div>
            <ul className="filter-item-wrap">
                {
                    tags.map(tag => {
                        return (
                            <li className={ currentTag === tag.id ? "active" : '' } key={ tag.id } onClick={ () => getBookList(tag.id) }>{ tag.name }</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default FilterWrap;