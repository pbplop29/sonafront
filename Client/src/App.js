import './App.css';
import Contact from './components/Contact';
import Home from './components/Home';

import GalleryX from './components/GalleryX';

import About from './components/About';
import Admin from './components/Admin';
import Products from './components/Products';
import {useState, useEffect } from 'react';
import firebase from "firebase";
import {Helmet} from "react-helmet";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

var noti_stream;

function App() {

  const [notice, setNotice] = useState(false);
  const [notice_text, setText] = useState("");

  useEffect(() => {
    if(localStorage.visited != 1){
      firebase.firestore().collection("stuff").doc("stuff for website").update({
	total_visit: firebase.firestore.FieldValue.increment(1)
      }).catch((error) => {
	console.log(error);
      });
      localStorage.visited = 1;
    }
    noti_stream = firebase.firestore().collection("stuff").doc("stuff for website").onSnapshot((doc) => {
      if(doc.data()["Notification"] == 0){
	setText(doc.data()["Notice"]);
	setNotice(true);
      }
      else{
	setNotice(false);
      }
    });
    return () => {
      noti_stream();
    }
  }, []);

  function RemoveNotice(){
    setNotice(false);
  }

  return (
      <div>
      <Helmet>
       <title>Sonapur Ltd.</title> 
      </Helmet>
      <Router>
        <div>
          <Switch>
              {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
            <Route exact path="/">
              <Home
              _notice = {notice}
              _RemoveNotice = {RemoveNotice}
              text = {notice_text}
              />
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
            
            <Route path ='/contact'>
              <Contact />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/home">
              <Home 
                _notice = {notice}
                _RemoveNotice = {RemoveNotice}
                text = {notice_text}
              />
            </Route>
            <Route path="*">
              <h1> NO ROUTE </h1>
            </Route>
          </Switch>
        </div>
      </Router>
      </div>
    );

}






export default App;




