import React, { Component } from 'react'

export default class Content extends Component {

    renderList = list => {
        return list.map( (item,index) => <li key={ index }>
            <div className='pic'>
                <img src={ item.pic }></img>
            </div>
            <div className='text'>
                <h3> { item.d_title } </h3>
                <div>
                    <p>￥{ item.jiage } </p>
                    <p> { item.val } </p>
                    
                </div>
            </div>
        </li>)
    }

    render() {
        const { shopcar } = this.props
        return (
            <div className='shopcar'>
                <ul>
                  { this.renderList(shopcar) }
                </ul>
            </div>
        )
    }
}
