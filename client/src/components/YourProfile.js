import React from "react";
import { Link } from "react-router-dom";
import topbanner from "./img/topbanner.jpeg";
import { useSelector } from "react-redux";

function YourProfile({ user }) {
  const itemsArray = Object.values(
    useSelector((state) => state.items.entities)
  );
  const filteredItems = itemsArray.filter((item) => {
    return item.user.id === user.id;
  });
  return (
    <>
      <div
        className="page-header page-header-xs"
        style={{
          backgroundImage: `url(${topbanner})`,
        }}
      ></div>
      <div className="section profile-content">
        <div className="container">
          <div className="owner">
            <div className="avatar">
              <img
                src={
                  user.dog
                    ? user.dog.pic
                    : "https://us-west-dogpod.s3.us-west-1.amazonaws.com/development/attachment/77b4f757-04c6-4e49-a3db-0787c2fd2f1a-placeholder.png"
                }
                alt={user.firstname}
                className="img-circle img-no-padding img-responsive"
              />
            </div>
            <div className="name">
              <h4 className="title">
                {user.firstname} {user.lastname}
                <br />
              </h4>
              <p>Contact info: {user.contact}</p>
              <br />
              {user.dog ? (
                <p>Dog's name: {user.dog.name}</p>
              ) : (
                <>
                  <p>You have not added your dog to the database.</p>
                  <br />
                  <Link
                    to={`/newdogform`}
                    className="btn btn-outline-default btn-round"
                  >
                    <i className="fa fa-cog"></i> Add your dog to the database
                  </Link>
                </>
              )}
            </div>
            <br />
            <div className="name">
              <h5>Free items you are offering</h5>
              {user.items ? (
                <ul>
                  {filteredItems.map((item) => {
                    return <li className="list-unstyled">{item.name}</li>;
                  })}
                </ul>
              ) : (
                <>
                  <p>You are not offering any free item</p>
                  <Link
                    to={`/newitemform`}
                    className="btn btn-outline-default btn-round"
                  >
                    <i className="fa fa-cog"></i> Add a free item to offer
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default YourProfile;
