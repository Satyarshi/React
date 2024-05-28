import React, { useContext } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { PostlistData } from "../store/content";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostlistData);
  const handleOnClick = (postId) => {
    deletePost(postId);
  };
  return (
    <div>
      <div className="card" style={{ width: "18rem", margin: "15px" }}>
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => handleOnClick(post.id)}
        >
          <MdDeleteOutline />
        </span>
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.body}</p>
          <div className="alert alert-success" role="alert">
            There are {post.reactions} on this post
          </div>
          {Array.isArray(post.tags) &&
            post.tags.map((tag, index) => (
              <span
                key={index}
                className="badge text-bg-primary"
                style={{ marginRight: "5px" }}
              >
                {tag}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
