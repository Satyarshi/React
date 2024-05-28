import React, { useContext } from "react";
import Post from "./Post";
import { PostlistData } from "../store/content";
import Empty from "./Empty";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "./Loading";
const PostList = () => {
  const [fetching, setFetching] = useState(false);
  const { postList, addPosts } = useContext(PostlistData);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setFetching(true);
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addPosts(data.posts);
        setFetching(false);
      });
    return () => {
      controller.abort();
    };
  }, []);
  return (
    <div>
      {fetching && <Loading />}
      {!fetching && postList.length === 0 && <Empty />}
      {!fetching &&
        postList.map((post, index) => <Post key={index} post={post} />)}
    </div>
  );
};

export default PostList;

/* (1). can write 
    fetch("https://dummyjson.com/posts")
    .then((res)=>res.json())
    .then((data)=>addPosts(data.posts));

    directly outside handleclick function without any "GET POSTS" button but for every post it will re-render it again and again. Can check it in network of inspect
    
    
   (2). can also write
        const { postList, addPosts } = useContext(PostlistData);
        const [data, setData] = useState(false);
        if (!data) {
          fetch("https://dummyjson.com/posts")
          .then((res) => res.json())
          .then((data) => addPosts(data.posts));
          setData(true);
        }

        this will only re-render it only one time at initial stage but if we want to re-render it at various other dependencies we can use useEffect hooks. useEffect function accepts first arguments as a function and array of dependencies as its second argument. if we don't pass the second argument then it will behave like the (1). of this component.

        By using this hook you tell the react that your components needs to do something after it renders


    (3) Return statement in useEffect is used to cleanup any resources that were set up in the effect. react will call this cleanup function when the component is removed from the DOM or no longer rendered before the effect runs again(if any of the dependecies change). simply  purni value ko cleanup karne ke liye use hota hai 
    */
