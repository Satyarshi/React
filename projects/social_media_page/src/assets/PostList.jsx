import React, { useContext } from "react";
import Post from "./Post";
import { PostlistData } from "../store/content";
const PostList = () => {
  const { postList } = useContext(PostlistData);
  return (
    <div>
      {postList.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

export default PostList;
