import { Mail, Person } from '@material-ui/icons';
import React from 'react';
import './topbar.scss';

export const Topbar = () => {
    return (
        <div className="topbar">
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
                    <h3>hamburger</h3>
                </div>
            </div>
        </div>
    )
}
