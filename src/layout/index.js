import React, { Component } from 'react'
import TabBar from '../components/tabbar';
import Tab from '../components/tab';
import { Route,Switch,Redirect,withRouter } from 'react-router-dom'
import Home from '../pages/home'
import Category from '../pages/category'
import Details from '../pages/details'
import Error from '../pages/error'
import List from '../pages/list'
import Login from '../pages/login'
import Mine from '../pages/mine'
import Recommend from '../pages/recommend'
import Register from '../pages/register'
import ShopCar from '../pages/shopcar'

class LayOut extends Component {

    constructor(props){
        super(props)
        this.state={
            tabFlag : false,
            tabBarFlag : true,
            titles : {
                '/home' : '首页',
                '/category' : '分类',
                '/details' : '详情',
                '/list' : '列表',
                '/login' : '登录',
                '/mine' : '我的',
                '/recommend' : '推荐',
                '/register' : '注册',
                '/shopcar' : '购物车',
                '/error' : '出错了',
                '/home/hot' : '正在热映',
                '/home/coming' : '即将上映',
            },
            arrowNav : ['/category','/details','/list','/login','/mine','/recommend','/register','/shopcar','/error'],
            tabBarNav : ['/mine','/login','/register','/list','/details']
        }
    }

    componentDidMount(){
        this.changeTabFlag()
        this.changeTabBarFlag()
    }

    componentWillReceiveProps( nextProps ){
        this.changeTabFlag(nextProps)
        this.changeTabBarFlag(nextProps)
    }

    changeTabFlag = nextProps => {
        const { pathname } = nextProps && nextProps.location || this.props.location
        const f = this.state.arrowNav.some( item => item === pathname )
        if( f ) {
            this.setState({
                tabFlag : true
            })
        }else{
            this.setState({
                tabFlag : false
            })
        }
    }

    changeTabBarFlag = nextProps => {
        const { pathname } = nextProps && nextProps.location || this.props.location
        const f = this.state.tabBarNav.some( item => item === pathname )
        if( f ) {
            this.setState({
                tabBarFlag : false
            })
        }else{
            this.setState({
                tabBarFlag : true
            })
        }
    }

    render() {
        const { tabFlag,tabBarFlag,titles } = this.state
        const { pathname } = this.props.location
        return (
            <div className='layout'>
                <Tab tabFlag = { tabFlag } titles = { titles[pathname] } { ...this.props }></Tab>
                <Switch>
                    <Redirect from='/' to='/home' exact></Redirect>
                    <Route path='/home' component= { Home }></Route>
                    <Route path='/category' component= { Category }></Route>
                    <Route path='/details' component= { Details }></Route>
                    <Route path='/list' component= { List }></Route>
                    <Route path='/login' component= { Login }></Route>
                    <Route path='/mine' component= { Mine }></Route>
                    <Route path='/recommend' component= { Recommend }></Route>
                    <Route path='/register' component= { Register }></Route>
                    <Route path='/shopcar' component= { ShopCar }></Route>
                    <Route component= { Error }></Route>
                </Switch>
                { tabBarFlag && <TabBar></TabBar> }
            </div>
        )
    }
}

export default withRouter( LayOut )