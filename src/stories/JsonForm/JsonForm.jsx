import React, { useRef, useEffect } from "react";




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
