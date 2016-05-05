import React, { PropTypes } from 'react';
import Img from './Img';
import Loader from 'react-loader'

const ImgsList = ({ images }) => {

  const isLoaded = images.length > 0;

  return (
    <div>
      <Loader loaded={isLoaded}></Loader>
      {images.map((image, index) =>
        <Img
          key={index}
          {...image}
          />
      )}
    </div>
  )
}

//set PropTypes for Provider
ImgsList.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    profileImg: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    nick: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired).isRequired,
}

export default ImgsList;
