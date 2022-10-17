import React, { useEffect, useState } from "react";
import DogCard from "./DogCard";
// import { Link, Outlet } from "react-router-dom";

function DogList() {
  const [dogs, setDogs] = useState([]);
  useEffect(() => {
    fetch("/dogs")
      .then((r) => r.json())
      .then((allDogs) => setDogs(allDogs));
  }, []);

  return (
    <div className="section profile-content">
      <div className="container">
        <h3>Our Member Dogs</h3>
        <br />
        <div className="row row-cols-1">
          {dogs.map((dog) => {
            return <DogCard key={dog.id} dog={dog} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default DogList;
