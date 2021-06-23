import React from "react";
import validator from "validator";

const Register = () => {
  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      console.log("Good password");
      document.body.style.backgroundColor = "lightgreen";
    } else {
      console.log("Bad password");
      document.body.style.backgroundColor = "pink";
    }
  };
  return (
    <div class="row">
      <div class="col"></div>
      <div class="col">
        <div id="recommendations">
          <p>Register below. Please insure that your password has:</p>
          <ul>
            <li>A minimmum length of 8</li>
            <li>1 lowercase character</li>
            <li>1 uppercase character</li>
            <li>1 symbol character</li>
            <li>1 number character</li>
          </ul>
        </div>

        <form class="row g-3">
          <div class="col-auto">
            <input class="form-control" id="input-email" placeholder="Email" />
          </div>
          <div class="col-auto">
            <label htmlFor="input-password" class="visually-hidden">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="input-password"
              placeholder="Password"
              onChange={(e) => validate(e.target.value)}
            />
          </div>
          <div class="col-auto">
            <input
              class="form-control"
              id="input-email"
              placeholder="First Name"
            />
          </div>
          <div class="col-auto">
            <input
              class="form-control"
              id="input-last-name"
              placeholder="Last Name"
            />
          </div>
          <div class="col-auto">
            <button type="submit" class="btn btn-primary mb-3">
              Register
            </button>
          </div>
        </form>
      </div>
      <div class="col"></div>
    </div>
  );
};
export default Register;
