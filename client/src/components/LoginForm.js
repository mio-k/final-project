import React, { useState } from "react";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    // <div className="register-page sidebar-collapse">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 mx-auto">
          <div className="card card-register">
            <h3 className="title mx-auto">DogPod Login</h3>
            <form className="register-form" onSubmit={handleSubmit}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                autoComplete="off"
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <br></br>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                autoComplete="current-password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="btn btn-danger btn-block btn-round"
                type="submit"
              >
                {isLoading ? "Loading..." : "Login"}
              </button>
              {errors.map((err) => (
                <error key={err}>{err}</error>
              ))}
            </form>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default LoginForm;
