import React from 'react'
import PropTypes from 'prop-types'
import './syntaxHilight.css'

const SyntaxHilight = props => {
    return (
        <div className="syntax">
  Synatx Hilight to come for language {props.language}
          </div>
    )
}

SyntaxHilight.propTypes = {
    language : PropTypes.string.isRequired,

}

export default SyntaxHilight
