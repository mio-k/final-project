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
    <div class="row row-cols-1">
      {dogs.map((dog) => {
        console.log(dog);
        return <DogCard key={dog.id} dog={dog} />;
      })}
    </div>
  );
}

export default DogList;
