
import './App.css';

import Contact from './components/Contact';

import Home from './components/Home';
import GalleryX from './components/GalleryX';
import News from './components/News';

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
          <Switch>
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
            <Route path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            
          </Switch>
        </div>
      </Router>
    );

}


function About() {
  return <h2>About</h2>;
}




export default App;




