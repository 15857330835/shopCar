import React, { Component } from 'react'
import './index.scss'
import Content from './Content';
export default class ShopCar extends Component {

    constructor(props){
        super(props)
        this.state={
            shopcar : []
        }
    }

    componentDidMount(){
        this.setState({
            shopcar : localStorage.getItem('shopcar') && JSON.parse(localStorage.getItem('shopcar')) || []
        })
    }

    render() {
        const { shopcar } = this.state
        return (
            <div className = 'container'>
                <Content shopcar= { shopcar } ></Content>
            </div>
        )
    }
}