import React from "react";

const CardPage = (props) => {
    return (
        <div className="container">
            {props.title}
            <h2>{props.date}</h2>
            <img src={props.url} alt="nasa" className='image' />
            <div className="description">
                {props.description}
            </div>
        </div>
    )
}

export default CardPage;