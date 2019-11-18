import React from 'react'
import { Link } from 'react-router-dom'

const Content = props => {

    const renderList = list => {
        return list.map( item => <li key= { item.id }>
            <Link 
                to = {{
                    pathname:'/details',
                    search:`cid=${ props.cid }&goodsid=${ item.goodsid }`
                }}
            >
                <div className='pic'>
                    <img src= { item.pic }></img>
                </div>
                <div className='text'>
                    <h3> { item.d_title } </h3>
                    <span>券后 ￥<i> { item.jiage } </i></span>
                </div>
            </Link>
        </li> )
    }

    return (
        <div className='list'>
            <ul>
                { renderList(props.list) }
            </ul>
        </div>
    )
}

export default Content