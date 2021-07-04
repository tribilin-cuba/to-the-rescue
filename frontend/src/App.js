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

class App extends Component {
  render() {
    return (
      <div className="App" >
        <Route path="/" exact component={Posts} />
        <Route path="/my-posts" component={MyPosts} />
        <Route path="/log-in" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/new-post" component={NewPost} />
        <Route path="/edit-post/:id" component={EditPost} />
        <Route path="/post-details/:id/:fromHome" component={PostDetails} />
      </div>
    );
  }
}

export default App;
