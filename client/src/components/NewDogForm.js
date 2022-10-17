import React, { useState } from "react";
// import { Button, input } from "../styles";

function NewDogForm({ member, onAddDog }) {
  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    age: 0,
    about: "",
    user_id: member.id,
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
      .then((formData) => onAddDog(formData));
    setFormData({
      name: "",
      breed: "",
      age: 0,
      about: "",
    });
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>Add Your Dog</h3>
      Dog's name:{" "}
      <input
        type="text"
        name="name"
        className="form-control"
        value={formData.name}
        onChange={handleChange}
      />
      <br />
      Breed:{" "}
      <input
        type="text"
        name="breed"
        className="form-control"
        value={formData.breed}
        onChange={handleChange}
      />
      <br />
      Age:{" "}
      <input
        type="number"
        name="age"
        className="form-control"
        value={formData.age}
        onChange={handleChange}
      />
      <br />
      Introduction:{" "}
      <input
        type="text"
        name="color"
        className="form-control"
        value={formData.about}
        onChange={handleChange}
      />
      <br />
      <button className="btn btn-outline-danger btn-sm" type="submit">
        Add Your Dog
      </button>
    </form>
  );
}

export default NewDogForm;
