import React from "react";
import auth from "./auth";
import "./styles.css";

export const login = props => {
  return (
    <div className="login-container">
      <div className="title">Login</div>
      <button
        class="loginbtn"
        onClick={() => {
          auth.login(() => {
            props.history.push("/app");
          });
        }}
      >
        Login
      </button>
    </div>
  );
};
