import React from 'react'
import NewsCard from "../NewsCard/NewsCard.js"
import { Typography , Grid , Grow } from '@mui/material';
import useStyles from "./Styles"


const infoCards = [
    { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
    { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give me the latest Technology news' },
    { color: '#4527a0', title: 'News by Terms', info: 'Cryptocurrency, PlayStation 5, Smartphones, World Leaders...', text: 'What\'s up with PlayStation 5' },
    { color: '#283593', title: 'News by Sources', info: 'Google News, Wired, BBC News, Time, Fox-News, Buzzfeed, ABC News...', text: 'Give me the news from Google News' },
  ];

const NewsCards = ({articles , activeArticle}) => {

    const classes = useStyles() ;

    if(!articles.length){
        return(
            <Grow in>
                <Grid key={articles.length.toString()} className={classes.container} container alignItems="stretch" spacing={3}>
                    {infoCards.map((infoCard,i)=>(
                        <Grid key={i.toString()} item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
                            <div className={classes.card} style={{backgroundColor: infoCard.color}}>
                                <Typography variant="h5">{infoCard.title}</Typography>
                                {
                                    infoCard.info ?
                                         (<Typography variant="h6">
                                             <strong>
                                                 {infoCard.title.split(' ')[2]}
                                             </strong>
                                             <br />
                                             {infoCard.info}
                                         </Typography>) : 
                                         null 
                                }
                                <Typography variant="h6">Try Sayning: <br /> <i>{infoCard.text}</i> </Typography>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Grow>
        )
    }



  return (
    <Grow in>
        <Grid className={classes.container} container alignItems="stretch" spacing={3}>
            {articles && articles.map((article , i) => (
                <Grid key={i.toString()} item xs={12} sm={6} md={4} lg={3} style={{ display: 'flex'}}>
                    <NewsCard article={article} i={i} activeArticle={activeArticle} key={i.toString()} />
                </Grid>
            ))}
        </Grid>
    </Grow>
  )
}

export default NewsCards
