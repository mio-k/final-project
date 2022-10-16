import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Dog from "./Dog";

function DogCard({ dog }) {
  let navigate = useNavigate();
  function handleClick() {
    navigate(`/dogs/${dog.id}`);
  }
  const first40 = dog.about.slice(0, 40);

  return (
    <div className="col mb-4">
      <div className="card h-100" style={{ width: 250 }}>
        <img src={dog.pic} alt={dog.name} />
        <div className="card-body">
          <h4 className="card-title">{dog.name}</h4>
          <br />
          <h6>Owner: {dog.user.firstname}</h6>
          <br />
          <p>{first40}...</p>
        </div>
        <button
          className="btn btn-outline-primary btn-sm"
          onClick={handleClick}
        >
          View
        </button>
      </div>
    </div>
  );
}
export default DogCard;
