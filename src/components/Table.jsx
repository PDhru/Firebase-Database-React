import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, fetchPost } from "../features/post/postSlice";

function Table({ handleEdit }) {
  const { posts, error, loading } = useSelector((state) => state.post);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPost());
  }, [dispatch]);

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "1rem" }}>Loading...</div>
    );
  }

  if (error) {
    return (
      <div style={{ color: "red", textAlign: "center" }}>{error.message}</div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        {posts.map((post) => (
          <div
            key={post.id}
            className="col-12 col-sm-6 col-md-4 col-lg-3 my-3 d-flex justify-content-center"
          >
            <div
              className="card"
              style={{
                width: "100%",
                maxWidth: "20rem",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                borderRadius: "12px",
                overflow: "hidden",
                backgroundColor: "#f9f9f9",
              }}
            >
              <img
                src={`https://via.placeholder.com/150?text=${post.title}`}
                alt={post.title}
                style={{ width: "100%", height: "150px", objectFit: "cover" }}
              />
              <div className="card-body" style={{ padding: "1rem" }}>
                <h5
                  className="card-title"
                  style={{
                    fontWeight: "bold",
                    color: "#333",
                    fontSize: "1.25rem",
                  }}
                >
                  {post.title}
                </h5>
                <p
                  className="card-text"
                  style={{
                    color: "#555",
                    fontSize: "0.9rem",
                    lineHeight: "1.4",
                  }}
                >
                  {post.description}
                </p>
                <div className="d-flex justify-content-between">
                  <button
                    onClick={() => dispatch(deletePost(post.id))}
                    type="button"
                    className="btn btn-danger"
                    style={{
                      padding: "0.4rem 0.8rem",
                      fontSize: "0.9rem",
                      borderRadius: "5px",
                    }}
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleEdit(post)}
                    type="button"
                    className="btn btn-primary"
                    style={{
                      padding: "0.4rem 0.8rem",
                      fontSize: "0.9rem",
                      borderRadius: "5px",
                    }}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Table;
