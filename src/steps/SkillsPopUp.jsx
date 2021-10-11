import React from "react";
import "./SkillsPopUp.css";
import "./UploadImage.css";
import "./Informations.css";

const SkillsPopUp = (props) => {
  const [skill, setSkill] = React.useState("");
  const addSkillHandler = () => {
    props.addSkill(skill);
    props.closePopUp();
  };
  return (
    <div className="skills_popup_main">
      <div
        className="skills_popup_blinder"
        onClick={() => {
          props.closePopUp();
        }}
      />
      <div className="skills_popup_body">
        <p className="informations_labels">Enter {props.comp}</p>
        <input
          className="informations_input"
          value={skill}
          onChange={(e) => {
            setSkill(e.target.value);
          }}
        ></input>
        <button
          className="upload_button"
          style={{ fontSize: "1rem", marginTop: "1rem" }}
          onClick={addSkillHandler}
        >
          Add {props.comp}
        </button>
      </div>
    </div>
  );
};

export default SkillsPopUp;
