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
                href="#"
                class="btn btn-link btn-danger"
                onClick={() => setShowLogin(false)}
              >
                Want to create an account?
              </a>
            </div>
            {/* <p>
            <button color="secondary" onClick={() => setShowLogin(false)}>
              Create Account
            </button>
          </p> */}
          </>
        ) : (
          <>
            <SignUpForm onLogin={onLogin} />
            <div className="forgot">
              <a
                href="#"
                class="btn btn-link btn-danger"
                onClick={() => setShowLogin(true)}
              >
                Already have an account?
                {/* <button color="secondary" onClick={() => setShowLogin(true)}>
                  Log In
                </button> */}
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// const Wrapper = styled.section`
//   max-width: 500px;
//   margin: 40px auto;
//   padding: 16px;
// `;

// const Divider = styled.hr`
//   border: none;
//   border-bottom: 1px solid #ccc;
//   margin: 16px 0;
// `;

export default Login;
