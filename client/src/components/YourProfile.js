import React, { useCallback } from "react";

function YourProfile({ user }) {
  console.log(user);
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
              <h6 className="description">Dog's name: {user.dog.name}</h6>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 ml-auto mr-auto text-center">
              <p>description here</p>
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
