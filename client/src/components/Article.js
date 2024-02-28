import React from 'react'

const Article = ({article}) => {
  return (
    <div className='article-card'>
        <img src={article.img} alt='Статья'></img>
        <div className='tag'>
        <p className='tag-name'>{article.tag}</p>
        <p className='article-duration'>{article.duration}</p>
        </div>
        <h3>{article.title}</h3>
        <p className='desc'>{article.desc}</p>

          <button type='button' className='button-Appointment'>Читать</button>
    </div>
  )
}

export default Article