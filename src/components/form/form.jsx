import React, { useEffect, useState } from "react";
import { createArticle, editArticle } from "../../controllers";
import Button from "../button/button";
import Input from "../input/input";
import Label from "../label/label";
import { Element, Link } from "react-scroll";

import "./style.css";

const Form = ({ edit, articleToEdit, setRefetch,isEdit}) => {
  const [article, setArticle] = useState({
    author: "",
    title: "",
    content: "",
  });

  const [loading, setLoading] = useState(false);

  const handleText = (event) => {
    setArticle({
      ...article,
      [event.target.name]: event.target.value,
    });
  };

  const send = (e) => {
    e.preventDefault();
    setLoading(true);
    
    if (!isEdit) {
      createArticle(article, setArticle,setLoading,setRefetch);
    } else {
      editArticle(articleToEdit.id, article, setRefetch,setLoading,setArticle);
    }
  };

  useEffect(() => {
    if (isEdit) {
      setArticle(articleToEdit);
    }else{
      setArticle({
        author: "",
        title: "",
        content: "",
      })
    }
  }, [isEdit,articleToEdit]);

  return (
    <Element name="form">
      <form action="#" className="form" onSubmit={(event) => send(event)}>
        <Label text={"Author"} />
        <Input onChange={handleText} value={article.author} name={"author"} />
        <Label text={"Blog Title"} />
        <Input onChange={handleText} value={article.title} name={"title"} />
        <Label text={"Blog Content"} />
        <Input
          onChange={handleText}
          value={article.content}
          name={"content"}
          textarea={true}
        />
        <br />
        {!loading ? (
          <Button title={"save"} width={"100"} />
        ) : (
          <Button title={"...Loading"} disabled={true} width={"100"} />
        )}
        {isEdit &&
        <Link className="delete" smooth={true} onClick={()=>edit({},false)} to={'tablet'}>Cancel Edit</Link>

        }

      </form>
    </Element>
  );
};

export default Form;
