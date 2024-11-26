import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost, editPost } from "./features/post/postSlice";
import Table from "./components/Table";

function App() {
  const [post, setPost] = useState({});
  const dispatch = useDispatch();
  const [editId, setEditId] = useState("");

  let handleEdit = (post) => {
    setPost(post);
    setEditId(post.id);
  };

  let handleInput = (e) => {
    let { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    if (editId == "") {
      dispatch(createPost(post));
    } else {
      dispatch(editPost(post));
    }
    setPost({});
  };

  return (
    <>
      <div className="container" style={{ padding: "2rem" }}>
        <form
          className="w-50 mx-auto mt-3"
          onSubmit={handleSubmit}
          style={{
            background: "#f8f9fa",
            padding: "2rem",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="mb-3">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label"
              style={{ fontWeight: "bold" }}
            >
              Title
            </label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={post.title || ""}
              onChange={handleInput}
              style={{
                border: "1px solid #ced4da",
                padding: "0.5rem",
                borderRadius: "4px",
              }}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label"
              style={{ fontWeight: "bold" }}
            >
              Description
            </label>
            <input
              type="text"
              className="form-control"
              name="description"
              value={post.description || ""}
              onChange={handleInput}
              style={{
                border: "1px solid #ced4da",
                padding: "0.5rem",
                borderRadius: "4px",
              }}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            style={{ backgroundColor: "#007bff", border: "none" }}
          >
            Submit
          </button>
        </form>
      </div>
      <Table handleEdit={handleEdit} />
    </>
  );
}

export default App;
