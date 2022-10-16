import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EditDog from "./EditDog";
import topbanner from "./img/topbanner.jpeg";

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
  function editDogInfo() {
    // <EditDog dog={individualDog} onUpdateDog={onUpdateDog} />;
  }

  return (
    <>
      <div
        className="page-header page-header-xs"
        data-parallax="true"
        style={{
          backgroundImage: `url(${topbanner})`,
        }}
      >
        <div className="filter"></div>
      </div>
      <div className="section profile-content">
        <div className="container">
          <div className="owner">
            <div className="avatar">
              <img
                src={dog.pic}
                alt={dog.name}
                className="img-circle img-no-padding img-responsive"
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
              <p>Owner: {dog.user.firstname}</p> <br />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 ml-auto mr-auto text-center">
              <p>{dog.about}</p>
              <br />
              <btn
                className="btn btn-outline-default btn-round"
                onClick={editDogInfo}
              >
                <i className="fa fa-cog"></i> Update
              </btn>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Dog;
