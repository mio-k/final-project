import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { uploadToS3 } from "../lib/aws";
import topbanner from "./img/topbanner.jpeg";

function NewItemForm({ onAddItem, user }) {
  const file = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    pic: "",
    user_id: user.id,
    tag_ids: [],
  });

  const navigate = useNavigate();

  const options = [
    { label: "Walking", value: "walking" },
    { label: "Grooming", value: "grooming" },
    { label: "Food", value: "food" },
    { label: "Puppy Care", value: "puppy_care" },
    { label: "Play", value: "play" },
  ];

  function handleFileChange(event) {
    file.current = event.target.files[0];
  }

  function handleChange(e) {
    if (e.target.name == "tag_ids") {
      const value = Array.from(
        e.target.selectedOptions,
        (option) => option.value
      );
      setFormData({
        ...formData,
        [e.target.name]: value,
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    // 1. get the presigned url to upload file
    fetch("/items/presigned-url", {
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
          fetch("/items", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...formData, pic: location[0] }),
          })
            .then((r) => r.json())
            .then((formData) => onAddItem(formData));

          setFormData({
            name: "",
            description: "",
            pic: "",
            tags: [],
          });
        });
      });

    navigate("/itemlist");
  }

  return (
    <>
      <div
        className="page-header page-header-xs"
        data-parallax="true"
        style={{
          backgroundImage: `url(${topbanner})`,
        }}
      >
        <div className="filter"></div>
      </div>
      <div className="section profile-content">
        <div className="container">
          <div className="owner">
            <h3>Post a Free Item to Share</h3>
            <p>
              Got a dog care item you don't need anymore? Offer it to your
              friends.
            </p>
          </div>
          <form className="order-form" onSubmit={handleSubmit}>
            <p>
              Item:{" "}
              <input
                className="form-control"
                style={{ width: 300 }}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </p>
            <p>
              Description:{" "}
              <textarea
                className="form-control"
                style={{ width: 600 }}
                rows="4"
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </p>
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
            <p>
              Category (Hold Command to multi-select):
              <select
                className="form-control"
                style={{ width: 200 }}
                multiple={true}
                name="tag_ids"
                value={formData.tags}
                onChange={handleChange}
              >
                <option value="1">Walking</option>
                <option value="3">Grooming</option>
                <option value="2">Food</option>
                <option value="4">Puppy Care</option>
                <option value="5">Play</option>
              </select>
            </p>
            <br />
            <button className="btn btn-outline-danger btn-sm" type="submit">
              Add Free Item
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default NewItemForm;
