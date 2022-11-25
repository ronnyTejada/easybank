import React from "react";
import logo from "../../assets/logo.png";
import logoWhite from "../../assets/logoWhite.png";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";
import pinterest from "../../assets/pinterest.png";

import "./style.css";
const Logo = ({ type }) => {
  return (
    <>
      {type === "default" ? (
        <img className="logo" src={logo} alt="" />
      ) : type === "instagram" ? (
        <img className="logo" src={instagram} alt="" />
      ) : type === "facebook" ? (
        <img className="logo" src={facebook} alt="" />
      ) : type === "white" ? (
        <img className="logo" src={logoWhite} alt="" />
      ) : type === "twitter" ? (
        <img className="logo" src={twitter} alt="" />
      ) : type === "youtube" ? (
        <img className="logo" src={youtube} alt="" />
      ) : type === "pinterest" ? (
        <img className="logo" src={pinterest} alt="" />
      ) : (
        ""
      )}
    </>
  );
};

export default Logo;
