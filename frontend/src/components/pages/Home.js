import React from "react";

const Home = () => {
  return (
    <div class="row">
      <div class="col">
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
            <button type="submit" class="btn btn-primary mb-3">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Home;
