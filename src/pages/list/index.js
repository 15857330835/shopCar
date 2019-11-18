import React, { Component } from 'react'
import './index.scss'
import axios from 'axios'
import qs from 'querystring'
import Content from './Content';
export default class List extends Component {

    constructor(props){
        super(props)
        this.state={
            list : []
        }
    }

    componentDidMount(){
        const { search } = this.props.location
        const { cid } = qs.parse(search.slice(1))
        axios({
            url: '/index.php',
            params: {
                r: 'class/cyajaxsub',
                page: 1,
                cid,
                px: 't',
                cac_id: ''
            }
        }).then(res => {
            this.setState({
                list : res.data.data.content
            })
        })
    }

    render() {
        const { list } = this.state
        const { search } = this.props.location
        const { cid } = qs.parse(search.slice(1))
        return (
            <div className = 'container'>
                <Content list= { list } cid= { cid }></Content>
            </div>
        )
    }
}