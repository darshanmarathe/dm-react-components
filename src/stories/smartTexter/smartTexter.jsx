import { useState, useRef, useEffect } from "react";

import "./smartTexter.css";

function SmartTexter({
  text = "",
  smarts = {},
  showToolBar = false,
  showPreview = false,
  placeholder = "Type your message here...",
}) {
  const [value, setValue] = useState(text);
  const [cursorPos, setCursorPos] = useState(null);
  const textAreaEl = useRef(null);
  const wordStartRef = useRef(0);

  const expandSnippet = (currentText, keyword, start, end) => {
    for (const key of Object.keys(smarts)) {
      if (keyword === key) {
        let snippet = smarts[key];
        if (snippet.startsWith("EE:")) {
          snippet = snippet.replace("EE:", "");
          try {
            snippet = String(eval(snippet));
          } catch {
            snippet = "";
          }
        }
        const cursorIndex = snippet.indexOf("#$");
        const clean = snippet.replace("#$", "");
        setCursorPos(cursorIndex > -1 ? start + cursorIndex : start + clean.length);
        return currentText.substring(0, start) + clean + currentText.substring(end);
      }
    }
    return currentText;
  };

  const handleKeyDown = (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const val = e.target.value;
      const start = wordStartRef.current;
      const end = e.target.selectionEnd;
      const keyword = val.substring(start, end).trim();
      if (keyword) {
        setValue(expandSnippet(val, keyword, start, end));
      }
      return false;
    }
    if (e.key === " " || e.key === "Enter") {
      wordStartRef.current = e.target.selectionStart;
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    if (cursorPos !== null && textAreaEl.current) {
      textAreaEl.current.focus();
      textAreaEl.current.selectionStart = cursorPos;
      textAreaEl.current.selectionEnd = cursorPos;
      setCursorPos(null);
    }
  }, [cursorPos]);

  return (
    <>
      {showToolBar && (
        <div className="toolbar">
          <ul>
            {Object.keys(smarts).map((smt) => (
              <li key={smt} title={smarts[smt]}>
                {smt}
              </li>
            ))}
          </ul>
        </div>
      )}
      <textarea
        ref={textAreaEl}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        className="smartTexter"
        placeholder={placeholder}
        value={value}
        rows={showToolBar ? 10 : 15}
      />
      {showPreview && <pre className="smartTexter-preview">{value}</pre>}
    </>
  );
}

export default SmartTexter;
