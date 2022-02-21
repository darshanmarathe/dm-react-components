import jsPDF from "jspdf";
import html2canvas from "html2canvas";

import React, { useRef, useEffect } from "react";

export default function PdfExport({
  element,
  onExported,
  showPdf,
  orientation = "landscape",
  unit = "px",
  format = "a4",
  height,
  width,
  saveOnExport,
  enabled = false,
}) {
  const divElem = useRef(null);
  const _height = height || "100%";
  const _width = width || "100%";
  useEffect(() => {
    if (enabled) {
      window.html2canvas = html2canvas;

     
      var doc = new jsPDF({
        orientation: orientation,
        unit: unit,
        format: format,
      });

      var content = document.querySelector(element);
      alert(window.outerWidth);
      doc.html(content, {
        html2canvas: {
          // insert html2canvas options here, e.g.
          width: window.outerWidth,
        },
        callback: function (doc) {
          const exported = doc.output("datauristring");
          onExported(exported);
          if (showPdf) {
            var iframe = document.createElement("iframe");
            iframe.setAttribute(
              "style",
              `position:absolute;top:0;right:0;height:${_height}; width:${_width}`
            );
            iframe.src = exported;
            divElem.current.appendChild(iframe);
          }
          if (saveOnExport) {
            doc.save();
          }
        },
        compress: true,
      });
    }
  }, [enabled]);
  return <div ref={divElem}></div>;
}
