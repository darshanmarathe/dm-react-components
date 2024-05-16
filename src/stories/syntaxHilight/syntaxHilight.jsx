import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import './syntaxHilight.css'

import Prism from 'prismjs';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/themes/prism.css'

const SyntaxHilight = props => {
    useEffect(() => {
        Prism.highlightAllUnder(document.getElementsByTagName('body')[0]);
        console.log(Prism.plugins)
    })
    let className = `language-${props.language}`
    if (props.lineNumbers === true) {
        className += ' line-numbers'
    }
    return (
        <div className='line-numbers'>

            <label>{props.language}</label>
            <pre className={className}>
                <code>{props.code}</code>
            </pre>

        </div>
    )
}

SyntaxHilight.propTypes = {
    language: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired,
    lineNumbers: PropTypes.bool

}

export default SyntaxHilight
