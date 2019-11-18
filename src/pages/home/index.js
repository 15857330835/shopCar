import React, { Component } from 'react'
import './index.scss'
import { Route,Redirect } from 'react-router-dom'
import Nav from './Nav';
import Hot from './Hot'
import Coming from './Coming'

export default class Home extends Component {
    render() {
        return (
            <div className = 'container'>
                <Nav></Nav>
                <Redirect from='/home' to='/home/hot' exact></Redirect>
                <Route path='/home/hot' component={ Hot }></Route>
                <Route path='/home/coming' component= { Coming }></Route>
            </div>
        )
    }
}
