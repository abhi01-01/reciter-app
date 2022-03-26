import React , {Fragment, useState , useEffect } from 'react';
import './App.css';
import alanBtn from '@alan-ai/alan-sdk-web';
import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles.js';
import wordsToNumbers from 'words-to-numbers';
import {Typography} from '@mui/material';


const alanKey = '7a6392ce55fb773102310c93d06aa8172e956eca572e1d8b807a3e2338fdd0dc/stage' ;
function App() {

  const [newsArticles , setNewsArticles] = useState([]);
  const [activeArticle , setActiveArticle] = useState(-1) ;
  
  const classes = useStyles() ;

  useEffect(() => {
    alanBtn({
      key: alanKey ,
      onCommand: ({ command , articles , number }) => {
          if(command === 'newHeadlines' ){
            setNewsArticles(articles);
            setActiveArticle(-1) ;
          }else if(command === 'highlight'){
              setActiveArticle((prevActiveArticle) => prevActiveArticle+1 );
          }else if(command === 'open'){
            const parsedNumber = number.length > 2 ? wordsToNumbers(number , {fuzzy:true}) : number ;

            const article = articles[parsedNumber-1] ;

            if(parsedNumber > 20 ){
              alanBtn().playText('Article number out of bounds, please try with a smaller number.');
            }else if(article){
              window.open(article.url , '_blank' );
              alanBtn().playText('Opening...');
            }else{
              alanBtn().playText('Please try that again....');
            }
          }
      },
    });
  
  } ,[]);




  return (
    <Fragment>
     <div>
       <div className={classes.logoContainer}>
         {newsArticles.length ? (
                <div className={classes.infoContainer}>
                    <div className={classes.card}><Typography variant="h6" component="h2">Try saying: <br /><br />Open article number [article number]</Typography></div>
                    <div className={classes.card}><Typography variant="h6" component="h2">Try saying: <br /><br />Go back</Typography></div>
                </div>
          ) : null}
         <img src="https://res.cloudinary.com/shopie/image/upload/v1648125720/reciterlogo_lt6cj4.png" className={classes.reciterLogo} alt="Reciter logo" />
       </div>
       <NewsCards articles={newsArticles} activeArticle={activeArticle} />
     </div>

     {!newsArticles.length ? (
      <div className={classes.footer}>
        <br />
      <Typography variant="body1" component="h2">
          Created by Abhishek Singh -
          <a className={classes.link} href="https://www.linkedin.com/in/abhishek0105/"> Linkedin</a> |
          <a className={classes.link} href="https://abhi100392portfolio.netlify.app/"> Portfolio</a>
      </Typography>
      </div>
    ) : null}
    </Fragment>
  );
}

export default App;
