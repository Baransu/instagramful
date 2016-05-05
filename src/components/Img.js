import React, { PropTypes } from 'react'

import classNames from 'classnames';

// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Motion, spring } from 'react-motion';

const Img = ({ nick, profileImg, link, img, left, top }) => {

  const headerStyle = {
    fontSize: '10px',
    color: 'black',
    textShadow: '-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white'
  }

  const cardStyleDefault = {
    left,
    top: top + 50,
    opacity: 0,
  }

  const cardStyle = {
    left,
    top: spring(top),
    opacity: spring(1),
  }

  return (
    <Motion defaultStyle={cardStyleDefault} style={cardStyle}>
      {(value) => {

        const tempStyle = {
          textAlign: 'center',
          position: 'absolute',
          opacity: value.opacity,
          left: value.left + 'px',
          top: value.top + 'px',
          zIndex: -9999,
        }

        return (
          <div class="" style={tempStyle}>
            <h5 style={headerStyle}>{nick}</h5>
            <img src={img} class="responsive-img image"/>
          </div>
      )}}
    </Motion>
  )
}

//set PropTypes for provider
Img.propTypes = {
  profileImg: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  nick: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
}

export default Img
