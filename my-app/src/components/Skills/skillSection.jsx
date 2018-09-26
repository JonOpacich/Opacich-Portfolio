import React from "react";

const SkillSection = (props) => {
  return (
    <div>
      <span className="icon is-large">       
          <i class={`fab fa-3x ${props.icon}`} />
      </span>
    </div>
  );
};

export { SkillSection };
