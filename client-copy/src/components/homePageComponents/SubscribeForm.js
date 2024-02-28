import React from 'react'

const SubscribeForm = () => {
    return (
        <div className='subscribe-form'>
            <h1>Узнавайте новости первыми</h1>
            <p>Подпишитесь на нашу рассылку для получения советов по здоровью, новостей и обновлений от Медицинского центра.</p>

            <label for='email'>Адрес вашей электронной почты</label>
            <div className='input-group'>
                <input type='text' name='email'></input>
                <button className='button-Appointment'>Присоединиться</button>
            </div>

            <h5>Присоединяясь, вы соглашаетесь с нашими Положениями и условиями.</h5>
        </div>
    )
}

export default SubscribeForm