import PropTypes from 'prop-types'

const ScanBar = (props) => {
    const {message ,  timeout} = props;
    return (
        <div id="snackbar">{message}</div>

    )
}

ScanBar.propTypes = {
    message: PropTypes.string.isRequired,
    timeout: PropTypes.number.isRequired
}

export default ScanBar

