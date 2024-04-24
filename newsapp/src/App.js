
import { useEffect, useState } from 'react';
import './App.css';
import News from './News';     //To import News.js file

function App() {

  let [articles,setArticles] = useState([]);
  let[category,setCategory]=useState("ibm");


   useEffect(()=>{
    fetch(`https://newsapi.org/v2/everything?q=${category}&from=2023-12-22&apiKey=ddb8329ba51544798da54a800739c44d`)
    .then((response)=>response.json())
    .then((news)=>{

      setArticles(news.articles);
      console.log(news.articles);

    })

    .catch((err)=>{
      console.log(err)
    })




   },[category])


  return (
    <div className="App">
    

      <header className='header'>

        <h1>NEWS TODAY</h1>

        <input type='text' onChange={(event)=>{

         if(event.target.value!=="")
         {
          setCategory(event.target.value) ;                     {/* To change the category of news based on user choice(that is user input)*/} 
         }

         else{
          setCategory("ibm") ;                            {/*To return back to category india when the input field become empty */}
         }

                
        }} placeholder='Search News'></input>


      </header>

      <section className='news-articles'>


        {
           articles.length!==0?


          articles.map((article)=>{
            return(
              <News article={article}/>   //Passing whole article as a prop
            )
          })
          :
          <h3>No News Found For Searched Text</h3>  //To display error message when searched item not found
        }




    
      </section>

    
    </div>
  );
}

export default App;
