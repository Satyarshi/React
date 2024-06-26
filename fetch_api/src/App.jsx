import Header from "./assets/Header";
import Footer from "./assets/Footer";
import "./App.css";
import Sidebar from "./assets/Sidebar";
import PostList from "./assets/PostList";
import CreatePost from "./assets/CreatePost";
import { useState } from "react";
import PostListContent from "./store/content";
function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <PostListContent>
      <div className="appContainer">
        <Sidebar content={selectedTab} setcontent={setSelectedTab}></Sidebar>
        <div className="content">
          <Header></Header>
          {selectedTab === "Home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}
          <Footer></Footer>
        </div>
      </div>
    </PostListContent>
  );
}

export default App;
