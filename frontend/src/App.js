import './App.css';
import React, { Component } from "react"
import Posts from "./Components/Posts/Posts"
import NewPost from "./Components/NewPost/NewPost"
import PostDetails from "./Components/PostDetails/PostDetails"
import { Route } from "react-router-dom"
import Register from './Components/Authentication/Register';
import Login from './Components/Authentication/Login';
import MyPosts from './Components/MyPosts/MyPosts';
import EditPost from './Components/EditPost/EditPost';
import Flash from './Components/Flash/Flash';
import Bus from './Utils/Bus';
import AboutUs from './Components/AboutUs/AboutUs';

class App extends Component {

  render() {
    window.flash = (message, type = "success") => Bus.emit('flash', ({ message, type }))

    return (
      <div className="App" >
        <Flash />
        <Route path="/" exact component={Posts} />
        <Route path="/home" exact component={Posts} />
        <Route path="/my-posts" component={MyPosts} />
        <Route path="/log-in" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/new-post/:from" component={NewPost} />
        <Route path="/edit-post/:id/:from" component={EditPost} />
        <Route path="/post-details/:id/:from" component={PostDetails} />
        <Route path="/about-us" component={AboutUs} />
      </div>
    );
  }
}

export default App;
