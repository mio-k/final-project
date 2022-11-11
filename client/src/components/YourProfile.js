import React from "react";
import { Link } from "react-router-dom";
import topbanner from "./img/topbanner.jpeg";

function YourProfile({ user, items }) {
  const filteredItems = items.filter((item) => {
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
              {/* <img
                src={
                  user.dog.pic
                    ? user.dog.pic
                    : "s3://us-west-dogpod/development/attachment/752de331-58b6-4372-a870-8b87ec68c62f-placeholder.png"
                }
                alt={user.firstname}
                className="img-circle img-no-padding img-responsive"
              /> */}
            </div>
            <div className="name">
              <h4 className="title">
                {user.firstname} {user.lastname}
                <br />
              </h4>
              <p>Contact info: {user.contact}</p>
              {user.dog ? (
                <p>Dog's name: {user.dog.name}</p>
              ) : (
                <>
                  <p>You have not added your dog to the database.</p>
                  <Link
                    to={`/newdogform`}
                    className="btn btn-outline-default btn-round"
                  >
                    <i className="fa fa-cog"></i> Add your dog to the database
                  </Link>
                </>
              )}
            </div>
            <div className="name">
              <h5>Free items you are offering</h5>
              {user.item ? (
                <ul>
                  {filteredItems.map((item) => {
                    return <li>{item.name}</li>;
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
