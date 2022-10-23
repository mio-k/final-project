import React, { useState } from "react";
// import { Input } from "../styles";
import { useNavigate } from "react-router-dom";
// import { MultiSelect } from "react-multi-select-component";
import topbanner from "./img/topbanner.jpeg";

function NewItemForm({ onAddItem, user, tags }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    pic: "",
    user_id: user.id,
    tags: [],
  });
  let navigate = useNavigate();
  const options = [
    { label: "Walking", value: "walking" },
    { label: "Grooming", value: "grooming" },
    { label: "Food", value: "food" },
    { label: "Puppy Care", value: "puppy_care" },
    { label: "Play", value: "play" },
  ];
  // const [selected, setSelected] = useState([]);

  function handleChange(e) {
    console.log(e.target.value);
    if (e.target.name == "tags") {
      const value = Array.from(
        e.target.selectedOptions,
        (option) => option.value
      );
      console.log(value);
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
    console.log(formData);
    fetch("/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((formData) => onAddItem(formData));
    setFormData({
      name: "",
      description: "",
      pic: "",
      tags: [],
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
                type="text"
                name="pic"
                value={formData.pic}
                onChange={handleChange}
              />
            </p>
            <p>
              Category (Hold Ctrl to multi-select):
              <select
                className="form-control"
                style={{ width: 200 }}
                multiple={true}
                name="tags"
                value={formData.tags}
                onChange={handleChange}
              >
                <option value="walking">Walking</option>
                <option value="grooming">Grooming</option>
                <option value="food">Food</option>
                <option value="puppy_care">Puppy Care</option>
                <option value="play">Play</option>
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
