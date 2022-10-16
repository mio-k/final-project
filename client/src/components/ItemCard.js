import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Item from "./Item";

function ItemCard({ item }) {
  let navigate = useNavigate();

  function handleClick() {
    navigate(`/items/${item.id}`);
  }
  return (
    <div class="col mb-4">
      <div className="card h-100">
        <img src={item.pic} alt={item.name} />
        <div class="card-body">
          <h4 class="card-title">{item.name}</h4>
          <button class="btn btn-outline-primary btn-sm" onClick={handleClick}>
            View
          </button>
        </div>
      </div>
    </div>
  );
}
export default ItemCard;
