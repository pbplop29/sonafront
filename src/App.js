
import './App.css';

import Header from './components/Header';

import Home from './components/Home';


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


function About() {
  return <h2>About</h2>;
}

function Contact() {
  return(
    <Header />
  );
}


export default App;




