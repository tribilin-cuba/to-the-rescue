import './App.css';
import React, { Component } from "react"
import Post from "../src/Components/Post/Post"

class App extends Component {
  state = {
    posts: {
      firstPost: {
        sex: "Hembra",
        age: "4 meses",
        address: "Concha y Via Blanca",
        path: "./img1.jpeg"
      },
      secondPost: {
        sex: "Macho",
        age: "2 meses",
        address: "Concha y Luyano",
        path: "./img2.jpeg"
      }
    }
  }
  render() {

    const posts = Object.keys(this.state.posts)
      .map(postId => {
        const post = this.state.posts[postId];
        return <Post
          key={postId}
          sex={post.sex}
          age={post.age}
          address={post.address}
          path={post.path}
        />;
      })
    return (
      <div className="App" >
        {posts}
      </div>
    );
  }
}

export default App;
