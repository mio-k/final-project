import React, { useState } from "react";

function NewDogForm({ user, onAddDog }) {
  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    age: 0,
    about: "",
    user_id: 0,
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/dogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((newDog) => onAddDog(newDog));
    setFormData({
      name: "",
      breed: "",
      age: 0,
      about: "",
      user_id: user.id,
    });
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
