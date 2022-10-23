import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import NewDogForm from "./NewDogForm";

function YourProfile() {
  const { id } = useParams();
  const [user, setUser] = useState({
    id: 0,
    firstname: "",
    lastname: "",
    pic: "",
    contact: "",
    dog: {
      name: "",
      breed: "",
      age: "",
      pic: "",
      about: "",
    },
    items: [],
  });

  useEffect(() => {
    fetch(`/users/${id}`)
      .then((r) => r.json())
      .then((individualUser) => setUser(individualUser));
  }, []);

  function onAddDog() {
    setUser(user);
  }

  return (
    <>
      <div className="page-header page-header-xs" data-parallax="true">
        <div className="filter"></div>
      </div>
      <div className="section profile-content">
        <div className="container">
          <div className="owner">
            <div className="avatar">
              <img
                src="../assets/img/faces/joe-gardner-2.jpg"
                alt="Circle Image"
                className="img-circle img-no-padding img-responsive"
              />
            </div>
            <div className="name">
              <h4 className="title">
                {user.firstname} {user.lastname}
                <br />
              </h4>
              {user.dog ? (
                <div>
                  <h6 className="description">Dog's name: {user.dog.name}</h6>
                </div>
              ) : (
                <NewDogForm user={user} onAddDog={onAddDog} />
              )}
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 ml-auto mr-auto text-center">
              <h3>Free items you are offering</h3>
              {user.items.length !== 0 ? (
                <ul>
                  {user.items.map((item) => (
                    <Link
                      style={{ display: "block", margin: "1rem 0" }}
                      to={`/items/${item.id}`}
                      key={item.id}
                    >
                      <li>{item.name}</li>
                    </Link>
                  ))}
                </ul>
              ) : (
                <p>You are not offering any item at this time.</p>
              )}
              <br />
              <button className="btn btn-outline-default btn-round">
                <i className="fa fa-cog"></i> Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default YourProfile;
