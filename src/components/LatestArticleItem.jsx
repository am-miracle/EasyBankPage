import React from 'react';
import './LatestArticleItem.css';
import { Link } from 'react-router-dom';

function LatestArticleItem(props) {
    return (
        <>
            <li className="cards__item">
                <figure className="cards__item__pic__wrap">
                    <img className="article-img" src={props.image} alt={props.alt} />
                </figure>
                <div className="latest-info">
                    <figcaption className="">{props.figcaption}</figcaption>
                    <Link to="/" className="h-link">
                        <h4>{props.heading}</h4>
                    </Link>
                    <p>{props.paragraph}</p>
                </div>
            </li>
        </>
    )
}

export default LatestArticleItem;
