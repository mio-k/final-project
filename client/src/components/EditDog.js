import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditDog({ onUpdateDog }) {
  const [dog, setDog] = useState();
  const [revisedData, setRevisedData] = useState();
  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`/dogs/${id}`)
      .then((r) => r.json())
      .then((dog) => {
        setDog(dog);
        setRevisedData({
          name: dog.name,
          breed: dog.breed,
          age: dog.age,
          pic: dog.pic,
          about: dog.about,
        });
      });
  }, []);

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
        onUpdateDog(updatedDog);
      });
  }
  function onUpdateDog(updatedDog) {
    navigate(`/dogs/${id}`);
  }

  return (
    <form className="edit-order" onSubmit={handleFormSubmit}>
      <h3>Edit your dog's information</h3>
      <br />
      <p>
        Dog Name:{" "}
        <input
          type="text"
          name="name"
          className="form-control"
          style={{ width: 400 }}
          value={revisedData?.name}
          onChange={(e) =>
            setRevisedData((previousRevisedData) => ({
              ...previousRevisedData,
              name: e.target.value,
            }))
          }
        />
      </p>
      <br />
      <p>
        Breed:{" "}
        <input
          type="text"
          name="breed"
          className="form-control"
          style={{ width: 400 }}
          value={revisedData?.breed}
          onChange={(e) =>
            setRevisedData((previousRevisedData) => ({
              ...previousRevisedData,
              name: e.target.value,
            }))
          }
        />
      </p>
      <br />
      <p>
        Age:{" "}
        <input
          type="text"
          name="age"
          className="form-control"
          style={{ width: 400 }}
          value={revisedData?.age}
          onChange={(e) =>
            setRevisedData((previousRevisedData) => ({
              ...previousRevisedData,
              name: e.target.value,
            }))
          }
        />
      </p>
      <br />
      <p>
        Photo:{" "}
        <input
          type="text"
          name="pic"
          className="form-control"
          style={{ width: 400 }}
          value={revisedData?.pic}
          onChange={(e) =>
            setRevisedData((previousRevisedData) => ({
              ...previousRevisedData,
              name: e.target.value,
            }))
          }
        />
      </p>
      <br />
      <p>
        about:{" "}
        <textarea
          type="text"
          name="about"
          className="form-control"
          style={{ width: 400 }}
          rows="8"
          value={revisedData?.about}
          onChange={(e) =>
            setRevisedData((previousRevisedData) => ({
              ...previousRevisedData,
              description: e.target.value,
            }))
          }
        />
      </p>
      <br />
      <button
        className="btn btn-outline-danger btn-sm"
        type="submit"
        value="Save"
      >
        Save
      </button>
    </form>
  );
}
export default EditDog;
