import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Item({ onDeleteItem }) {
  const { id } = useParams();
  let navigate = useNavigate();
  const [item, setItem] = useState({
    name: "",
    description: "",
    user: "",
    tags: [],
  });
  useEffect(() => {
    fetch(`/items/${id}`)
      .then((r) => r.json())
      .then((individualItem) => setItem(individualItem));
  }, []);

  function handleDeleteClick() {
    fetch(`/items/${id}`, {
      method: "DELETE",
    }).then(() => {
      onDeleteItem(id);
      navigate(`/itemlist`);
    });
  }
  function onUpdateItem(updatedItem) {
    setItem(updatedItem);
  }
  function handleEditItem() {
    navigate(`items/${id}/edititem`);
  }

  return (
    <div className="profile-page">
      <div className="section profile-content">
        <div className="container">
          <div className="owner">
            {item ? (
              <div className="name">
                <h4 className="title">
                  {item.name}
                  <br />
                </h4>
                <img
                  src={item.pic}
                  className="img-rounded img-responsive"
                  alt={item.name}
                />
                <div className="row">
                  <div className="col-md-6 ml-auto mr-auto text-center">
                    <p>{item.description}</p>
                  </div>
                </div>
                <br />
                <p>Offered by: {item.user.firstname}</p>
                <br />
                <p>Contact: {item.user.contact}</p>
                <br />
                <ul>
                  Category:{" "}
                  {item.tags.map((tag) => (
                    <li>{tag.category}</li>
                  ))}{" "}
                </ul>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={handleDeleteClick}
                >
                  Delete Item
                </button>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={handleEditItem}
                >
                  Edit Item
                </button>{" "}
              </div>
            ) : (
              <p>No item from this user</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Item;
