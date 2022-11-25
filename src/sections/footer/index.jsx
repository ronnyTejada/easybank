import React from "react";
import { Button, Logo } from "../../components";
import "./style.css";

const Footer = () => {
  return (
    <section className="footer">
      <article className="footer__article_one">
        <Logo type={"white"} />
        <div className="footer__social_div">
          <Logo type={"facebook"} />
          <Logo type={"youtube"} />
          <Logo type={"twitter"} />
          <Logo type={"pinterest"} />
          <Logo type={"instagram"} />
        </div>
      </article>
      <article className="footer__article_two">
        <div>
          <ul className="footer__list">
            <li>About Us</li>
            <li>Contact</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <ul className="footer__list">
            <li>Careers</li>
            <li>Support</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </article>
      <article className="footer__article_three">
        <Button title={'Request Invite'}/>
        <p>© Easybank. All Rights Reserved</p>
      </article>
    </section>
  );
};

export default Footer;
