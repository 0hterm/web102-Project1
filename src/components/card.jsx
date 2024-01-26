import React from "react";

const Card = (card) => {
    return (
        <div className="Card">
            <div className="card-title">{card.name}</div>
            <img className="card-img" src={card.img} height='100px' weight='100px'/>
            <div className="card-bottom">
                <div className="card-desc">{card.desc}</div>
                <a href={card.url}>Go To Site</a>
            </div>
        </div>
    )
}

export default Card;