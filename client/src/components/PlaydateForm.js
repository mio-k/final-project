import React, { useState } from "react";
// import { Input } from "../styles";
import { useNavigate } from "react-router-dom";
// import { MultiSelect } from "react-multi-select-component";

function PlaydateForm({ onAddItem }) {
  const [formData, setFormData] = useState({
    when: "",
    howlong: "",
    user_id: "",
    who: "",
    sitter_id: 0,
  });
  let navigate = useNavigate();

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    fetch("/playdates", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((formData) => onAddItem(formData));
    setFormData({
      when: "",
      howlong: "",
      user_id: "",
      who: "",
      sitter_id: 0,
    });
    navigate("/playdates");
  }

  return (
    <form className="order-form" onSubmit={handleSubmit}>
      <h3>Add a playdate request</h3>
      <p>Need someone to watch your dog? Arrange a playdate here.</p>
      <p>
        When:{" "}
        <input
          type="text"
          name="when"
          value={formData.when}
          onChange={handleChange}
        />
      </p>
      <p>
        How long:{" "}
        <input
          type="text"
          name="howlong"
          value={formData.howlong}
          onChange={handleChange}
        />
      </p>
      <p>
        Who is this for?:{" "}
        <input
          type="text"
          name="who"
          value={formData.who}
          onChange={handleChange}
        />
      </p>
      {/* <p>
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
      </p> */}
      {/* <pre>{JSON.stringify(selected)}</pre> */}

      <button class="btn btn-outline-danger btn-sm" type="submit">
        Add request
      </button>
    </form>
  );
}

export default PlaydateForm;