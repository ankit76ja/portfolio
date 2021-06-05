import { Topbar } from './components/topbar/Topbar';
import { Intro } from './components/intro/Intro';
import { Works } from './components/works/Works';
import { Portfolio } from './components/portfolio/Portfolio';
import { Testimonials } from './components/testimonials/Testimonials';
import { Contacts } from './components/Contacts/Contacts';
import {Menu } from './components/menu/Menu';
import './app.scss';
import { useState } from 'react';
function App() {

  const [menuState, setMenuState] = useState(false);

  return (
    <div className="app">
      <Topbar menuState= {menuState} setMenuState={setMenuState}/>
      <Menu menuState= {menuState} setMenuState={setMenuState}/>
      <div className="section">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Testimonials/>
        <Contacts/>
      </div>
    </div>
  );
}

export default App;
