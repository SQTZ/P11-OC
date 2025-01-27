import PropTypes from 'prop-types'

function Banner({ image, text }) {
  return (
    <div className="banner">
      <img src={image} alt="Bannière" className="banner__img" />
      {text && <h2 className="banner__text">{text}</h2>}
    </div>
  )
}

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string
}

export default Banner
