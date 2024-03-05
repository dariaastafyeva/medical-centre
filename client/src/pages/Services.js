import React from 'react'

const Services = () => {
    return (
        <div className='servisces'>
            <h1>Услуги</h1>
            <div className='services-names-section'>
                    <h2>Лечебная<br></br> косметология</h2>
                    <h2>Мануальная и физиотерапия</h2>
                    <h2>Лечебнно-профилактические<br></br> мероприятия для лечения:</h2>
                </div>
            <div className='sections-container'>
                
                <section className='sections-container--column'>
                    <div className='service-container'>
                        <img src='/servicesItems/cosmetology-injections.png'></img>
                        <p>Инъекционные процедуры</p>
                    </div>
                    <div className='service-container'>
                        <img src='/servicesItems/cosmetology-mask.png'></img>
                        <p>Уходовые процедуры</p>
                    </div>
                    <div className='service-container'>
                        <img src='/servicesItems/cosmetology-acne.png'></img>
                        <p>Лечение акне</p>
                    </div>
                    <div className='service-container'>
                        <img src='/servicesItems/cosmetology-skin-care.png'></img>
                        <p>Подбор уходовых средств</p>
                    </div>
                </section>
                <section className='sections-container--column'>
                    <div className='sections-container--column-block'>
                        <div className='adult-section'>
                            <div className='service-container'>
                                <img src='/servicesItems/manual-manual.png'></img>
                                <p>Мануальная терапия</p>
                            </div>
                            <div className='service-container'>
                                <img src='/servicesItems/manual-massage.png'></img>
                                <p>Массаж</p>
                            </div>
                            <div className='service-container'>
                                <img src='/servicesItems/manual-reflexology.png'></img>
                                <p>Рефлексотерапия</p>
                            </div>
                            <div className='service-container'>
                                <img src='/servicesItems/manual-physio.png'></img>
                                <p>Физиотерапия</p>
                            </div>
                        </div>

                        <div className='baby-section'>
                            <div className='service-container'>
                                <img src='/servicesItems/manual-voyto.png'></img>
                                <p>Войта-терапия</p>
                            </div>
                            <div className='service-container'>
                                <img src='/servicesItems/manual-voyto.png'></img>
                                <p>Боббат-терапия</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='sections-container--column' id='extra-services'>
                    <div className='service-container'>
                        <img src='/servicesItems/manual-massage.png'></img>
                        <p>Заболеваний<br></br>
                            опорно-двигательного аппарата<br></br>
                            (например, остеохондроз)
                        </p>
                    </div>
                    <div className='service-container'>
                        <img src='/servicesItems/manual-reflexology.png'></img>
                        <p>Заболеваний<br></br>
                            сердечно-сосудистой системы<br></br>
                            (включая гипертоническую болезнь<br></br>
                            и ишемическую болезнь сердца)
                            </p>
                    </div>
                    <div className='service-container'>
                        <img src='/servicesItems/manual-physio.png'></img>
                        <p>Варикозная болезнь ног (ХВН)</p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Services