import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Item from "./Item";

function ItemCard({ item }) {
  let navigate = useNavigate();

  function handleClick() {
    navigate(`/items/${item.id}`);
  }
  const first40 = item.description.slice(0, 40);
  return (
    <div class="col mb-4">
      <div className="card h-100" style={{ width: 250 }}>
        <img src={item.pic} alt={item.name} />
        <div class="card-body">
          <h4 class="card-title">{item.name}</h4>
          <br />
          <p>{first40}...</p>
        </div>
        <button
          class="btn btn-outline-primary btn-sm"
          style={{ width: 100, alignSelf: "center" }}
          onClick={handleClick}
        >
          View
        </button>
      </div>
    </div>
  );
}
export default ItemCard;
