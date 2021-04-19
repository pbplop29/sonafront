import React from 'react'
import './Admin.css'
import Header from './Header'
import MenuX from './MenuX'
import firebase from "firebase";
import {v4 as uuidv4} from 'uuid';
import { ProSidebar, SidebarHeader, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import './AdminSidebar.scss';
import{
  Route,
  Link,
  Switch
} from "react-router-dom";

class Admin extends React.Component{

  constructor(props){
    super(props);
    this.state = {loggedin: false, checkinguser: true}
  }

  componentDidMount(){
    firebase.auth().onAuthStateChanged((user) => {
      if(user){
	this.setState({loggedin: true});
      }
      this.setState({checkinguser: false});
    });
  }

  onsubmit = (event) => {
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION).then(() => {
      return firebase.auth().signInWithEmailAndPassword(event.target[0].value, event.target[1].value).then(() => {
	alert("LOGGED IN");
	this.setState({loggedin: true});
      }).catch((error) => {
	alert(error.message);
      })
    }).catch((error) => {
      console.log(error.message);
    })
    event.preventDefault();
  }

  logout = () => {
    firebase.auth().signOut().then(() => {
      alert("Signed out");
      this.setState({loggedin: false});
    }).catch((error) => {
      console.log(error.message);
    });
  }

  render(){
    if(this.state.checkinguser){
      return <progress></progress>
    }
    else if(this.state.loggedin){
      return <AdminPanel logout = {this.logout} />
    }
    return(
      <div>
        <MenuX/>
        <Header/>
        <section>
          <div>
            <br/><br/><br/>
            <div className="container__dad">
              <div class="container">
                <div class="title">Log In</div>
                  <div class="content">
                    <form onSubmit={this.onsubmit}>
                      <div class="user-details">
                        <div class="input-box">
                        <span class="details">UID</span>
                        <input type= "email" name="username"/><br/>                          
                        </div>
                        <div class="input-box">
                        <span class="details"l>PASSWORD</span>
	                      <input type= "password" name="password"/><br/>                          
                        </div>
                        <div class="button">
                        <input type="submit" value="Submit"/>
                        </div>  
                      </div>
                    </form>
                  </div>
                </div>
            </div>
        </div>
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
        </section>
      </div>
    )
  }

}

var email_stream;

class AdminPanel extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="parent-con">
      	 <Link to={'/admin'}>Dashboard</Link><br/>
         <Link to={'/admin/gallery'}>Gallery</Link><br/>
         <Link to={'/admin/email'}>Email</Link><br/>
         <Link to={'/admin/about'}>About</Link><br/>
         <Link to={'/admin/notification'}>Notification</Link><br/>
         <a href="" onClick={() => this.props.logout()}>Logout</a>
        <div className="other_stuff">
          <Switch>
            <Route exact path={'/admin'}>
              <DashboardPanel />
            </Route>
            <Route path={'/admin/gallery'}>
              <GalleryPanel /> 
            </Route>
            <Route path={'/admin/email'}>
              <EmailPanel />
            </Route>
            <Route path={'/admin/about'}>
              <AboutPanel />
            </Route>
            <Route path={'/admin/notification'}>
              <NotificationPanel />
            </Route>
            <Route path={'*'}>
              <h1> NO ROUTE </h1>
            </Route>
          </Switch>
        </div> 
      </div>
    ) 
  } 
} 

var notice_stream; 

class NotificationPanel extends React.Component{

  constructor(props){
    super(props);
    this.state = {text: '', notification: 3};
  }

  componentDidMount(){
    notice_stream = firebase.firestore().collection("stuff").doc("stuff for website").onSnapshot((doc) => {
      if(doc.data()["Notice"]){
	this.setState({text: doc.data()["Notice"], notification: doc.data()["Notification"]});
      }
    });
  }

