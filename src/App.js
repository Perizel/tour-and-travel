
import './App.css';
import './style/style.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Service from './components/Service'
import ChooseUs from './components/ChooseUs'
import Counters from './components/Counters';
import Specials from './components/Specials';
import Deals from './components/Deals';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="Navbar">
        <Navbar/>
      </div>
    <div className="Hero">
      <Hero/>
    </div>
    <div className="Service">
      <Service/>
    </div>
    <div className="ChooseUs">
      <ChooseUs/>
    </div>
    <div className="CounterProject">
      <Counters/>
    </div>
    <div className="Specials">
      <Specials/>
    </div>
    <div className="Deals">
      <Deals/>
    </div>
    <div className="Gallery">
      <Gallery/>
    </div>
    <div className="Footer">
      <Footer/>
    </div>
    </div>
  );
}

export default App;
