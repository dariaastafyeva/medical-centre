import axios from 'axios';
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import RouteHistory from '../components/RouteHistory';


const ArticleProfile = () => {

  const location = useLocation();
  const articleId = location.pathname.split('/')[2];
  const arrayOfRoutes = [
    {
      link: "/",
      name: "Главная",
    },
    {
      link: "/articles",
      name: "Статьи",
    },
  ];

  const [article, setArticle] = useState({});

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const res = await axios.get(`/articles/${articleId}`);
        setArticle(res.data);
      } catch (error) {
        console.log(error);
      }
    }

    const fetchData = async () => {
      fetchArticle();
    }
    fetchData();
  }, [articleId])
  
  return (
    <div className='content--wrapper'>
      <RouteHistory 
        arrayOfObjects={arrayOfRoutes}
      />

      <div>        
      </div>
      <div className='profile'>
        <div className='article-card'>
          <div className='article-banner'>
            <img alt='Фото' src={article.img}></img>
            <div className='article-head'>
              <h1>{article.title}</h1>
              <div className='tag'>
                <p className='tag-name'>{article.tag}</p>
                <p className='article-duration'>{article.duration}</p>
              </div>
            </div>
          </div>
          <div className='article-content'>
            <pre>{article.text}</pre>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleProfile
