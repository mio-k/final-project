import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Dog from "./Dog";

function DogCard({ dog }) {
  let navigate = useNavigate();
  function handleClick() {
    navigate(`/dogs/${dog.id}`);
  }

  return (
    <div class="col mb-4">
      <div className="card h-100">
        <img src={dog.pic} alt={dog.name} />
        <div class="card-body">
          <h4 class="card-title">{dog.name}</h4>
          <button class="btn btn-outline-primary btn-sm" onClick={handleClick}>
            View
          </button>
        </div>
      </div>
    </div>
  );
}
export default DogCard;
