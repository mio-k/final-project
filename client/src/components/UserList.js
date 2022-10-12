import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

function UserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/users")
      .then((r) => r.json())
      .then((allUsers) => setUsers(allUsers));
  }, []);

  return (
    <>
      <div className="list">
        <h2>Meet the Members</h2>
        <p>Choose a member to drill down to their record.</p>
        <ul>
          {users.map((user) => {
            return (
              <Link
                style={{ display: "block", margin: "1rem 0" }}
                to={`/users/${user.id}`}
                // to='/users/1'
                key={user.id}
              >
                <li>{user.firstname}</li>
              </Link>
            );
          })}
        </ul>
        <Outlet />
      </div>
    </>
  );
}
export default UserList;
