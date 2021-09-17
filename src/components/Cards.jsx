import React from 'react'
import CardItem from './CardItem';
import LatestArticleItem from './LatestArticleItem';
import './Cards.css';
import easyBank, { latestArticle } from '../Easybank.js';



function createCard(easyBank){
    return (
        <CardItem 
            key={easyBank.id}
            src={easyBank.imageSrc}
            h3={easyBank.hText} 
            p={easyBank.pText}
            alt={easyBank.alt}
        />
    )
}
function createArticleCard(latestArticle){
    return (
        <LatestArticleItem 
            key={latestArticle.id}
            image={latestArticle.image}
            heading={latestArticle.heading} 
            paragraph={latestArticle.paragraph}
            figcaption={latestArticle.label}
            alt={latestArticle.alt}
        />
    )
}

function Cards() {
    return (
        <>
            <div className="cards">
                <h2>Why choose Easybank?</h2>
                <p id="cards-p">We leverage Open Banking to turn your bank account into your financial hub. Control 
                    your finances like never before.
                </p>
                <div className="container">
                <ul className="items">
                    {easyBank.map(createCard)}
                </ul>
            </div>
        </div>
        <div className="cards-latest">
            <h2>Latest Articles</h2>
            <div className="container">
                <ul className="items">
                    {latestArticle.map(createArticleCard)}
                </ul>
            </div>
        </div>
        </>
    )
}

export default Cards;
