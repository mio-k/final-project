import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EditItem from "./EditItem";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../redux/slices/itemsSlice";

function Item({ onDeleteItem, user }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();
  const item = useSelector((state) => {
    const items = state.items.entities;
    return items[id];
  });

  const [isEditing, setIsEditing] = useState(false);

  function handleDeleteClick() {
    dispatch(deleteItem({ id })).then(() => {
      navigate(`/itemlist`);
    });
  }

  return (
    <div className="profile-page">
      <div className="section profile-content">
        <div className="container">
          <div className="owner">
            {item ? (
              <div className="name">
                <h4 className="title" id={item.id}>
                  {item.name}
                  <br />
                </h4>
                <img
                  src={item.pic ? item.pic : "/placeholderpic.png"}
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
                <p>
                  Want this item? Contact {item.user.firstname}:{" "}
                  {item.user.contact}
                </p>
                <br />
                <ul>
                  Category:{" "}
                  {item.tags.map((tag) => (
                    <li className="list-unstyled" key={tag.id}>
                      {tag.category}
                    </li>
                  ))}
                </ul>
                {isEditing ? <EditItem item={item} /> : ""}
                {item.user.id === user.id && (
                  <>
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
                    </button>
                  </>
                )}
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
