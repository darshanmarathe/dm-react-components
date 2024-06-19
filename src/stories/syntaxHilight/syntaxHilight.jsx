import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import './syntaxHilight.css'

import Prism from 'prismjs';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/themes/prism.css'


const useScript = (id , url) => {
    useEffect(() => {
      let script = document.getElementById(id);
      if(!script){
        script = document.createElement('script');
        script.src = url;
        script.id = id
        script.async = false;
      }
  
      document.body.appendChild(script);
  
      return () => {
        document.body.removeChild(script);
      }
    }, [url]);
  };
  

  
const useCss = (id , url) => {
    useEffect(() => {
      let link = document.getElementById(id);
      if(!link){
        link = document.createElement('link');
        link.href = url;
        link.id = id;
        link.rel = "stylesheet"
        link.async = false;
      }
  
      document.body.appendChild(link);
  
      return () => {
        document.body.removeChild(link);
      }
    }, [url]);
  };
  
const SyntaxHilight = props => {
    
    const path = `https://cdn.jsdelivr.net/npm/prismjs@1.29.0/plugins/autoloader/prism-autoloader.min.js`
    const line_numberPath = `https://cdn.jsdelivr.net/npm/prismjs@1.29.0/plugins/line-numbers/prism-line-numbers.js`
 
    useCss('linenumbercss' , 'https://prismjs.com/plugins/line-numbers/prism-line-numbers.css')
    useScript('autoloader',path)
    useScript('linenumber',line_numberPath)

    useEffect(() => {
        
     
        Prism.highlightAllUnder(document.getElementsByTagName('body')[0]);
        
    
    },[])

    let className = `language-${props.language}`

    if(props.lineNumbers === true){
        className += ' line-numbers'
    }
      return (
        <div>

            <label>{props.language}  {className}</label>
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
