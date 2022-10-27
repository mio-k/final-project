import React, { useState } from "react";

function SignUpForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
        firstname,
        lastname,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        console.log("here");
        r.json().then((user) => {
          console.log(user);
          return onLogin(user);
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <div className="main">
      <div className="container">
        <div className="register-page sidebar-collapse">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 mx-auto">
                <div className="card card-register">
                  <h4 className="title mx-auto" style={{ color: "white" }}>
                    Register to join
                  </h4>
                  <form className="register-form" onSubmit={handleSubmit}>
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      id="username"
                      autoComplete="off"
                      value={username}
                      className="form-control"
                      placeholder="enter username"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      id="password"
                      value={password}
                      className="form-control"
                      placeholder="enter password"
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="current-password"
                    />
                    <label htmlFor="password">Password Confirmation</label>
                    <input
                      type="password"
                      id="password_confirmation"
                      value={passwordConfirmation}
                      className="form-control"
                      placeholder="enter password again"
                      onChange={(e) => setPasswordConfirmation(e.target.value)}
                      autoComplete="current-password"
                    />
                    <label htmlFor="firstname">First Name</label>
                    <input
                      type="text"
                      id="firstname"
                      value={firstname}
                      className="form-control"
                      placeholder="enter firstname"
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                    <label htmlFor="lastname">Last Name</label>
                    <input
                      type="text"
                      id="lastname"
                      value={lastname}
                      className="form-control"
                      placeholder="enter lastname"
                      onChange={(e) => setLastname(e.target.value)}
                    />
                    <button
                      className="btn btn-danger btn-block btn-round"
                      type="submit"
                    >
                      {isLoading ? "Loading..." : "Sign Up"}
                    </button>
                    <br></br>
                    {errors.map((err) => (
                      <error key={err}>{err}</error>
                    ))}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
