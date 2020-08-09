import React from 'react'
import './BreadCrumbs.scss'
import {Link} from 'react-router-dom'

const BreadCrumbs = ({link1, link2, link3, to1, to2, page2, active, link4, to3, page3, page1 })=> {
    return (
        <span className="wrapperBread">
            <ul class="breadcrumb" style={{
                background : 'none'
            }}>
                <li><i class="fa fa-home customBread"></i></li>
                <li class="breadcrumb-item customBread"><Link to={to1}>{link1}</Link>{page1}</li>
                <li style={{
                    color : '#6c757d'
                }} class={`breadcrumb-item ${active} customBread`}><Link to={to2}>{link2}</Link>{page2}</li>
                <li class="breadcrumb-item active customBread"><Link to={to3}>{link3}</Link>{page3}</li>
            </ul>
        </span>

        
    )
}

export default BreadCrumbs