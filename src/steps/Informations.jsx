import React from "react";
import "./Informations.css";
import "./UploadImage.css";
import "./Job.css";

const Informations = (props) => {
  let name, surname, email, phone;
  let error = {
    name: false,
    surname: false,
    email: false,
    phone: false,
  };
  const submitFormHandler = (e) => {
    error.name = false;
    error.surname = false;
    error.email = false;
    error.phone = false;

    e.preventDefault();
    const informations = {
      name: name,
      surname: surname,
      email: email,
      phone: phone,
    };
    if (!informations.name) {
      error.name = true;
    }
    if (!informations.surname) {
      error.surname = true;
    }
    if (!informations.email) {
      error.email = true;
    }
    if (!informations.phone) {
      error.phone = true;
    }

    if (!error.name && !error.surname && !error.email && !error.phone) {
      props.passInfo(informations);
    }
  };
  return (
    <form onSubmit={submitFormHandler}>
      <div className="informations_container">
        <div className="informations_container_2">
          <div
            style={{ display: "flex", minHeight: "5rem", maxHeight: "6rem" }}
          >
            <h1 className="informations_title">Informations</h1>
          </div>

          <div style={{ marginBottom: "1rem" }} className="doubled_flex">
            <div
              style={{ width: "100%", marginRight: "3rem" }}
              className="flex-column"
            >
              <p className="informations_labels">Name</p>
              <input
                required
                placeholder="John"
                onChange={(e) => {
                  name = e.target.value;
                }}
                className="informations_input"
              ></input>
            </div>
            <div style={{ width: "100%" }} className="flex-column">
              <p className="informations_labels">Surname</p>

              <input
                required
                placeholder="Smith"
                onChange={(e) => {
                  surname = e.target.value;
                }}
                className="informations_input"
              ></input>
            </div>
          </div>
          <div className="flex-column">
            <p className="informations_labels">email</p>

            <input
              required
              placeholder="john.smith@gmail.com"
              type="email"
              onChange={(e) => {
                email = e.target.value;
              }}
              className="informations_input"
              style={{ marginBottom: "1rem" }}
            ></input>
          </div>
          <div className="flex-column">
            <p className="informations_labels">phone</p>

            <input
              required
              placeholder="123456789"
              type="tel"
              onChange={(e) => {
                phone = e.target.value;
              }}
              className="informations_input"
            ></input>
          </div>
          <div className="jobs_buttons">
            <button
              className="upload_button mt"
              style={{ fontSize: "1.5rem", width: "100%", marginRight: "1rem" }}
              onClick={() => {
                props.prev();
              }}
            >
              previous
            </button>
            <button
              className="next_button"
              style={{ fontSize: "1.5rem", width: "100%" }}
              type="submit"
            >
              next
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Informations;
