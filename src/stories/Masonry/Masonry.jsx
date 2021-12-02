import React, { useEffect } from 'react'

import PropTypes from 'prop-types'
import MiniMasonry from "minimasonry";

import './Masonry.css'

const Masonry = (props) => {
    let component;
    const { id } = props
    const getId = () => "Masonary_" + (id || "");
   

    useEffect(() => {
        component = new MiniMasonry({
            container: document.getElementById(getId()),
            ...props
        });
        let i = 1;
       const intv = setInterval(() => {
            i++;
            if(i === 6) clearInterval(intv)
            component.layout();
        }, i * 300);    
    
    }, [])
  

    return (
        <div id={getId()}>
            {props.children.map((child, index) => <div className="item">{child}</div> )}
        </div>
    )
}

Masonry.propTypes = {
    baseWidth: PropTypes.number, //	255	Target width of elements.
    gutter: PropTypes.number, //	10	Width / height of gutter between elements. Use gutterX / gutterY to set different values.
    gutterX: PropTypes.number, //	null 	Width of gutter between elements. Need gutterY to works, fallback to "gutter".
    gutterY	: PropTypes.number, //	null	Height of gutter between elements. Need gutterX to works, fallback to "gutter".
    minify	: PropTypes.bool, //	true	Whether or not MiniMasonry place elements on shortest column or keep exact order of list.
    surroundingGutter: PropTypes.bool, //	true	Set left gutter on first column and right gutter on last.
    ultimateGutter	: PropTypes.number, //		Gutter applied when only 1 column can be displayed.
    direction: PropTypes.string, //		'ltr'	Sorting direction, "ltr" or "rtl".
    wedge: PropTypes.bool, //	false	False will start to sort from center, true will start from left or right according to direciton parameter.
    id : PropTypes.string, //
}

export default Masonry

