import React from "react";
import "./Skills.css";

import "./SkillsCard.css";

const SkillsCard = (props) => {
  return (
    <div className="main_skill_card">
      <p className="skill_card_text">{props.skill}</p>
      <svg
        onClick={() => {
          console.log(props.index);
          props.deleteSkill(props.index);
        }}
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 skill_card_remove"
        fill="none"
        viewBox="0 0 24 24 "
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
  );
};

export default SkillsCard;
