import { slide as Menu } from 'react-burger-menu'
import React from 'react'
import './Admin.css'
import Header from './Header'
import MenuX from './MenuX'
import firebase from "firebase";
import {v4 as uuidv4} from 'uuid';
import CountUp from 'react-countup';

import 'react-pro-sidebar/dist/css/styles.css';
import './AdminSidebar.scss';
import{
  Route,
  Link,
  Switch
} from "react-router-dom";
import sonaLogoGif from '../assets/Sona-logo-gif.gif'

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
      return(
	<section>
	<div class="circle__admin"></div>
	<div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
        </section>
      )
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


<div>
                {/* "right" pulls the menu from the right, put "left" if you want otherwise. "disableAutoFocus" prevents from automatic focus of the first menu item.*/}
    <Menu right disableAutoFocus> 
    {/* All the menu items. */}
    <Link to={'/admin'}>Dashboard</Link>
    <Link to={'/admin/gallery'}>Gallery</Link>
    <Link to={'/admin/email'}>Email</Link>
    <Link to={'/admin/notification'}>Notification</Link>
    <a href="" onClick={() => this.props.logout()}>Logout</a>

    <div className="image">
    <img src={sonaLogoGif} alt="" />
    </div>
    
    
    </Menu>
            </div>
    
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

  componentWillUnmount(){
    notice_stream();
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
        <section>
          <div className="container__dad">
            <div className="container">
            <div class="content">
            <div className="email__title">
              Please enter the notice you want to display
            </div>
            <div class="user-details">




      <form onSubmit={this.onsubmit}>
        <textarea name="text" value={this.state.text} onChange={this.handleChange} rows={15} cols={50}/>
        <div className="button">
        <input type="submit" value="Edit"/>
        </div>
      </form>
      <div className="button__del">
      <button onClick={this.notificationtoggle}>Notice on/off</button>
      </div>
      {this.state.notification == 1 &&
	<div className='notice__off'>Notice is not up on the website</div>
      }
      {this.state.notification == 0 &&
	 <div className='notice__on'>Notice is up on the website</div>
      }

      </div>
          </div>
          </div>
          </div>
      </section>
      </div>
    )
  }
}

var views_stream;

class DashboardPanel extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {views: 0, coming_in: false, update: false};
  }

  componentDidMount(){
    views_stream =firebase.firestore().collection("stuff").doc("stuff for website").onSnapshot((doc) => {
      if(!this.state.update){
	this.setState({views: doc.data()["total_visit"], views_2: doc.data()["total_visit"], coming_in: true});
      }
      else{
	this.setState({views_2: doc.data()["total_visit"]});
      }
    });
  }

  render(){
    return(
      <div>
        <section>

       
      <div className="container__dad">
            <div className="container">
          <div className="dashboard__content">
          <div className='dashboard__title'>Introduction to Admin Panel</div>
          <div className="dashboard__intro__text">This is a panel exclusively for the moderator of the webiste.<br></br>
          This panel will help you change different items displayed on the website for all other users.
          You can customize emails, descriptions, notification, all from here. <br></br><br></br>Click on the menu icon on the top right to open the respective drawers.
          </div>
          </div>
          <div className= "view_counter">
        <h1 className='count__start'>The website has been visited the following no of times:</h1>
      {this.state.update &&
	<CountUp start={this.state.views} end={this.state.views_2} onEnd={() => this.setState({views: this.state.views_2} )}/> 
      }
      {this.state.coming_in &&
	  <CountUp start={0} end={this.state.views} onEnd={() => this.setState({coming_in: false, update: true})}/> 
      }</div>

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
        <section>
        <div className="container__dad">
          <div className="container">
          <div class="content">
            <div className="email__title">
              These emails will receive "Contact Us" forms. Enter the email address you want to add and click the "Add" button.
            </div>
            <div class="user-details">
          <form onSubmit={this.addemail}>
            <div className="input-box">
          <input  type="email"  placeholder="Email here"/>
          </div>
          
          <div class="button">
                                <input type="submit" value="ADD"></input>
                                </div>
        </form>
        {
	  this.state.emails.map((email) =>
	    <div>
	      <h1 className='title'> {email} </h1>
        <div className="button__del">
	      <button onClick={() => this.deleteemail(email)}> Delete Email </button>
        </div>
	    </div>
	  )
        }<br/>

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
      <div className='admin__gallery__body'>
        <div className="empty__space__gallery__admin"></div>
        <div className="submit_portion">
        <div className="email__title">
            Upload images for "Gallery" here.
            </div>
        <form onSubmit={this.uploadimage}>
          
          <input  type="file" accept=".jpg, .jpeg, .png" ref={this.fileInput} multiple/>
          
          <div className="button__del">
          <button type="submit">Upload</button>
          </div>
        </form>
        {
	this.state.uploading &&
  <div class="circle__progress"></div>
        }
        
        <br></br>
        </div>
        <div className="gallery__admin__image__dad">
        
        {
  	  this.state.image_urls.map((url) =>
	    <div>
        <div className="gallery__admin__image">
        
	      <img src={url[1]}/>
        
        <div className="button__del">
	      <button onClick={() => this.deleteimage(url[0])}>Delete</button></div><br></br>
        </div>
        </div>
	    
	  )
        }

</div>

      </div>
    )
  }

}

export default Admin
