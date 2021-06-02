import { Mail, Person } from '@material-ui/icons';
import React, { useState } from 'react';
import './topbar.scss';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

export const Topbar = () => {
    const [menuState, setMenuState] = useState(false);

    const getClassName = () => {
        if(menuState)
            return 'topbar active';
        return 'topbar';
    }
    
    return (
        <div className={getClassName()}>
            <div className="wrapper">
                <div className="left">
                    <a className="Intro" href="#intro">Intro</a>
                    <div className="container">
                        <Person className="icon"/> 
                        ankitsharma941@gmail.com
                    </div>
                    <div className="container">
                        <Mail className="icon"/>
                        +91-9284074507
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuState(!menuState)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                    {/* {menuState ? 
                    <CloseIcon className="icon" fontSize="large" onClick={() => setMenuState(!menuState)}/>:
                    <MenuIcon className="icon" fontSize="large" onClick={() => setMenuState(!menuState)}/>} */}
                </div>
            </div>
        </div>
    )
}
