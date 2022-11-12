import React, { useRef, useState } from "react";
import { uploadToS3 } from "../lib/aws";
import { useNavigate } from "react-router-dom";
import topbanner from "./img/topbanner.jpeg";

function NewDogForm({ user, onAddDog, setUser }) {
  const file = useRef(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    age: 0,
    about: "",
    user_id: user.id,
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
            .then(() => {
              setUser((prevUser) => {
                return {
                  ...prevUser,
                  dog: {
                    ...formData,
                    pic: location[0],
                  },
                };
              });
              navigate("/doglist");
            });

          setFormData({
            name: "",
            breed: "",
            age: 0,
            about: "",
            user_id: 0,
          });
        });
      });
  }

  return (
    <>
      <div
        className="page-header page-header-xs"
        style={{
          backgroundImage: `url(${topbanner})`,
        }}
      ></div>
      <div className="section profile-content">
        <div className="container">
          <div className="owner">
            <h3>Add Your Dog</h3>
            <p>
              Add your dog to the Dogpod database.
              <br />
              Until you add your dog you cannot request a playdate.
              <br />
              All fields are required.
            </p>
          </div>
          <form className="order-form" onSubmit={handleSubmit}>
            <p>Dog's name: </p>
            <input
              type="text"
              name="name"
              className="form-control"
              style={{ width: 300 }}
              value={formData.name}
              onChange={handleChange}
              required
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
              required
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
              required
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
              required
            />
            <p>
              Picture:{" "}
              <input
                className="form-control"
                style={{ width: 300 }}
                type="file"
                name="pic"
                onChange={handleFileChange}
                required
              />
            </p>
            <br />
            <button className="btn btn-outline-danger btn-sm" type="submit">
              Add Your Dog
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default NewDogForm;
