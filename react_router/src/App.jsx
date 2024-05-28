import Header from "./assets/Header";
import Footer from "./assets/Footer";
import "./App.css";
import Sidebar from "./assets/Sidebar";
import PostList from "./assets/PostList";
import CreatePost from "./assets/CreatePost";
import { useState } from "react";
import PostListContent from "./store/content";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <PostListContent>
      <div className="appContainer">
        <Sidebar></Sidebar>
        <div className="content">
          <Header></Header>
          <Outlet />
          <Footer></Footer>
        </div>
      </div>
    </PostListContent>
  );
}

export default App;
