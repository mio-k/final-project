import React, { useState } from "react";
import { Link } from "react-router-dom";

function PlaydateForm({ onAddItem, user }) {
  const [formData, setFormData] = useState({
    when: "",
    howlong: "",
    user_id: user.id,
    sitter_id: 0,
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/playdates", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newPlaydate) => onAddItem(newPlaydate));
    setFormData({
      when: "",
      howlong: "",
      user_id: user.id,
      sitter_id: 0,
    });
  }

  return (
    <form className="order-form" onSubmit={handleSubmit}>
      <h3>Add a playdate request</h3>
      {user.dog ? (
        <>
          <p>Need someone to watch {user.dog.name}? Arrange a playdate here.</p>
          <p>
            When:{" "}
            <input
              type="text"
              className="form-control"
              style={{ width: 300 }}
              name="when"
              value={formData.when}
              onChange={handleChange}
              required
            />
          </p>
          <p>
            How long:{" "}
            <input
              type="text"
              className="form-control"
              style={{ width: 300 }}
              name="howlong"
              value={formData.howlong}
              onChange={handleChange}
              required
            />
          </p>
          <br />
          <button className="btn btn-outline-danger btn-sm" type="submit">
            Add request
          </button>
        </>
      ) : (
        <>
          <br />
          <h6>
            You can't add a playdate request until you add your dog to the
            database. <br />
          </h6>
          <br />
          <Link
            to={`/newdogform`}
            className="btn btn-outline-default btn-round"
          >
            <i className="fa fa-cog"></i> Add your dog to the database
          </Link>
        </>
      )}
    </form>
  );
}

export default PlaydateForm;
