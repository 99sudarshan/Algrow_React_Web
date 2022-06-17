import React from 'react'

const CareerCard = (props) => {
    const { urlToImg, title } = props;

    return (
        <div className="careerCard" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${urlToImg})` }}>
            <h4 className='careerCard_title'>{title}</h4>
        </div>
    )
}

export default CareerCard;