import React, { useEffect, useState } from 'react'
import axios from "axios"
import Article from '../components/Article';


const Articles = () => {

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
    }, []);


    const isShowButton = true;

    const getMappedCard = (elements) => {
        return (
            <div className='article-cards'>
                {elements.map(element => (
                    <Article
                        article={element}
                        isShowButton={isShowButton}
                    />
                ))}
            </div>

        );
    };

    return (
        <div className='content--wrapper'>
            <div className='articles'>
                <div className='article-group'>
                    <h1>
                        Статьи
                    </h1>
                    <h3>Полезные знания для вашего здоровья</h3>
                    {getMappedCard(articles, isShowButton)}
                </div>
            </div>
        </div>
    )
}

export default Articles