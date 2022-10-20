import React, { useEffect, useState } from "react";
// import { Link, Outlet } from "react-router-dom";
import PlaydateForm from "./PlaydateForm";

function Playdates() {
  const [playdates, setPlaydates] = useState([]);
  useEffect(() => {
    fetch("/playdates")
      .then((r) => r.json())
      .then((playdates) => setPlaydates(playdates));
  }, []);

  function handleVolunteerClick() {}

  return (
    <>
      <div className="page-header page-header-xs" data-parallax="true">
        <div className="filter"></div>
      </div>
      <div className="section profile-content">
        <div className="container">
          <PlaydateForm />
          <h3>Current Playdate Requests</h3>
          <p>Following requests are currently made by the members. </p>
          <br />
          <div>
            {playdates.map((playdate) => (
              <ul className="tableul">
                <li className="tableli-when">{playdate.when}</li>
                <li className="tableli-howlong">{playdate.howlong}</li>
                <li className="tableli-who">For: {playdate.user.firstname}</li>
                <li className="tableli-who">
                  {playdate.sitter_id ? (
                    "care arranged"
                  ) : (
                    <button
                      className="btn btn-outline-danger btn-sm"
                      type="submit"
                      onClick="handleVolunteerClick"
                    >
                      Volunteer
                    </button>
                  )}
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Playdates;
