import React, { useContext, useRef } from "react";
import styles from "./CreatePost.module.css";
import { PostlistData } from "../store/content";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();
  const { addPost } = useContext(PostlistData);
  const titleElement = useRef(null);
  const bodyElement = useRef(null);
  const reactionsElement = useRef(null);
  const userIdElement = useRef(null);
  const tagsElement = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value
      .split(" ")
      .filter((tag) => tag.trim() !== ""); // Remove empty tags
    const user_id = userIdElement.current.value;
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        body: body,
        reactions: reactions,
        userId: user_id,
        tag: tags,
        /* other post data */
      }),
    })
      .then((res) => res.json())
      .then((post) => {
        addPost(post);
        navigate("/");
      });
    // Clear input fields after submission
    titleElement.current.value = "";
    bodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";
    userIdElement.current.value = "";
  };

  return (
    <div>
      <form className={styles["form-content"]} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="titleInput" className="form-label">
            Title
          </label>
          <input
            ref={titleElement}
            placeholder="Enter your mood"
            type="text"
            className="form-control"
            id="titleInput"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="bodyInput" className="form-label">
            Body
          </label>
          <input
            ref={bodyElement}
            placeholder="Tell more about your mood"
            type="text"
            className="form-control"
            id="bodyInput"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reactionsInput" className="form-label">
            Reactions
          </label>
          <input
            ref={reactionsElement}
            placeholder="Enter no. of persons reacted"
            type="text"
            className="form-control"
            id="reactionsInput"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="userIdInput" className="form-label">
            User Id
          </label>
          <input
            ref={userIdElement}
            placeholder="Enter your user ID"
            type="text"
            className="form-control"
            id="userIdInput"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tagsInput" className="form-label">
            Tags
          </label>
          <input
            ref={tagsElement}
            placeholder="Enter tags separated by space"
            type="text"
            className="form-control"
            id="tagsInput"
            aria-describedby="emailHelp"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
