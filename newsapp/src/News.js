export default function News(props)
{

    console.log(props)
    return(

        <div className="news">
          
          <div className="news-img">

            {
              props.article.urlToImage!==null?      //Using ternary operator for validation, if image is there; display the image from the source ,otherwise it will display default image as specified in line 14
              <img src={props.article.urlToImage}/>:
              <img src="https://cdn1.iconfinder.com/data/icons/logos-brands-in-colors/7500/Netflix_Logo_RGB-64.png"/>
            }

            <img src="{props.article.urlToImage}"></img> 

          </div>

          <h1>{props.article.title}</h1>

          <p>{props.article.description?.substring(0,100).concat("...")} <a href={props.article.url} target="_blank">Read More</a> </p>           {/*substring function used here to limit the length of description*/}

          

             <div className="source">
 
             <p> AUTHOR: {props.article.author} </p>
              <p>{props.article.source.name}</p>

            </div>

        </div>

    )
}