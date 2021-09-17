import React from 'react';
import './CardItem.css';


function CardItem(props) {
    return (
        <>
            <li className="cards__item">
                <figure className="cards__item__pic__wrap">
                    <img className="cards__item__img" src={props.src} alt={props.alt} />
                </figure>
                <div className="cards__item__info">
                    <h3>{props.h3}</h3>
                    <p>{props.p}</p>
                </div>
            </li>
        </>
    )
}

export default CardItem;
