import React from "react";
import './card.styles.css';

export const Card = (props) => 
{
    return (
        <div className="card">
            <img alt="robot" src={`https://robohash.org/XM${props.robot.id}.png?set=set1&size=150x150`}/>
            <h3 className="card-name">{props.robot.name}</h3>
            <p className="card-username">{props.robot.username}</p>
            <p className="card-email">{props.robot.email}</p>
        </div>
    )
}