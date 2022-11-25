import axios from "axios";
import Swal from "sweetalert2";

const baseUrl = "https://www.api.recruitment.matic.io/";

const getArticles = async (setData) => {
  await axios
    .get(baseUrl + "articles", {})
    .then(function (response) {
      setData(response.data.data);
     
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {});
};

const createArticle = (article,setArticle,setLoading,setRefetch) => {
  axios
    .post(baseUrl + "articles", {
      author: article.author,
      title: article.title,
      content: article.content,
    })
    .then((res) => {
     
      Swal.fire({
        icon: "success",
        title: "Articulo creado",
        showConfirmButton: false,
        timer: 1500,
      });
      setRefetch((prev)=> prev = !prev)

      setLoading(false)
    })
    .catch((err) => {
      Swal.fire({
        icon: "error",
        title: "algo salio mal",
        showConfirmButton: false,
        timer: 1500,
      });
      console.log(err);
      setLoading(false)
    });
};

const deleteArticle = (id, setData) => {
  axios
    .delete(baseUrl + `articles/${id}`, {})
    .then((res) => {
      setData((prev) => prev.filter((item) => item.id !== id));
    })
    .catch((err) => {
      console.log(err);
    });
};

const editArticle = (id, article,setRefetch,setLoading,setArticle) => {
  console.log(article);
  axios
    .patch(baseUrl + `articles/${id}`, {
      author: article.author,
      title: article.title,
      content: article.content,
    })
    .then((res) => {
     
      setRefetch((prev)=> prev = !prev)
      setLoading(false)
      setArticle({
        author: "",
        title: "",
        content: "",
      })
      Swal.fire({
        icon: "success",
        title: "Articulo editado correctamente",
        showConfirmButton: false,
        timer: 1500,
      });
    })
    .catch((err) => {
      console.log(err);
      setLoading(false)
    });
};

export { getArticles, createArticle, deleteArticle, editArticle };
