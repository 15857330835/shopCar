import React, { Component } from 'react'
import './index.scss'
import axios from 'axios'
import qs from 'querystring'
import Content from './Content';

export default class Details extends Component {

    constructor(props){
        super(props)
        this.state={
            data : []
        }
    }

    componentDidMount(){
        const { search } = this.props.location
        const { cid,goodsid } = qs.parse( search.slice(1) )
        axios({
            url: '/index.php',
            params : {
                r: 'class/cyajaxsub',
                page: 1,
                cid,
                px: 't',
                cac_id: ''
            }
        }).then( res => {
            this.setState({
                data : res.data.data.content.filter( item => item.goodsid == goodsid )
            })
        } )
    }

    render() {
        const { data } = this.state
        return (
            <div className = 'container'>
                <Content data= { data[0] }></Content>
            </div>
        )
    }
}