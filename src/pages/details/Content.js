import React, { Component } from 'react'
import Input from './Input'
import { Button } from 'antd-mobile';

export default class Content extends Component {

    getShop = () => {
        return localStorage.getItem('shopcar') && JSON.parse(localStorage.getItem('shopcar')) || []
    }

    save = arr => {
        localStorage.setItem('shopcar',JSON.stringify(arr))
    }

    add = () => {
        const shopcar = this.getShop()
        const { d_title,jiage,pic } = this.props.data
        const { val } = this.refs.input.state
        if( shopcar.length === 0 ){
            shopcar.push({
                d_title,
                jiage,
                pic,
                val,
                f : false
            })
            this.save(shopcar)
        }else{
            const flag = shopcar.some( item => item.d_title === d_title )
            if( flag ){
                shopcar.map( item => {
                    if( item.d_title === d_title ){
                        item.val += val
                        return
                    }
                } )
                this.save(shopcar)
            }else{
                shopcar.push({
                    d_title,
                    jiage,
                    pic,
                    val,
                    f : false
                })
                this.save(shopcar)
            }
        }
    }

    render() {
        const { data } = this.props
        if( data ){
            return (
                <div className='details'>
                    <div className='pic'>
                        <img src= { data.pic }></img>
                    </div>
                    <div className='text'>
                        <h3> { data.d_title } </h3>
                        <p>券后价 ￥<i> { data.jiage } </i></p>
                        <p>天猫价 ￥{ data.yuanjia } </p>
                        <Input ref='input'></Input>
                        <Button type="primary" onClick= { this.add }> 加入购物车 </Button>
                    </div>
                </div>
            )
        }else{
            return(
                <div></div>
            )
        }
    }
}
