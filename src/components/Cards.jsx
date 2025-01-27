import { Link } from 'react-router-dom'
import data from '../assets/data.json'

function Cards() {
  return (
    <div className='cards-content'>
      {data.map(location => (
        <Link 
          to={`/location/${location.id}`} 
          key={location.id} 
          className="card"
        >
          <img src={location.cover} alt={location.title} />
          <h3>{location.title}</h3>
        </Link>
      ))}
    </div>
  )
}

export default Cards