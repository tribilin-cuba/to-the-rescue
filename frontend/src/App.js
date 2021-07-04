import './App.css';
import React, { Component } from "react"
import Posts from "./Components/Posts/Posts"
import NewPost from "./Components/NewPost/NewPost"
import PostDetails from "./Components/PostDetails/PostDetails"
import { Route } from "react-router-dom"
import Register from './Components/Authentication/Register';
import Login from './Components/Authentication/Login';

class App extends Component {
  state = {

  }
  render() {
    return (
      <div className="App" >
        <Route path="/" exact component={Posts} />
        <Route path="/log-in" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/new-post" component={NewPost} />
        <Route path="/post-details/:id" component={PostDetails} />
      </div>
    );
  }
}

export default App;
