import React, { PropTypes } from 'react'

// channel header
const Header = ({ channelName }) => {
  let headerStyle = {
    textAlign: 'center'
  }
  return (
    <h5 style={headerStyle}></h5>
  )
}

// Header.propTypes = {
//   channelName: PropTypes.string.isRequired,
// }

export default Header
