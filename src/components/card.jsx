import React from "react";
import './Card.css';

const Card = (card) => {
    return (
        <div className="Card">
            <div className="card-title">{card.name}</div>
            <div className="card-img-container">
                <img className="card-img" src={card.img} alt={card.name} />
            </div>
            <div className="card-bottom">
                <div className="card-desc">{card.desc}</div>
                <a  className='card-btn' href={card.url}>Go To Site</a>
            </div>
        </div>
    );
}

export default Card;