import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

function Playdates() {
  const [playdates, setPlaydates] = useState([]);
  useEffect(() => {
    fetch("/playdates")
      .then((r) => r.json())
      .then((playdates) => setPlaydates(playdates));
  }, []);

  return (
    <>
      <ul>
        {playdates.map((playdate) => (
          <li>
            {playdate.when} {playdate.howlong}
          </li>
        ))}
        {/* {playdates.map((playdate) => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/playdates/${playdate.id}`}
            key={playdate.id}
            item={playdate}
          >
            <li>
              {playdate.when} {playdate.howlong}
            </li>
          </Link>
        ))} */}
      </ul>
      {/* <Outlet /> */}
    </>
  );
}
export default Playdates;
