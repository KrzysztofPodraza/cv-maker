import React from "react";
import "./Job.css";
import "./UploadImage.css";
import "./Informations.css";

const Job = (props) => {
  const [job, setJob] = React.useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    props.passJob(job);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="job_container">
        <div className="job_container_2">
          <p className="informations_labels">Job title</p>
          <input
            required
            className="informations_input"
            placeholder="frontend,backend,etc"
            value={job}
            onChange={(e) => {
              setJob(e.target.value);
            }}
          ></input>
          <div className="jobs_buttons">
            <button
              onClick={props.prev}
              className="upload_button mt"
              style={{ fontSize: "1.5rem", width: "100%", marginRight: "1rem" }}
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

export default Job;
