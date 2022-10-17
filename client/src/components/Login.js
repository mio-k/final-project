import { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="main">
      <div className="container">
        <div className="title">
          <h1>The Dog Pod Portal</h1>
        </div>

        {showLogin ? (
          <>
            <LoginForm onLogin={onLogin} />
            <div className="forgot">
              <a
                href="/signup"
                className="btn btn-link btn-danger"
                onClick={() => setShowLogin(false)}
              >
                Want to create an account?
              </a>
            </div>
          </>
        ) : (
          <>
            <SignUpForm onLogin={onLogin} />
            <div className="forgot">
              <a
                href="#"
                className="btn btn-link btn-danger"
                onClick={() => setShowLogin(true)}
              >
                Already have an account?
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
