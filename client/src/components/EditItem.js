import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { updateItem } from "../redux/slices/itemsSlice";

function EditItem({ item, onSave }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [revisedData, setRevisedData] = useState({
    name: item.name,
    description: item.description,
    pic: item.pic,
    tag_ids: item.tag_ids,
  });
  const { id } = useParams();
  const [isEditing, setIsEditing] = useState(false);

  function handleFormSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
    dispatch(updateItem({ id: item.id, updateItemParams: revisedData })).then(
      () => {
        setIsEditing(true);
        onSave();
        navigate(`/items/${id}`);
      }
    );
  }

  function handleCategoryChange(e) {
    const value = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setRevisedData({
      ...revisedData,
      [e.target.name]: value,
    });
  }

  return (
    <form className="edit-order" onSubmit={handleFormSubmit}>
      <div style={{ textAlign: "left" }}>
        <h3>Edit Item</h3>
        {isEditing === true ? (
          <h2>Your item is updated successfully.</h2>
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
          Category (Hold Ctrl to multi-select):
          <select
            className="form-control"
            style={{ width: 200 }}
            multiple={true}
            name="tag_ids"
            value={revisedData.tag_ids}
            onChange={handleCategoryChange}
          >
            <option value="1">Walking</option>
            <option value="3">Grooming</option>
            <option value="2">Food</option>
            <option value="4">Puppy Care</option>
            <option value="5">Play</option>
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
