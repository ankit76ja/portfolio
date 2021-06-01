import { Topbar } from './components/topbar/Topbar';
import { Intro } from './components/intro/Intro';
import { Works } from './components/works/Works';
import { Portfolio } from './components/portfolio/Portfolio';
import { Testimonials } from './components/testimonials/Testimonials';
import { Contacts } from './components/Contacts/Contacts';
import './app.scss';
function App() {
  return (
    <div className="app">
      <Topbar/>
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
