import React from "react";
import { Subtitle, Table, Title } from "../../components";
import "./styles.css";

const Previous = ({ data, setData, edit,  article }) => {
  return (
    <section className="container">
      <article>
        <Title text={"Previous Articles"} />
        <Subtitle
          text={
            "Review and edit previous blog posts published on to the homepage"
          }
        />
      </article>

      <article >
        <Table data={data}  setData={setData} edit={edit}/>
      </article>
    </section>
  );
};

export default Previous;
