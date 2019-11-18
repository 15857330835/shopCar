import React from 'react'
import './index.scss'

const Tab = props => {
    return (
        <header>
            { props.tabFlag && <i className = 'fas fa-angle-left' onClick= { props.history.goBack }></i>}
            <span> { props.titles } </span>
        </header>
    )
}

export default Tab