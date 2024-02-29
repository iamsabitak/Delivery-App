import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("default@example.com");
  const [password, setPassword] = useState("SSaa@@11");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setEmailError("");
    setPasswordError("");

    if (!email.trim()) {
      setEmailError("Email is required");
      return;
    }

    if (!password.trim()) {
      setPasswordError("Password is required");
      return;
    }

    // If validation passes, navigate to home
    navigate("/home");
    console.log(email, password);
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <h2 className="card-title text-center mb-4">Login</h2>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <form onSubmit={onSubmitHandler}>
                <div className="mb-1">
                  <label htmlFor="inputEmail" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className={`form-control ${emailError ? "is-invalid" : ""}`}
                    id="inputEmail"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="current-address"
                  />
                  {emailError && (
                    <div className="invalid-feedback">{emailError}</div>
                  )}
                </div>
                <div className="mb-1">
                  <label htmlFor="inputPassword" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className={`form-control ${
                      passwordError ? "is-invalid" : ""
                    }`}
                    id="inputPassword"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                  />
                  {passwordError && (
                    <div className="invalid-feedback">{passwordError}</div>
                  )}
                </div>
                <div className="d-grid row mt-5 justify-content-center">
                  <button type="submit" className="btn btn-primary btn-block">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
