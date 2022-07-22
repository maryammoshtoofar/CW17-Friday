import React from "react";
import "./index.css";

export const Form = () => {
  return (
    <div className="container">
      <div>
        <img src="./image/Image1.jpg" />
      </div>
      <div>
        <form>
          <h2>Register Form</h2>
          <input type="text" placeholder="yourName" />
          <input type="email" placeholder="emailAddress" />
          <input type="password" placeholder="password" />
          <input type="password" placeholder="confirmPassword" />
          <button>Register</button>
        </form>
      </div>
    </div>
  );
};
