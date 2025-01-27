import { useState } from 'react'
import PropTypes from 'prop-types'
import arrow from '../assets/arrow_menu.png'

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="collapse">
      <button className="collapse__header" onClick={() => setIsOpen(!isOpen)}>
        <h2>{title}</h2>
        <img 
          src={arrow} 
          alt="Toggle" 
          className={`collapse__arrow ${isOpen ? 'collapse__arrow--open' : ''}`}
        />
      </button>
      
      <div className={`collapse__content ${isOpen ? 'collapse__content--open' : ''}`}>
        {Array.isArray(content) ? (
          <ul>
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  )
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]).isRequired
}

export default Collapse 