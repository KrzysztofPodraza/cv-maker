import React from "react";
import "./Skills.css";
import SkillsPopUp from "./SkillsPopUp";
import SkillsCard from "./SkillsCard";
import "./Informations.css";
import "./UploadImage.css";
const Skills = (props) => {
  const [skills, setSkills] = React.useState([]);
  const [v, setV] = React.useState(false);
  const addSkillHandler = (skill) => {
    setSkills((prevState) => [...prevState, skill]);
    console.log(skills);
  };
  const deleteSkillHandler = (index_prop) => {
    const temp = skills.filter((pieceOfData, index) => index !== index_prop);
    setSkills(temp);
  };
  const passSkills = () => {
    props.passSkills(skills);
  };
  return (
    <div className="skills_container">
      <div className="skills_btns_container">
        {" "}
        <button
          className="upload_button "
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
          onClick={passSkills}
        >
          next
        </button>
      </div>
      <div className="skills_container_2">
        <div className="skills_header">
          <h3 className="skills_title">Skills</h3>
          <svg
            onClick={() => {
              setV(true);
            }}
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 skills_add"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className="skills_body">
          {skills.length === 0 && (
            <p className="no_skills">Click + button to add skills</p>
          )}
          {skills.map((pieceOfData, index) => (
            <SkillsCard
              key={Math.random()}
              skill={pieceOfData}
              index={index}
              deleteSkill={deleteSkillHandler}
            />
          ))}
        </div>
      </div>
      {v && (
        <SkillsPopUp
          comp="skill"
          addSkill={addSkillHandler}
          closePopUp={() => {
            setV(false);
          }}
        />
      )}
    </div>
  );
};

export default Skills;
