
import './App.css';

import Contact from './components/Contact';

import Home from './components/Home';
import GalleryX from './components/GalleryX';
import News from './components/News';
import About from './components/About';
import Admin from './components/Admin';
import Products from './components/Products';

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
          <Switch>
              {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/products">
              <Products />
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
            <Route path="/home">
              <Home />
            </Route>
            <Route path="*">
              <h1> NO ROUTE </h1>
            </Route>
          </Switch>
        </div>
      </Router>
    );

}






export default App;




