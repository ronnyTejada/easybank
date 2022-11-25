import React from "react";
import Image from "../image/image";
import Subtitle from "../text/Subtitle";
import Title from "../text/Title";
import "./style.css";

const Card = ({ image, title, author, text }) => {
  return (
    <div className="card">
      <Image img={image} />

      <div className="card__textWrapper">
        <Subtitle text={`By ${author}`} size={"10"} />
        <Title text={title} size={"16"} />
        <p className="card__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsa tempora, expedita vero autem sint ipsam officiis voluptatem architecto quod minima temporibus non est alias ipsum, animi commodi natus blanditiis.</p>

      </div>

    </div>
  );
};

export default Card;
