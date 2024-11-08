"use client";
import { useState } from "react";

function LoginForm() {
  // input state values always need to be strings - empty initially
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [submitResult, setSubmitResult] = useState("");
  const [loginAttempts, setloginAttempts] = useState(0);
  const [formVisible, setformVisible] = useState(true);

  const maxAttempts = 3;

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reloading on form submit

    // add some password validation
    if (userPassword.length < 5) {
      setSubmitResult("Password must be at least 5 characters long");
    } else if (userPassword === userEmail) {
      setSubmitResult("Password must not match email address");
    } else if (userEmail === "" || userPassword === "") {
      setSubmitResult("Please enter the required fields");
    } else {
      setSubmitResult("Successful login.");
    }
    // record login attempts
    if (submitResult !== "Successful login.") {
      setloginAttempts((prev) => prev + 1);
    }
    if (loginAttempts + 1 >= maxAttempts) {
      setSubmitResult(
        "You have exceeded login attempts. Please email helpline@helphelp.com"
      );
      setformVisible(false);
    }
  };
  if (!formVisible) {
    return <p>{submitResult}</p>;
  }

  return (
    <div className="LoginForm componentBox">
      <form onSubmit={handleSubmit}>
        <div className="formRow">
          <label>
            Email Address:
            {/* Controlled form element needs both value and onChange.
onChange handler uses event param e to access target value.
Whenever user types, new value is stored in state. */}
            <input
              className="text-black"
              type="email"
              value={userEmail}
              name="userEmail"
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="formRow">
          <label>
            Password:
            <input
              className="text-black"
              type="password"
              value={userPassword}
              name="password"
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Log In</button>
        <p>{submitResult}</p>
      </form>
    </div>
  );
}
// try removing the onChange prop and typing in a field
export default LoginForm;
