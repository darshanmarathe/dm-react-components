import React from "react";
import "./smartTexter.css";

import { useState, useRef } from "react";

function SmartTexter({
  text = "",
  smarts = {},
  showToolBar = false,
  showPreview = false,
}) {
  const [value, setValue] = useState(text);
  const [startkey , setStartkey] = useState(0)
  const textAreaEl = useRef(null);

  const replaceSubsstring = (str, start, end, strreplace) => {
    return (
      str.substring(0, start) + strreplace + str.substring(end, str.length)
    );
  }



  const checkAndReplace = (text , key, start , end, e) => {
    for (const iterator of Object.keys(smarts)) {

      if(key === iterator){
        e.preventDefault();
        let evaluated = smarts[iterator];
        if (evaluated.startsWith("EE:")) {
          evaluated = evaluated.replace("EE:", "");
          evaluated = eval(evaluated);
          evaluated += "#$";
        }

      text = replaceSubsstring(text , start ,end , evaluated);
      }
    }
    return text;
  };

  const HandleTab = (e) => {
    if (e.keyCode === 9) { // tab was pressed
      // get caret position/selection
      var val = e.target.value,
          start = startkey,
          end = e.target.selectionEnd;

      e.preventDefault();
      debugger;
      setValue(checkAndReplace(e.target.value ,val.substring(startkey, end).trim() , start , end ,e));

      // set textarea value to: text before caret + tab + text after caret
      //this.value = val.substring(startKey, start) + '\t' + val.substring(end);

      // put caret at right position again
      //this.selectionStart = this.selectionEnd = start + 1;

      // prevent the focus lose
      return false;

  }
  if(e.keyCode === 32 || e.keyCode === 13 ){
      setStartkey(e.target.selectionStart);
  }
  }
  const HandleChange = (e) => {
    setValue(e.target.value);
  };

  React.useEffect(() => {
    const index = value.indexOf("#$");
    if (index > -1) {
      //   setValue(value.replace('#$', ''));

      textAreaEl.current.selectionStart = index;
      textAreaEl.current.selectionEnd = index + 2;
    }
  }, [value]);
  return (
    <>
      {showToolBar && (
        <div className="toolbar">
          <ul>
            {Object.keys(smarts).map((smt, ind) => {
              return (
                <li key={ind} title={smarts[smt]}>
                  {smt}
                </li>
              );
            })}
          </ul>
          <textarea
        ref={textAreaEl}
        onKeyDown={HandleTab}
        onChange={(e) => HandleChange(e)}
        className="smartTexter"
        placeholder="Type your message here..."
        value={value}
        rows="10"
      >
        { value }
      </textarea>
        </div>
      )}
      {
        !showToolBar &&   <textarea
        ref={textAreaEl}
        onKeyDown={HandleTab}
        onChange={(e) => HandleChange(e)}
        className="smartTexter"
        placeholder="Type your message here..."
        value={value}
        rows="15"
      >
        { value }
      </textarea>
      }

      {showPreview === true &&
      <pre>{value}</pre>}
    </>
  );
}

export default SmartTexter;
