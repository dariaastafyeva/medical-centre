import React from 'react'

const DecsriptionSection = () => {
    return (
        <div className='description-section'>
            <div className='text-section'>
                <h1>Наши специализации</h1>
                <p>Добро пожаловать в наш медицинский центр, здесь ваше здоровье является нашим приоритетом. Наша команда опытных специалистов стремится обеспечить индивидуальный и всесторонний уход в соответствии с вашими уникальными потребностями.</p>
                <h3>Познакомьтесь с нашими экспертами</h3>
                <p> Познакомьтесь с нашей командой опытных врачей и медицинских работников. Благодаря их опыту и преданности делу вы можете быть уверены, что находитесь в надежных руках.</p>
                <h3>Запишитесь на прием</h3>
                <p>Готовы запланировать свой визит? Воспользуйтесь нашей удобной системой онлайн-бронирования, чтобы с легкостью записаться на прием.</p>

                <button type='button' className='button-Appointment'>
                    <div className='button-Appointment-flex-container'>
                        <p>Запись</p>
                        <svg className='svg-arrow-button'>
                            <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
                        </svg>
                    </div>

                </button>
            </div>
            <img src="https://i.pinimg.com/564x/36/cc/a8/36cca88b83b1846acf77f17b10ef62dd.jpg" alt="Dad and Child" />
        </div>
    )
}

export default DecsriptionSection