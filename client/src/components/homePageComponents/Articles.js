import React, { useEffect, useState } from 'react'
import axios from "axios"

import Article from '../Article';
import { Link } from 'react-router-dom';

const Articles = () => {
    const componentName = "Article";
    const propName = "article";
    const numberOfElements = 3;

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("/articles");
                setArticles(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])

    const getMappedCard = (elements) => {
        return (
            <div className='article-cards'>
                {elements.map((element, index) => (        
                    index < numberOfElements && <Article key={index} article={element} />
                ))}
            </div>

        );
    };



    return (
        <div className='articles-home'>
            <p className='section-name'>Статьи</p>
            <h1>Будьте здоровы вместе с нами</h1>
            <p>Получите самые свежие советы и информацию о здоровье из нашего блога.</p>
            {getMappedCard(articles)}
            <Link to="/articles">
                <button type='button' className='button-About'>Читать все</button>
            </Link>
            
        </div>
    )
}

export default Articles