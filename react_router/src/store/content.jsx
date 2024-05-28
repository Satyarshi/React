import { createContext, useReducer, useState, useEffect } from "react";

export const PostlistData = createContext({
  postList: [],
  addPost: () => {},
  fetching: false,
  deletePost: () => {},
});
const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_ITEM") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_ITEM") {
    newPostList = [action.payload.post, ...currentPostList];
  } else if (action.type === "ADD_ALL_ITEMS") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};
const PostListContent = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_ITEM",
      payload: { post },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({ type: "DELETE_ITEM", payload: { postId } });
  };
  const addPosts = (posts) => {
    dispatchPostList({ type: "ADD_ALL_ITEMS", payload: { posts } });
  };

  const [fetching, setFetching] = useState(false);
  useEffect(() => {
    setFetching(true);
    fetch("https://dummyjson.com/posts", {})
      .then((res) => res.json())
      .then((data) => {
        addPosts(data.posts);
        setFetching(false);
      });
  }, []);
  return (
    <PostlistData.Provider value={{ postList, addPost, fetching, deletePost }}>
      {children}
    </PostlistData.Provider>
  );
};
export default PostListContent;
