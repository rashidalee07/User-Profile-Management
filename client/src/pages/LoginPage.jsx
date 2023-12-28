import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUserDataSuccess } from "./../userprofile/userActions";
import "./login.css";

function LoginPage() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userCredentials = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const res = await fetch("/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.status === "success") {
        console.log(data.user, "from login page");
        dispatch(fetchUserDataSuccess(data.user));

        // Redirect to the user info page
        navigate("/userprofile");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div>
      <div className="center-container">
        <div className="form-container">
          <h3>Welcome to Login</h3>
          <form method="POST" onSubmit={userCredentials}>
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                className="product-input"
                name="email"
                type="email"
                placeholder="Email"
                ref={emailRef}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                className="product-input"
                name="password"
                type="password"
                placeholder="Password"
                ref={passwordRef}
              />
            </div>

            <div>
              <button type="submit" className="login-button">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
