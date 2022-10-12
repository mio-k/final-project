import React, { useState } from "react";
// import { Button, input } from "../styles";

function NewDogForm({ member, onAddDog }) {
  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    age: 0,
    color: "",
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
      color: "",
    });
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>Add Your Dog</h3>
      Dog's name:{" "}
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <br />
      Breed:{" "}
      <input
        type="text"
        name="breed"
        value={formData.breed}
        onChange={handleChange}
      />
      <br />
      Age:{" "}
      <input
        type="number"
        name="age"
        value={formData.age}
        onChange={handleChange}
      />
      <br />
      Color:{" "}
      <input
        type="text"
        name="color"
        value={formData.color}
        onChange={handleChange}
      />
      <br />
      <button class="btn btn-outline-danger btn-sm" type="submit">
        Add Your Dog
      </button>
    </form>
  );
}

export default NewDogForm;
