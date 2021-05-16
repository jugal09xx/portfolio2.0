import './App.css';
import Navbar from './components/Navbar.js'
import Home from './components/Home.js'
import About from './components/About.js'
import Projects from './components/Projects.js'
import GetInTouch from './components/GetInTouch.js'

function App({theme}) {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <GetInTouch/>
    </div>
  );
}

export default App;
