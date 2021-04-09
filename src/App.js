
import './App.css';

import Header from './components/Header';
import Item from './components/Item';



import Accessories from './assets/Desktop-Accessories.jpg';
import ModelX from './assets/Desktop-ModelX.jpeg';
import ModelS from './assets/Desktop-ModelS.jpeg';
import Model3 from './assets/Desktop-Model3.jpeg';
import ModelY from './assets/Desktop-ModelY.jpeg';
import SolarPanels from './assets/Desktop-SolarPanels.jpeg';
import SolarRoof from './assets/Desktop-SolarRoof.jpeg';




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
            <Route path ='/contact'>
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            
          </Switch>
        </div>
      </Router>
    );

}

function Home() {
  return(
    <Home />
    
  );
}

function About() {
  return <h2>About</h2>;
}

function Contact() {
  return(
    <Header />
  );
}


export default App;




