import React, { useRef, useEffect } from "react";
import './JsonForm.css'


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

  
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useScript('jsoneditor' ,'//cdn.jsdelivr.net/npm/@json-editor/json-editor@latest/dist/jsoneditor.min.js')
  
  useCss('fontawesome5','https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css')
  useCss('bootstrap4' , 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.6.2/css/bootstrap.min.css' )

  const validate = function(){
    const errors = jsoneditor.validate();

    return errors.length === 0;
  }
  
  const initJsoneditor = function () {
    // destroy old JSONEditor instance if exists
    if (jsoneditor) {
      jsoneditor.destroy();
    }

    if(window.JSONEditor)
      {
        jsoneditor = new window.JSONEditor(elementRef.current, defaultOptions);
        jsoneditor.on('change' , () => {
          if(validate())
            props.onChange(jsoneditor.getValue());
        })
      }else{
        const inter =  setInterval(() => {
          if(window.JSONEditor){
            jsoneditor = new window.JSONEditor(elementRef.current, defaultOptions);
            clearInterval(inter)
            jsoneditor.on('change' , () => {
              
              if(validate())
                props.onChange(jsoneditor.getValue());
            })
          }
        }, 1000);
      }
        // new instance of JSONEditor

    // listen for changes
  };
  useEffect(() => {
    initJsoneditor();
  }, []);

  return <div className="form_container" ref={elementRef}>JsonForm</div>;
}
