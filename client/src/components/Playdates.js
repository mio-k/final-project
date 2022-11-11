import React, { useEffect, useState } from "react";
import PlaydateForm from "./PlaydateForm";
import playdatebanner from "./img/playdates.jpeg";

function Playdates({ user }) {
  const [playdates, setPlaydates] = useState([]);

  const fetchAndSetPlaydates = () => {
    fetch("/playdates")
      .then((r) => r.json())
      .then((playdates) => setPlaydates(playdates));
  };

  useEffect(() => {
    fetchAndSetPlaydates();
  }, []);

  function onAddItem(formData) {
    setPlaydates([...playdates, formData]);
  }

  function handleVolunteerClick(playdate) {
    fetch(`/playdates/${playdate.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        sitter_id: user.id,
      }),
    })
      .then((r) => r.json())
      .then((updatedPlaydate) => {
        fetchAndSetPlaydates();
      });
  }

  return (
    <>
      <div
        className="page-header page-header-small"
        style={{
          backgroundImage: `url(${playdatebanner})`,
        }}
      ></div>
      {/* <div className="page-header page-header-xs" data-parallax="true">
        <div className="filter"></div>
      </div> */}
      <div className="section profile-content">
        <div className="container">
          <PlaydateForm user={user} onAddItem={onAddItem} />
          <h3>Current Playdate Requests</h3>
          <p>Following requests are currently made by the members. </p>
          <br />
          <div>
            {playdates.map((playdate) => (
              <ul className="tableul" key={playdate.id}>
                <li className="tableli-when">{playdate.when}</li>
                <li className="tableli-howlong">{playdate.howlong}</li>
                <li className="tableli-who">For: {playdate.dog.name}</li>
                <li className="tableli-who">
                  {playdate.sitter_id ? (
                    "Care arranged."
                  ) : (
                    <button
                      className="btn btn-outline-danger btn-sm"
                      type="submit"
                      onClick={() => handleVolunteerClick(playdate)}
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
