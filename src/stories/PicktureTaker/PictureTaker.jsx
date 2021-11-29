import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class PictureTaker extends Component {

    constructor(props) {
        super(props)

        this.videoRef = React.createRef();
        this.canvasRef = React.createRef();
        this.imgRef = React.createRef();
        this.state = {
            currentImage : null
        }
    }

    static propTypes = {
        onCaptured: PropTypes.func.isRequired,
        title: PropTypes.string,
    }

    static defaultProps = {
        title: "Smile :-)"
    }


    async componentDidMount() {
        const video = this.videoRef.current;

        // Get access to the camera!
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            // Not adding `{ audio: true }` since we only want video now
            navigator.mediaDevices.getUserMedia({ video: true }).then(function (stream) {
                video.srcObject = stream;
                video.play();
            });
        }
    }


    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <video ref={this.videoRef} className="pct-video" width="300" height="250" autoplay></video>
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                {this.state.currentImage && <img ref={this.imgRef} src={this.state.currentImage} alt="Captured picture " className="pct-img" width="280" height="230" />}
                <canvas ref={this.canvasRef} style={{ display: 'none' }} width="280" height="230" className="pct-canvas"></canvas> <br />
                <button id="snap" onClick={(e) => {
                    // Elements for taking the snapshot
                    const canvas = this.canvasRef.current;
                    const context = canvas.getContext('2d');
                    const video = this.videoRef.current;
                    const img = this.imgRef.current;
                    // Trigger photo take
                    context.drawImage(video, 0, 0, 300, 250);
                    //canvas.toDataURL();
                    this.setState({ currentImage: canvas.toDataURL('image/png') })

                }}>Snap</button>
                <button id="Ok" onClick={(e) => {
                    // Elements for taking the snapshot
                    const img = this.imgRef.current;
                    if(this.props.onCaptured != null) 
                        this.props.onCaptured(img.src)
                }}
                >Ok!!</button>

            </div>
        )
    }
}
