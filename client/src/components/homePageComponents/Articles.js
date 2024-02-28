import React from 'react'

import { articles } from '../../testingData/testingData'
import Article from '../Article';

const Articles = () => {
    const componentName = "Article";
    const propName = "article";
    const numberOfElements = 3;

    const getMappedCard = (elements) => {
        return (
            <div className='article-cards'>
                {elements.map((element, index) => (        
                    index < numberOfElements && <Article article={element} />
                ))}
            </div>

        );
    };



    return (
        <div className='articles'>
            <p className='section-name'>Статьи</p>
            <h1>Будьте здоровы вместе с нами</h1>
            <p>Получите самые свежие советы и информацию о здоровье из нашего блога.</p>
            {getMappedCard(articles)}
            <button type='button' className='button-About'>Читать все</button>
        </div>
    )
}

export default Articles