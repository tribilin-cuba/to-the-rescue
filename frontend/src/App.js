import './App.css';
import React, { Component } from "react"
import Posts from "./Components/Posts/Posts"
import NewPost from "./Components/Posts/NewPost/NewPost"
import { Route } from "react-router-dom"

class App extends Component {
  state = {

  }
  render() {
    return (
      <div className="App" >
        <Route path="/" exact component={Posts} />
        <Route path="/new-post" component={NewPost} />
      </div>
    );
  }
}

export default App;
