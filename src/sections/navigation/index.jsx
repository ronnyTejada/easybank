import React from "react";
import { Button, Logo, Sections } from "../../components";
import { sections } from "../../utils/const";
import "./style.css";


const Navigation = () => {
  return (
    <nav className="nav">
      <Logo type={'default'}/>
      <Sections />
      <Button title={"Request Invite"} />
    </nav>
  );
};

export default Navigation;
