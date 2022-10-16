import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditDog({ dog, onUpdateDog }) {
  let navigate = useNavigate();
  const [revisedData, setRevisedData] = useState({
    name: dog.name,
    breed: dog.breed,
    age: dog.age,
    pic: dog.pic,
    about: dog.about,
  });
  let { id } = useParams();

  function handleFormSubmit(e) {
    e.preventDefault();
    fetch(`/dogs/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: revisedData.name,
        description: revisedData.description,
      }),
    })
      .then((r) => r.json())
      .then((updatedDog) => {
        console.log(updatedDog);
        onUpdateDog(updatedDog);
        navigate(`/dogs/${id}`);
      });
  }
  return (
    <form className="edit-order" onSubmit={handleFormSubmit}>
      <p>
        Dog Name:{" "}
        <input
          type="text"
          name="name"
          value={revisedData.name}
          onChange={(e) =>
            setRevisedData((previousRevisedData) => ({
              ...previousRevisedData,
              name: e.target.value,
            }))
          }
        />
      </p>
      <p>
        Breed:{" "}
        <input
          type="text"
          name="breed"
          value={revisedData.breed}
          onChange={(e) =>
            setRevisedData((previousRevisedData) => ({
              ...previousRevisedData,
              name: e.target.value,
            }))
          }
        />
      </p>
      <p>
        Age:{" "}
        <input
          type="text"
          name="age"
          value={revisedData.age}
          onChange={(e) =>
            setRevisedData((previousRevisedData) => ({
              ...previousRevisedData,
              name: e.target.value,
            }))
          }
        />
      </p>
      <p>
        Photo:{" "}
        <input
          type="text"
          name="pic"
          value={revisedData.pic}
          onChange={(e) =>
            setRevisedData((previousRevisedData) => ({
              ...previousRevisedData,
              name: e.target.value,
            }))
          }
        />
      </p>
      <p>
        about:{" "}
        <input
          type="text"
          name="about"
          value={revisedData.about}
          onChange={(e) =>
            setRevisedData((previousRevisedData) => ({
              ...previousRevisedData,
              description: e.target.value,
            }))
          }
        />
      </p>
      <button class="btn btn-outline-danger btn-sm" type="submit" value="Save">
        Save
      </button>
    </form>
  );
}
export default EditDog;
