import React from 'react'
import './Admin.css'
import Header from './Header'
import MenuX from './MenuX'
import firebase from "firebase";
import {v4 as uuidv4} from 'uuid';

class Admin extends React.Component{

  constructor(props){
    super(props);
    this.state= {loggedin: false, checkinguser: true}
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
	console.log(error.message);
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
        <br/><br/><br/><br/>
        <div>
          <form onSubmit={this.onsubmit}>
            <label>UID</label>
            <input type= "text" name="username"/><br/>
            <label>PASSWORD</label>
	    <input type= "password" name="password"/><br/>
	    <input type="submit" value="Submit"/>
          </form>
        </div>
      </div>
    )
  }

}

var url_stream;
var email_stream;

class AdminPanel extends React.Component{

  constructor(props){
    super(props);
    this.state = {uploading: false, image_urls: [], emails: []};
    this.fileInput = React.createRef();
  }

  async componentDidMount(){
    url_stream = firebase.firestore().collection("stuff").doc("URLS").onSnapshot((doc) => {
      this.state.image_urls.length = 0;
      for(const [key, value] of Object.entries(doc.data())){
	this.state.image_urls.push([key, value]);
      }
      this.state.image_urls.sort();
      this.setState({});
    })
    email_stream = firebase.firestore().collection("stuff").doc("stuff for website").onSnapshot((doc) => {
      this.state.emails.length = 0;
      this.state.emails = doc.data()["emails"];
      this.setState({});
    })
  }

  copmonentWillUnmount(){
    url_stream();
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
        <form onSubmit={this.uploadimage}>
          <input type="file" accept=".jpg, .jpeg, .png" ref={this.fileInput} multiple/><br/><br/>
          <button type="submit">Upload</button>
        </form>
        {
	  this.state.uploading &&
	    <progress></progress>
	}
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
        <button onClick={() => this.props.logout()}>LOGOUT</button>
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