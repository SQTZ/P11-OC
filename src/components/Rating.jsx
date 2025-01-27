import PropTypes from 'prop-types'
import starFull from '../assets/star_full.png'
import starEmpty from '../assets/star_empty.png'

function Rating({ score }) {
  const stars = [1, 2, 3, 4, 5]

  return (
    <div className="rating">
      {stars.map((level) => (
        <img
          key={level}
          src={level <= score ? starFull : starEmpty}
          alt={level <= score ? 'étoile pleine' : 'étoile vide'}
        />
      ))}
    </div>
  )
}

Rating.propTypes = {
  score: PropTypes.string.isRequired
}

export default Rating 