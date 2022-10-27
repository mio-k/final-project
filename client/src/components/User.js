import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NewDogForm from "./NewDogForm";

function User() {
  let navigate = useNavigate();
  const { id } = useParams();
  const [member, setMember] = useState({
    id: 0,
    firstname: "",
    lastname: "",
    dog: {
      name: "",
      breed: "",
      age: "",
      about: "",
    },
    items: [],
  });

  useEffect(() => {
    fetch(`/users/${id}`)
      .then((r) => r.json())
      .then((individualMember) => setMember(individualMember));
  }, []);

  function onAddDog(dog) {
    navigate(`/dogs/${dog.id}`);
  }
  return (
    <div>
      <h2>Member {member.id}</h2>
      <p>
        Name: {member.firstname} {member.lastname}
      </p>
      {member.dog ? (
        <div className="card">
          <h3>{member.firstname}'s Dog</h3>
          <p>Name: {member.dog.name}</p>
          <p>Breed: {member.dog.breed}</p>
          <p>Age: {member.dog.age}</p>
          <p>About: {member.dog.about}</p>
        </div>
      ) : (
        <NewDogForm member={member} onAddDog={onAddDog} />
      )}
      <h3>Free Items: </h3>
      {member.items.length !== 0 ? (
        <ul>
          {member.items.map((item) => (
            <link
              style={{ display: "block", margin: "1rem 0" }}
              to={`/items/${item.id}`}
              key={item.id}
            >
              <li>{item.name}</li>
            </link>
          ))}
        </ul>
      ) : (
        <p>This member hasn't offered any items yet.</p>
      )}
    </div>
  );
}
export default User;
