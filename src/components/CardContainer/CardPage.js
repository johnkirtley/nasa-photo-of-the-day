import React from "react";

const CardPage = (props) => {
    return (
        <div className="container">
            <div className="heading">
                <h2>{props.title}</h2>
                <h3>{props.date}</h3>
            </div>
            <img src={props.url} alt="nasa" className='image' />
            <div className="description">
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default CardPage;