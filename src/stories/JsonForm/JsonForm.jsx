import React, { useRef, useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import "./JsonForm.css";

/**
 * Custom hook to load external scripts or styles.
 */
const useExternalResource = (id, url, type = "script") => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let element = document.getElementById(id);

    const handleLoad = () => setLoaded(true);
    const handleError = () => console.error(`Failed to load ${type}: ${url}`);

    if (element) {
      if (type === "script" && id === "jsoneditor-script" && window.JSONEditor) {
        setLoaded(true);
        return;
      }
      if (type === "link" && element.sheet) {
        setLoaded(true);
        return;
      }

      element.addEventListener("load", handleLoad);
      element.addEventListener("error", handleError);
      return () => {
        element.removeEventListener("load", handleLoad);
        element.removeEventListener("error", handleError);
      };
    }

    const newElement = document.createElement(type === "script" ? "script" : "link");
    newElement.id = id;
    if (type === "script") {
      newElement.src = url;
      newElement.async = true;
    } else {
      newElement.href = url;
      newElement.rel = "stylesheet";
    }

    newElement.addEventListener("load", handleLoad);
    newElement.addEventListener("error", handleError);

    document.head.appendChild(newElement);

    return () => {
      newElement.removeEventListener("load", handleLoad);
      newElement.removeEventListener("error", handleError);
    };
  }, [id, url, type]);

  return loaded;
};

export default function JsonForm({
  title = "",
  schema,
  data = {},
  onChange,
  enabled = true,
  options = {}, // New options prop
}) {
  const elementRef = useRef(null);
  const editorRef = useRef(null);

  const scriptLoaded = useExternalResource(
    "jsoneditor-script",
    "https://cdn.jsdelivr.net/npm/@json-editor/json-editor@latest/dist/jsoneditor.min.js",
    "script"
  );
  
  useExternalResource(
    "fontawesome5-css",
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css",
    "link"
  );
  useExternalResource(
    "bootstrap4-css",
    "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.2/css/bootstrap.min.css",
    "link"
  );

  const initEditor = useCallback(() => {
    if (!scriptLoaded || !elementRef.current || !window.JSONEditor) return;

    if (editorRef.current) {
      editorRef.current.destroy();
    }

    const finalOptions = {
      iconlib: "fontawesome5",
      object_layout: "normal",
      schema: schema,
      show_errors: "interaction",
      theme: "bootstrap4",
      startval: data,
      ...options, // Overwrite/extend defaultOptions with passed options
    };

    const editor = new window.JSONEditor(elementRef.current, finalOptions);
    editorRef.current = editor;

    editor.on("change", () => {
      const errors = editor.validate();
      if (errors.length === 0 && onChange) {
        onChange(editor.getValue());
      }
    });

    editor.on("ready", () => {
      if (!enabled) {
        editor.disable();
      }
    });
  }, [scriptLoaded, schema, options, enabled, onChange]);

  useEffect(() => {
    initEditor();
    
    return () => {
      if (editorRef.current) {
        editorRef.current.destroy();
        editorRef.current = null;
      }
    };
  }, [initEditor]);

  // Support updating data and enabled state dynamically
  useEffect(() => {
    if (editorRef.current && editorRef.current.ready) {
      const currentVal = editorRef.current.getValue();
      if (JSON.stringify(currentVal) !== JSON.stringify(data)) {
        editorRef.current.setValue(data);
      }
    }
  }, [data]);

  useEffect(() => {
    if (editorRef.current && editorRef.current.ready) {
      if (enabled) {
        editorRef.current.enable();
      } else {
        editorRef.current.disable();
      }
    }
  }, [enabled]);

  return (
    <div className="json-form-container">
      {title && <h2>{title}</h2>}
      <div ref={elementRef} />
    </div>
  );
}

JsonForm.propTypes = {
  title: PropTypes.string,
  schema: PropTypes.object.isRequired,
  data: PropTypes.object,
  onChange: PropTypes.func,
  enabled: PropTypes.bool,
  options: PropTypes.object,
};
