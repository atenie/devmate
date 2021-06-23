import React from "react";

const Register = () => {
  return (
    <div class="row">
      <div class="col"></div>
      <div class="col">
        <div>
          <p>Register below:</p>
        </div>

        <form class="row g-3">
          <div class="col-auto">
            <input class="form-control" id="input-email" placeholder="Email" />
          </div>
          <div class="col-auto">
            <label for="input-password" class="visually-hidden">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="input-password"
              placeholder="Password"
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
              id="input-email"
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
