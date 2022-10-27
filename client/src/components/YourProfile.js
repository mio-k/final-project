import React from "react";

function YourProfile({ user, items }) {
  const filteredItems = items.filter((item) => {
    return item.user.id === user.id;
  });
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
                src={user.pic}
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
              <p>Dog's name: {user.dog.name}</p>
            </div>
            <div className="name">
              <h5>Free items you are offering</h5>
              <ul>
                {filteredItems.map((item) => {
                  return <li>{item.name}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default YourProfile;
