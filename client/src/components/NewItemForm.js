import React, { useState } from "react";
import { Input } from "../styles";
import { useNavigate } from "react-router-dom";
// import { MultiSelect } from "react-multi-select-component";

function NewItemForm({ onAddItem, user, tags }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
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
      tags: [],
    });
    navigate("/itemlist");
  }

  return (
    <form className="order-form" onSubmit={handleSubmit}>
      <h3>Add New Free Item to Share</h3>
      <p>
        Got a dog care item you don't need anymore? Offer it to your friends.
      </p>
      <p>
        Item:{" "}
        <Input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </p>
      <p>
        Description:{" "}
        <Input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </p>
      <p>
        Category (Hold Ctrl to multi-select):
        <select
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
      {/* <pre>{JSON.stringify(selected)}</pre> */}

      <button class="btn btn-outline-danger btn-sm" type="submit">
        Add Free Item
      </button>
    </form>
  );
}

export default NewItemForm;