  onsubmit = (event) => {
    event.preventDefault();
    firebase.firestore().collection("stuff").doc("stuff for website").update({
      Notice: this.state.text
    }).catch((error) => {
      console.log(error);
    });
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  notificationtoggle = () => {
    var noti_value;
    if(this.state.notification == 1){
      noti_value = 0;
    }
    else{
      noti_value = 1;
    }
    console.log(noti_value);
    firebase.firestore().collection("stuff").doc("stuff for website").update({
      Notification: noti_value
    }).catch((error) => {
      console.log(error);
    });
  }

  render(){
    return(
      <div>
      <form onSubmit={this.onsubmit}>
        <textarea name="text" value={this.state.text} onChange={this.handleChange} rows={15} cols={50}/>
        <input type="submit" value="Edit"/>
      </form>
      <button onClick={this.notificationtoggle}>Turn notice on/off</button>
      {this.state.notification == 1 &&
	<div>Notice is not up on the website</div>
      }
      {this.state.notification == 0 &&
	 <div>Notice is up on the website</div>
      }
      </div>
    )
  }
}

class AboutPanel extends React.Component{
  render(){
    return(
      <div>
        <br/>
        <h1>ABOUT</h1>
      </div>
    )
  }
}

class DashboardPanel extends React.Component{
  render(){
    return(
      <div>
        <br/>
        <h1>HELLO</h1>
      </div>
    )
  }
}

var email_stream;

class EmailPanel extends React.Component{

  constructor(props){
    super(props);
    this.state =({emails: []});
    this.fileInput = React.createRef();
  }

  componentDidMount(){
    email_stream = firebase.firestore().collection("stuff").doc("stuff for website").onSnapshot((doc) => {
      this.state.emails.length = 0;
      this.state.emails = doc.data()["emails"];
      this.setState({});
    })
  }

  componentWillUnmount(){
    email_stream();
  }

  addemail = (event) => {
    event.preventDefault();
    firebase.firestore().collection("stuff").doc("stuff for website").update({
      emails: firebase.firestore.FieldValue.arrayUnion(event.target[0].value)
    });
  }

  deleteemail = (email) => {
    console.log(email);
    firebase.firestore().collection("stuff").doc("stuff for website").update({
      emails: firebase.firestore.FieldValue.arrayRemove(email)
    });
  }

  render(){
    return(
      <div>
        <br/>
        <form onSubmit={this.addemail}>
          <input type="email"  placeholder="Email here"/>
          <button type="submit">Add</button>
        </form>
        {
	  this.state.emails.map((email) =>
	    <div>
	      <h1> {email} </h1>
	      <button onClick={() => this.deleteemail(email)}> Delete email </button>
	    </div>
	  )
        }<br/>
      </div>
    )
  }

}

var url_stream;

class GalleryPanel extends React.Component{

  constructor(props){
    super(props);
    this.state = ({image_urls: [], uploading: false});
    this.fileInput = React.createRef();
  }

  componentDidMount(){
    url_stream = firebase.firestore().collection("stuff").doc("URLS").onSnapshot((doc) => {
      this.state.image_urls.length = 0;
      for(const [key, value] of Object.entries(doc.data())){
	this.state.image_urls.push([key, value]);
      }
      this.state.image_urls.sort();
      this.setState({});
    })
  }

  componentWillUnmount(){
    url_stream();
  }

  uploadimage = async (event) => {
    event.preventDefault();
    this.setState({uploading: true});
    for(var i=0; i<this.fileInput.current.files.length; ++i){
      var id = uuidv4();
      await firebase.storage().ref().child('photos/' + id).put(this.fileInput.current.files[i]);
      var url = await firebase.storage().ref().child('photos/' + id).getDownloadURL();
      await firebase.firestore().collection("stuff").doc("URLS").set({
	[id]: url,
      },{merge: true})
    }
    this.setState({uploading: false});
  }

  deleteimage = async(value) => {
    firebase.storage().ref().child('photos/' + value).delete().then(() => {
      console.log("Deleted");
    }).catch((error) => {
      console.log(error);
    });
    await firebase.firestore().collection("stuff").doc("URLS").update({[value]: firebase.firestore.FieldValue.delete()});
  }

  render(){
    return(
      <div>
        <br/>
        <form onSubmit={this.uploadimage}>
          <input type="file" accept=".jpg, .jpeg, .png" ref={this.fileInput} multiple/><br/><br/>
          <button type="submit">Upload</button>
        </form>
        {
	this.state.uploading &&
	<progress></progress>
        }
        <br/>
        {
  	  this.state.image_urls.map((url) =>
	    <div>
	      <img src={url[1]}/><br/>
	      <button onClick={() => this.deleteimage(url[0])}>Delete</button>
	    </div>
	  )
        }
      </div>
    )
  }

}

export default Admin
