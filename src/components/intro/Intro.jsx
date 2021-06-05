import React, { useEffect, useRef } from 'react'
import './intro.scss'
import { init } from 'ityped'


export const Intro = () => 
{
    const blinkElement = useRef();

    useEffect(()=>{
        init(blinkElement.current, { showCursor: false, strings: ['Experience in Angular','Expertise in React', 'Comfortable with Node' ] })
    })
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imageContainer">
                    <img src="assets/man.png" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Ankit Sharma</h1>
                    <h3>UI Developer - <span ref= {blinkElement}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt=""/>
                </a>
            </div>
        </div>

    )
}
