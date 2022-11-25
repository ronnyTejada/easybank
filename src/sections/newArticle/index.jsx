import React from "react";
import { Form, Subtitle, Title } from "../../components";
import './style.css'

const NewArticle = ({articleToEdit,edit,isEdit, setRefetch}) => {
  return (
    <section className="container">
      <article>
        <Title text={"Add New Blog Article"} />
        <Subtitle
          text={
            "Publish a new blog article to feature in the Easybank homepage."
          }
        />
      </article>
      <article className="form_section">
        <Form edit={edit} isEdit={isEdit}  articleToEdit={articleToEdit} setRefetch={setRefetch}/>
      </article>
    </section>
  );
};

export default NewArticle;
