import { createContext, useReducer } from "react";

export const PostlistData = createContext({
  postList: [],
  addPost: () => {},
  addPosts: () => {},
  deletePost: () => {},
});
const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_ITEM") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_ITEM") {
    newPostList = [action.payload, ...currentPostList];
  } else if (action.type === "ADD_ALL_ITEMS") {
    newPostList = [...currentPostList, ...action.payload.posts];
  }
  return newPostList;
};
const PostListContent = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const addPost = (title, body, reactions, user_id, tags) => {
    dispatchPostList({
      type: "ADD_ITEM",
      payload: { id: Date.now(), title, body, reactions, user_id, tags },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({ type: "DELETE_ITEM", payload: { postId } });
  };
  const addPosts = (posts) => {
    dispatchPostList({ type: "ADD_ALL_ITEMS", payload: { posts } });
  };
  return (
    <PostlistData.Provider value={{ postList, addPost, addPosts, deletePost }}>
      {children}
    </PostlistData.Provider>
  );
};
export default PostListContent;
