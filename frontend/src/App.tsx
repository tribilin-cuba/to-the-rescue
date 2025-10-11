import "./App.css";
import Posts from "./Components/Posts/Posts";
import NewPost from "./Components/NewPost/NewPost";
import PostDetails from "./Components/PostDetails/PostDetails";
import { Route, Routes } from "react-router-dom";
import Register from "./Components/Authentication/Register";
import Login from "./Components/Authentication/Login";
import MyPosts from "./Components/MyPosts/MyPosts";
import EditPost from "./Components/EditPost/EditPost";
import Flash from "./Components/Flash/Flash";
import Bus from "./Utils/Bus";
import AboutUs from "./Components/AboutUs/AboutUs";

function App() {
    window.flash = (message, type = "success") =>
      Bus.emit("flash", { message, type });

    return (
      <div className="App">
        <Flash />
        <Routes>
          <Route path="/" element={<Posts />} />
          <Route path="/home" element={<Posts />} />
          <Route path="/alert/all" element={<Posts />} />
          <Route path="/my-posts" element={<MyPosts />} />
          <Route path="/log-in" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/new-post/:from" element={<NewPost />} />
          <Route path="/edit-post/:id/:from" element={<EditPost />} />
          <Route path="/post-details/:id/:from" element={<PostDetails />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </div>
    );
}

export default App;
