import { useEffect, useState } from 'react';
import './App.css';
import { getArticles } from './controllers';
import { Footer, LatestArticle, Navigation, NewArticle, PreviousArticle } from './sections';


function App() {

   const [data , setData] = useState([])
   const [edit, setEdit] = useState(false)
   const [articleToEdit, setArticleToEdit] = useState({})
   const [refetch, setRefetch] = useState(false)

   useEffect(()=>{
       getArticles(setData)
   },[refetch])

   const chooseArticleToEdit = (article,status) =>{
     
      if(status){
         setEdit(true)
         setArticleToEdit(article)
      }else{
         setEdit(false)
         setArticleToEdit(article)
      }
     
   }

  return (
    <div className="App">
       <header>
          <Navigation/>
       </header>
       <main>
          <NewArticle isEdit={edit} edit={chooseArticleToEdit} articleToEdit={articleToEdit}  setRefetch={setRefetch}/>
          <PreviousArticle data={data} setData={setData} article={articleToEdit}  edit={chooseArticleToEdit} />
          <LatestArticle data={data}/>
       </main>
       <footer>
            <Footer/>
       </footer>
    </div>
  );
}

export default App;
