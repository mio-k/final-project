import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditUser({ user }) {
  const [revisedData, setRevisedData] = useState({
    firstname: "",
    lastname: "",
    contact: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  function handleFormSubmit(e) {
    e.preventDefault();
    fetch(`/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: revisedData.firstname,
        lastname: revisedData.lastname,
        contact: revisedData.contact,
      }),
    })
      .then((r) => r.json())
      .then((updatedUser) => {
        onUpdateUser(updatedUser);
      });
  }
  function onUpdateUser() {
    navigate(`/users/${id}`);
  }

  return (
    <form className="edit-order" onSubmit={handleFormSubmit}>
      <h3>add more information about you</h3>
      <br />
      <p>
        Firstname:{" "}
        <input
          type="text"
          name="firstname"
          className="form-control"
          style={{ width: 400 }}
          value={revisedData.firstname}
          onChange={(e) =>
            setRevisedData((previousRevisedData) => ({
              ...previousRevisedData,
              fistname: e.target.value,
            }))
          }
        />
      </p>
      <br />
      <p>
        Lastname:{" "}
        <input
          type="text"
          name="lastname"
          className="form-control"
          style={{ width: 400 }}
          value={revisedData.lastname}
          onChange={(e) =>
            setRevisedData((previousRevisedData) => ({
              ...previousRevisedData,
              lastname: e.target.value,
            }))
          }
        />
      </p>
      <br />
      <p>
        Contact:{" "}
        <input
          type="text"
          name="contact"
          className="form-control"
          style={{ width: 400 }}
          value={revisedData.contact}
          onChange={(e) =>
            setRevisedData((previousRevisedData) => ({
              ...previousRevisedData,
              contact: e.target.value,
            }))
          }
        />
      </p>
      <br />
      <button
        className="btn btn-outline-danger btn-sm"
        type="submit"
        value="Save"
      >
        Save
      </button>
    </form>
  );
}
export default EditUser;
