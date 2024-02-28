import React from 'react'

const DecsriptionSection = () => {
    return (
        <div className='description-section'>
            <div className='text-section'>
                <h2>Наши специализации</h2>
                <p>Добро пожаловать в наш медицинский центр, здесь ваше здоровье является нашим приоритетом. Наша команда опытных специалистов стремится обеспечить индивидуальный и всесторонний уход в соответствии с вашими уникальными потребностями.</p>
                <h2>Познакомьтесь с нашими экспертами</h2>
                <p> Познакомьтесь с нашей командой опытных врачей и медицинских работников. Благодаря их опыту и преданности делу вы можете быть уверены, что находитесь в надежных руках.</p>
                <h2>Запишитесь на прием</h2>
                <p>Готовы запланировать свой визит? Воспользуйтесь нашей удобной системой онлайн-бронирования, чтобы с легкостью записаться на прием.</p>

                <button type='button' className='button-Appointment'>Запись</button>
            </div>
            <img src="dad_child_white.jpg" alt="Dad and Child" />
        </div>
    )
}

export default DecsriptionSection