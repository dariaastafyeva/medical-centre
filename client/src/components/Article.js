import React from 'react'
import { Link } from 'react-router-dom'

const Article = ({ article, isShowButton }) => {
  return (
    <div className='article-card'>
      <img src={article.img} alt='Статья'></img>
      <div className='tag'>
        <p className='tag-name'>{article.tag}</p>
        <p className='article-duration'>{article.duration}</p>
      </div>
      <h3>{article.title}</h3>
      <p className='desc'>{article.desc}</p>
      <Link to={`/articles/${article.id}`}>
        {isShowButton && <button type='button' className='button-Appointment'>Читать</button>}
      </Link>
    </div>
  )
}

export default Article