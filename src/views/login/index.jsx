import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Login = () => {
  let passwordField = useRef();
  let [showPass, setShowPass] = useState(false);

  // function view password
  const viewPass = () => {
    setShowPass(!showPass);
    let inputType = passwordField.current.type;

    if (inputType == "password") {
      passwordField.current.type = "text";
      return;
    }
    passwordField.current.type = "password";
  };

  // function login
  const handleSubmit = (e) => {
    e.preventDefault();

    let email = e.target.email.value;
    let password = e.target.password.value;

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.accessToken) {
          alert("login Berhasil");
          return (window.location.href = "/");
        }
        alert(data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <main>
      <h1>Login Page</h1>

      <form className="form_login" onSubmit={handleSubmit}>
        <div className="form_group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
        </div>

        <div className="form_group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            ref={passwordField}
          />

          {showPass ? (
            <FiEye className="eyeIcon" onClick={viewPass} />
          ) : (
            <FiEyeOff className="eyeIcon" onClick={viewPass} />
          )}
        </div>

        <button type="submit">Login</button>
      </form>
    </main>
  );
};

export default Login;
