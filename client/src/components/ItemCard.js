import React from "react";
import { useNavigate } from "react-router-dom";

function ItemCard({ item }) {
  let navigate = useNavigate();

  function handleClick() {
    navigate(`/items/${item.id}`);
  }
  const first40 = item.description.slice(0, 40);
  return (
    <div className="col mb-4">
      <div className="card h-100" style={{ width: 250 }}>
        <img src={item.pic} alt={item.name} />
        <div className="card-body">
          <h4 className="card-title">{item.name}</h4>
          <br />
          <p>{first40}...</p>
        </div>
        <button
          className="btn btn-outline-primary btn-sm"
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
