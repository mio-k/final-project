import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditItem({ item, onUpdateItem }) {
  const navigate = useNavigate();
  const [revisedData, setRevisedData] = useState({
    name: item.name,
    description: item.description,
    pic: item.pic,
    category: item.category,
  });
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);

  function handleFormSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
    fetch(`/items/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: revisedData.name,
        description: revisedData.description,
      }),
    })
      .then((r) => r.json())
      .then((updatedItem) => {
        onUpdateItem(updatedItem);
        setIsEditing(true);
        navigate(`/items/${id}`);
      });
  }

  return (
    <form className="edit-order" onSubmit={handleFormSubmit}>
      <div style={{ textAlign: "left" }}>
        <h3>Edit Item</h3>
        {isEditing === true ? (
          <h4>Your item is updated successfully.</h4>
        ) : (
          <p>Make edits to your post below.</p>
        )}
        <p>
          Item Name:{" "}
          <input
            className="form-control"
            style={{ width: 300 }}
            type="text"
            name="name"
            value={revisedData.name}
            onChange={(e) =>
              setRevisedData((previousRevisedData) => ({
                ...previousRevisedData,
                name: e.target.value,
              }))
            }
          />
        </p>
        <p>
          Description:{" "}
          <textarea
            type="text"
            name="description"
            className="form-control"
            rows="8"
            style={{ width: 600 }}
            value={revisedData.description}
            onChange={(e) =>
              setRevisedData((previousRevisedData) => ({
                ...previousRevisedData,
                description: e.target.value,
              }))
            }
          />
        </p>
        <p>
          Photo:{" "}
          <input
            type="text"
            name="description"
            className="form-control"
            style={{ width: 300 }}
            value={revisedData.pic}
            onChange={(e) =>
              setRevisedData((previousRevisedData) => ({
                ...previousRevisedData,
                description: e.target.value,
              }))
            }
          />
        </p>
        <p>
          Category (Hold Ctrl to multi-select):
          <select
            className="form-control"
            style={{ width: 200 }}
            multiple={true}
            name="tags"
            value={revisedData.tags}
            onChange={(e) =>
              setRevisedData((previousRevisedData) => ({
                ...previousRevisedData,
                description: e.target.value,
              }))
            }
          >
            <option value="walking">Walking</option>
            <option value="grooming">Grooming</option>
            <option value="food">Food</option>
            <option value="puppy_care">Puppy Care</option>
            <option value="play">Play</option>
          </select>
        </p>
      </div>
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
export default EditItem;
