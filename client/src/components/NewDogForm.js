import React, { useRef, useState } from "react";
import { uploadToS3 } from "../lib/aws";
import { useNavigate } from "react-router-dom";

function NewDogForm({ user, onAddDog }) {
  const file = useRef(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    age: 0,
    about: "",
    pic: "",
    user_id: 0,
  });

  function handleFileChange(event) {
    file.current = event.target.files[0];
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // 1. get the presigned url to upload file
    fetch("/dogs/presigned-url", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ file_name: file.current.name }),
    })
      .then((resp) => resp.json())
      .then((uploadParamsJSON) => {
        // 2. upload image to s3
        uploadToS3(uploadParamsJSON, file.current).then((respJSON) => {
          const location = respJSON.Location;

          // 3. create new item in db
          fetch("/dogs", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...formData, pic: location[0] }),
          })
            .then((r) => r.json())
            .then((formData) => onAddDog(formData));

          setFormData({
            name: "",
            breed: "",
            age: 0,
            about: "",
            pic: "",
            user_id: 0,
          });
        });
      });

    navigate("/doglist");
  }

  return (
    <div className="section profile-content">
      <div className="container">
        <div className="owner">
          <form className="form" onSubmit={handleSubmit}>
            <h3>Add Your Dog</h3>
            <p>Dog's name: </p>
            <input
              type="text"
              name="name"
              className="form-control"
              style={{ width: 300 }}
              value={formData.name}
              onChange={handleChange}
            />
            <br />
            <p>Breed: </p>
            <input
              type="text"
              name="breed"
              className="form-control"
              style={{ width: 300 }}
              value={formData.breed}
              onChange={handleChange}
            />
            <br />
            <p>Age: </p>
            <input
              type="number"
              name="age"
              className="form-control"
              style={{ width: 300 }}
              value={formData.age}
              onChange={handleChange}
            />
            <br />
            <p>Introduction: </p>
            <textarea
              type="text"
              name="about"
              className="form-control"
              style={{ width: 600 }}
              value={formData.about}
              onChange={handleChange}
            />
            <p>
              Picture:{" "}
              <input
                className="form-control"
                style={{ width: 300 }}
                type="file"
                name="pic"
                onChange={handleFileChange}
              />
            </p>
            <br />
            <button className="btn btn-outline-danger btn-sm" type="submit">
              Add Your Dog
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewDogForm;
