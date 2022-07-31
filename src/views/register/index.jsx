import React, { useRef } from "react";
import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const Register = () => {
  let [showPass, setShowPass] = useState(false);

  // ref untuk password field
  let passwordField = useRef();
  let passwordField2 = useRef();

  // function change password type to text
  const viewPassword = () => {
    setShowPass(!showPass);
    let passType = passwordField.current.type;
    let passType2 = passwordField2.current.type;

    if (passType == "password" && passType2 == "password") {
      passwordField.current.type = "text";
      passwordField2.current.type = "text";
      return;
    }

    passwordField.current.type = "password";
    passwordField2.current.type = "password";
  };

  // kiriman data form ke backend
  const handleSubmit = (e) => {
    // stop form to send for other page
    e.preventDefault();

    // get all value input field
    let email = e.target.email.value;
    let password = e.target.password.value;
    let password2 = e.target.password2.value;

    // same password checker
    if (password !== password2) {
      return alert("Password harus sama");
    }

    // fetching data to be api
    fetch("http://localhost:3000/register", {
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
          alert("registrasi berhasil");
          window.location.href = "/login";
          return;
        }

        alert(data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <main>
      <h1>Register Page</h1>

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
        </div>

        <div className="form_group">
          <label htmlFor="password2">Ulangi Password</label>
          <input
            type="password"
            id="password2"
            name="password2"
            ref={passwordField2}
          />

          {showPass ? (
            <FiEye className="eyeIcon" onClick={viewPassword} />
          ) : (
            <FiEyeOff className="eyeIcon" onClick={viewPassword} />
          )}
        </div>

        <button type="submit">Register</button>
      </form>
    </main>
  );
};

export default Register;
