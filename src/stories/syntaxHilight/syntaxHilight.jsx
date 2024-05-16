import React from 'react'
import PropTypes from 'prop-types'
import './syntaxHilight.css'

import Prism from 'prismjs';
import 'prismjs/themes/prism.css'

const SyntaxHilight = props => {
    return (
        <div>

            <label>{props.language}</label>
            <pre>
                <code class="language-css">{props.code}</code></pre>

        </div>
    )
}

SyntaxHilight.propTypes = {
    language: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired

}

export default SyntaxHilight
