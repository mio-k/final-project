import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Dog() {
  const { id } = useParams();
  const [dog, setDog] = useState({
    name: "",
    breed: "",
    age: 0,
    about: "",
    pic: "",
    user: {
      firstname: "",
      lastname: "",
    },
  });
  useEffect(() => {
    fetch(`/dogs/${id}`)
      .then((r) => r.json())
      .then((individualDog) => setDog(individualDog));
  }, []);

  return (
    <div className="profile-page">
      <div class="section profile-content">
        <div class="container">
          <div class="owner">
            <div class="avatar">
              <img
                src={dog.pic}
                alt={dog.name}
                class="img-circle img-no-padding img-responsive"
              />
            </div>
            <div className="name">
              <h4 className="title">
                {dog.name}
                <br />
              </h4>
              <h6 className="description">Breed: {dog.breed}</h6>
              <br />
              <p>Age: {dog.age} years old</p>
              <br />
              <p>Owner: {dog.user.firstname}</p>
              <br />
            </div>
            <div className="row">
              <div className="col-md-6 ml-auto mr-auto text-center">
                <p>{dog.about}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dog;
