import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons';

function Card(props) {
    return(
        <div className="card">
            <img src={require(`../images/${props.img}`)} className="card-img" />
            <div className="card-stats">
                <img src={require('../images/star.png')} className="star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount})・</span>
                <span className="gray">{props.country}</span>
            </div>
            <div className="card-text">
                <p>{props.title}</p>
                <p><span className="bold">From ${props.price} </span>/ person</p>
            </div>
        </div>
    );
}

export default Card

/*     const firstName = "Mohamed";
    const lastName= "Akmal";
    const date = new Date();
    const hours = date.getHours();

    let timeOfDay;

    if(hours < 12)
        timeOfDay = "Morning"
    else if(hours < 17)
        timeOfDay = "Afternoon"
    else if(hours > 17)
        timeOfDay = "Night" */
    /*         <div> */
/*             <div className="card">
                <img src={require('../images/person-1.png')} className="card-img" />
                <div className="card-stats">
                    <img src={require('../images/star.png')} className="star" />
                    <span>5.0</span>
                    <span className="gray">(6)・</span>
                    <span className="gray">USA</span>
                </div>
                <p>Life lessons with Katie Zaferes</p>
                <p><span className="bold">From $136 </span>/ person</p>
            </div> */
/*             <div>
                <h1>Hello {firstName} {lastName}!</h1> */
/*                 <h2>It is currently about {date.getHours()} : {date.getMinutes()}</h2> */
/*                 <h2>Good {timeOfDay}!</h2>
            </div>
            <div></div>
        </div> */

        /*         <div className="cat-card">
            <img src={require(`../images/img.jpg`)} className="image" />
            <h2 className="cat-name">{props.name}</h2>
            <div className="contact">
                <div><FontAwesomeIcon icon={faPhone} className="icon"/> ({props.phone})</div>
                <div><FontAwesomeIcon icon={faEnvelope} className="icon"/>{props.email}</div>
            </div>
        </div> */