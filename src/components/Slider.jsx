import { useState } from 'react'
import PropTypes from 'prop-types'
import leftArrow from '../assets/arrow_left.png'
import rightArrow from '../assets/arrow_right.png'

function Slider({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === pictures.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <div className="slider">
      <img 
        src={pictures[currentIndex]} 
        alt={`Slide ${currentIndex + 1}`} 
        className="slider__image"
      />
      
      {pictures.length > 1 && (
        <>
          <button onClick={goToPrevious} className="slider__arrow slider__arrow--left">
            <img src={leftArrow} alt="Previous" />
          </button>
          <button onClick={goToNext} className="slider__arrow slider__arrow--right">
            <img src={rightArrow} alt="Next" />
          </button>
          <div className="slider__counter">
            {currentIndex + 1}/{pictures.length}
          </div>
        </>
      )}
    </div>
  )
}

Slider.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Slider 