import React, { useRef, useEffect } from "react";

import "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css";
import "https://use.fontawesome.com/releases/v5.6.1/css/all.css";
import JsonEditor from "https://cdn.jsdelivr.net/npm/@json-editor/json-editor@latest/dist/jsoneditor.min.js";


export default function JsonForm(props) {
  let jsoneditor = undefined;
  const elementRef = useRef();

  const defaultOptions = {
    iconlib: "fontawesome5",
    object_layout: "normal",
    schema: props.schema,
    show_errors: "interaction",
    theme: "bootstrap4",
    startval: props.data || {},
  };
  const initJsoneditor = function () {
    // destroy old JSONEditor instance if exists
    if (jsoneditor) {
      jsoneditor.destroy();
    }

    // new instance of JSONEditor
    jsoneditor = new window.JSONEditor(elementRef.current, defaultOptions);

    // listen for changes
  };
  useEffect(() => {
    initJsoneditor();
  }, []);

  return <div ref={elementRef}>JsonForm</div>;
}
