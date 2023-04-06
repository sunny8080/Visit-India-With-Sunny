import React from 'react'
import { useState } from 'react'

const Card = ({ tour, removeTour }) => {
    // readMore = true means we have to show all the info
    const [readMore, setReadMore] = useState(false);


    const description = readMore ? tour.info : tour.info.substr(0, 200) + "...";

    function readMoreHandler() {
        setReadMore(!readMore);
    }

    return (
        <div className='card'>
            <img className='tourImage' src={tour.image} alt="visiting place image" />
            <div className='tourInfo'>
                <p className='tour-price'>₹ {tour.price}</p>
                <p className='tour-name'>{tour.name}</p>
                <p className='tour-desc'>{description} <span className='readMore' onClick={readMoreHandler}>{readMore ? "Show Less" : "Read More"}</span>
                </p>
            </div>
            <button className='notButton' onClick={() => removeTour(tour.id)}>Not Interested</button>
        </div>
    )
}

export default Card