import React from 'react'
import './menu.scss'

export const Menu = ({menuState, setMenuState}) => {
    return (
        <div className={"menu " + (menuState && "active")}>
            <ul>
                <li onClick={()=>setMenuState(false)}>
                    <a href="#intro">Intro</a>
                </li>
                <li onClick={()=>setMenuState(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <li onClick={()=>setMenuState(false)}>
                    <a href="#works">Works</a>
                </li>
                <li  onClick={()=>setMenuState(false)}>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li onClick={()=>setMenuState(false)}>
                    <a href="#contacts">Contacts</a>
                </li>
            </ul>
        </div>
    )
}
