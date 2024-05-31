import React, { useEffect, useLayoutEffect, useState } from 'react'
import axios from "axios"
import Article from '../components/Article';
import RouteHistory from '../components/RouteHistory';


const Articles = () => {

    const [articles, setArticles] = useState([]);

    const arrayOfRoutes = [
        {
            link: "/",
            name: "Главная",
        }
    ];

    useLayoutEffect(() => {
        window.scrollTo(0, 0)
    });

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
                {elements.map((element, index) => (
                    <Article
                        key={index}
                        article={element}
                        isShowButton={isShowButton}
                    />
                ))}
            </div>

        );
    };

    return (
        <div className='content--wrapper'>
            <RouteHistory
                arrayOfObjects={arrayOfRoutes}
            />
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