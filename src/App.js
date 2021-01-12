import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <Navbar />
        <div className="main">
          <Home />
          <About />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
