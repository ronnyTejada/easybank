import React from "react";
import { sections } from "../../utils/const";
import "./style.css";

const Sections = () => {
  return (
    <ul className="sections">
      {sections.map((section) => {
        return (
          <li className="sections__section">
            <span>{section}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default Sections;
