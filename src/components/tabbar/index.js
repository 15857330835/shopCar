import React from 'react'
import './index.scss'

import { NavLink } from 'react-router-dom'

const TabBar = props => {

    const tabbar = [
        {
            id:1,
            icon:'fa-home',
            text:'首页',
            path:'/home'
        },
        {
            id:2,
            icon:'fa-grip-vertical',
            text:'分类',
            path:'/category'
        },
        {
            id:3,
            icon:'fa-thumbs-up',
            text:'推荐',
            path:'/recommend'
        },
        {
            id:4,
            icon:'fa-shopping-cart',
            text:'购物车',
            path:'/shopcar'
        },
        {
            id:5,
            icon:'fa-user',
            text:'我的',
            path:'/mine'
        },
    ]

    function Item() {
        return tabbar.map( item => <li key= { item.id }>
            <NavLink to= { item.path } activeClassName='active'>
                <i className= { 'fas ' + item.icon }></i>
                <span> { item.text } </span>
            </NavLink>
        </li>)
    }

    return (
        <footer>
            <ul>
                { Item() }
            </ul>
        </footer>
    )
}

export default TabBar