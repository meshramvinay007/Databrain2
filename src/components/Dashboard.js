import React from "react";
import "./Dashboard.scss";

export default function Dashboard({ data }) {
  return (
    <div className="dashboard">
      <center>
        <h1 className="d-heading">Dashboard</h1>
      </center>
      <center>
        <div className="d-content">
          <p>
            Your Name is <span>{data.enteredName}</span>
          </p>
          <p>
            Your Email address is <span>{data.enteredEmail}</span>
          </p>
          <p>
            Your Phone number is <span> {data.enteredPhoneNumber}</span>
          </p>
          <p>
            Your Password is <span>{data.enteredPassword}</span>
          </p>
        </div>
      </center>
    </div>
  );
}
