import { createContext, useReducer } from "react";

export const PostlistData = createContext({
  postList: [],
  addPost: () => {},
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
  }
  return newPostList;
};
const PostListContent = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    defaultPostList
  );
  const addPost = (title, body, reactions, user_id, tags) => {
    dispatchPostList({
      type: "ADD_ITEM",
      payload: { id: Date.now(), title, body, reactions, user_id, tags },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({ type: "DELETE_ITEM", payload: { postId } });
  };
  return (
    <PostlistData.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostlistData.Provider>
  );
};
export default PostListContent;
const defaultPostList = [
  {
    id: "1",
    title: "Vacation",
    body: "After a long month of working , finally its time for a nice long vacation . What do you think which place is best ???",
    reactions: "999+",
    user_id: "satya",
    tags: ["Vacation", "Enjoy", "WanderLust"],
  },
  {
    id: "2",
    title: "Graduated",
    body: "After a 4 years of hardwork finally I am graduated with flying colors .",
    reactions: "100+",
    user_id: "satya",
    tags: ["Graduated", "B.Tech"],
  },
];
