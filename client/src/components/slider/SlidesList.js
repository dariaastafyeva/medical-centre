import React, { useContext } from 'react'
import { SliderContext } from './Slider'
import Slide from './Slide';
import FeedbackBody from '../FeedbackBody'

const SlidesList = () => {

    const { slideNumber, items } = useContext(SliderContext);

    return (
        <div
            className='slide-list'
            style={{ transform: `translateX(-${slideNumber * 100}%)` }}
        >
            {items.map((slide, index) => (
                <FeedbackBody key={index} element={slide} />
            ))}
        </div>
    )
}

export default SlidesList