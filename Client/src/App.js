
import './App.css';

import Contact from './components/Contact';

import Home from './components/Home';
import GalleryX from './components/GalleryX';
import News from './components/News';
import About from './components/About';
import Admin from './components/Admin';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
      <Router>
        <div>
              {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
            <Route path="/about">
              <About />
            </Route>
            <Route path="/gallery">
              <GalleryX />
            </Route>
            <Route path="/news">
              <News />
            </Route>
            <Route path ='/contact'>
              <Contact />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            
        </div>
      </Router>
    );

}






export default App;




