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
          <ul>
            {playdates.map((playdate) => (
              <li>
                {playdate.when} {playdate.howlong}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
export default Playdates;
