import React from 'react'
import PropTypes from 'prop-types'
import './Card.css'

const Card = props => {
    const { title, description, imgUrl, alt  , flip} = props;
    if(flip) {
        return (
            
            <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                <img src={imgUrl} alt={alt} style={{width:'300px',height:'300px'}} />
                </div>
                <div className="flip-card-back">
                <h1>{title}</h1> 
                {description}
                {props.children.length}
                {props.children}
                </div>
            </div>
            </div>
        )
    }
    return (
        <div className="card">
            <img src={imgUrl} alt={alt} style={{width:'100%'}} />
            <div className="container">
                <h4><b>{title}</b></h4>
                <p>{description}</p>
                {props.children}
            </div>
        </div>
    )
}

Card.propTypes = {
    imgUrl : PropTypes.string.isRequired,
    flip: PropTypes.bool,
    alt: PropTypes.string,
    title : PropTypes.string,
    desc: PropTypes.string

}

export default Card
