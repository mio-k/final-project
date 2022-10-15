import React, { useState, useEffect } from "react";
import EditItem from "./EditItem";
import { useNavigate, useParams } from "react-router-dom";

function Item({ onDeleteItem }) {
  const { id } = useParams();
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

  let navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

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
                {isEditing ? (
                  <EditItem item={item} onUpdateItem={onUpdateItem} />
                ) : (
                  ""
                )}
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={handleDeleteClick}
                >
                  Delete Item
                </button>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => setIsEditing((isEditing) => !isEditing)}
                >
                  Edit Item
                </button>{" "}
              </div>
            ) : (
              // <div>
              //   <h3>Item: {item.name}</h3>
              //   <img src={item.pic} alt={item.name} />
              //   <p>Description: {item.description}</p>
              //   <p>Offered by: {item.user.firstname}</p>
              //   <p>Contact: {item.user.contact}</p>
              //   <ul>
              //     Category:{" "}
              //     {item.tags.map((tag) => (
              //       <li>{tag.category}</li>
              //     ))}{" "}
              //   </ul>
              //   {isEditing ? (
              //     <EditItem item={item} onUpdateItem={onUpdateItem} />
              //   ) : (
              //     ""
              //   )}
              //   <button
              //     class="btn btn-outline-danger btn-sm"
              //     onClick={handleDeleteClick}
              //   >
              //     Delete Item
              //   </button>
              //   <button
              //     class="btn btn-outline-danger btn-sm"
              //     onClick={() => setIsEditing((isEditing) => !isEditing)}
              //   >
              //     Edit Item
              //   </button>{" "}
              // </div>
              <p>No item from this user</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Item;
