import React, { Component } from "react";
import PropTypes from "prop-types";

import { Html5Qrcode, Html5QrcodeScanner } from "./qrscan";

export default class QrScanner extends Component {
  static propTypes = {
    onQRDetect: PropTypes.func.isRequired,
    onQRError: PropTypes.func,
  };

  static defaultProps = {
    onQRError: (error) => {},
  };

  onScanSuccess = (decodedText, decodedResult) => {
    console.log(`Code matched = ${decodedText}`, decodedResult);

    console.log(this.props.onQRDetect);
    this.props.onQRDetect(decodedText, decodedResult);
  };

  onScanFailure = (error) => {
    this.props.onQRError(error);
  };

  componentDidMount() {
    let html5QrcodeScanner = new Html5QrcodeScanner(
      "reader",
      { fps: 10, qrbox: { width: 200, height: 200 } },
      /* verbose= */ false
    );
    html5QrcodeScanner.render(this.onScanSuccess, this.onScanFailure);
  }

  render() {
    return <div id="reader" width="600px"></div>;
  }
}
