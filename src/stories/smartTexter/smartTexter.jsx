import React from "react";
import "./smartTexter.css";

import { useState , useRef} from "react";

function SmartTexter({ text = "", smarts = {}, showToolBar = false }) {
  const [value, setValue] = useState(text);
  const textAreaEl = useRef(null)

  const checkAndReplace = (text) => {
    for (const iterator of Object.keys(smarts)) {
      if(smarts[iterator].startsWith("EE:")){
        smarts[iterator] = smarts[iterator].replace("EE:","")
        smarts[iterator] = eval(smarts[iterator]);
        smarts[iterator] += "#$"
      }
      text = text.replace(iterator, smarts[iterator]);
    }
    return text
}
  const HandleChange = (e) => {
    setValue(checkAndReplace(e.target.value));
    
  };

  React.useEffect(() => {
    const index = value.indexOf('#$');
    if (index > -1) {
     
      textAreaEl.current.selectionStart = index;
      textAreaEl.current.selectionEnd = index + 2;
      //setValue(value.replace('#$', ''));
    }
  }, [value]);
  return (
    <>
      {showToolBar && (
        <div className="toolbar">
        <ul>
       
          {Object.keys(smarts).map((smt , ind) => {
            return <li key={ind} title={smarts[smt]}  >{smt}</li>;
          })}
        </ul>
        </div>
      )}
      <textarea ref={textAreaEl}
        onChange={(e) => HandleChange(e)}
        className="smartTexter"
        placeholder="Type your message here..."
        value={value}
      >

 {value}
      </textarea>

<pre>
  {value}
</pre>
    </>
  );
}

export default SmartTexter;
