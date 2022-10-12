import { useState } from "react";
// import styled from "styled-components";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
// import { Button } from "../styles";

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <wrapper>
      <h1>Dogpod Exchange</h1>
      <p>Please log in to see the members only content.</p>
      {showLogin ? (
        <>
          <LoginForm onLogin={onLogin} />
          <divider />
          <p>
            Want to join the DogPod? &nbsp;
            <button color="secondary" onClick={() => setShowLogin(false)}>
              Create Account
            </button>
          </p>
        </>
      ) : (
        <>
          <SignUpForm onLogin={onLogin} />
          <divider />
          <p>
            Already have an account? &nbsp;
            <button color="secondary" onClick={() => setShowLogin(true)}>
              Log In
            </button>
          </p>
        </>
      )}
    </wrapper>
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
