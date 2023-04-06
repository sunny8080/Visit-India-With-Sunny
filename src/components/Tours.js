import React from 'react'
import Card from './Card'

function Tours(props) {
    return (
        <div className='container'>
            <h1 className='heading'>Visit India With Sunny</h1>

            <div className='cards-container'>
                {
                    props.tours.map((tour) => {
                        return <Card 
                        key={tour.id}
                        tour={tour}
                        removeTour={props.removeTour}
                        ></Card>
                    })
                }
            </div>
        </div>
    )
}

export default Tours;
