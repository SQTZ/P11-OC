import { useParams } from 'react-router-dom'
import data from '../assets/data.json'

function Location() {
  const { id } = useParams()
  const location = data.find(item => item.id === id)

  if (!location) {
    return <Navigate to="/404" />
  }

  return (
    <div className="content">
      <h1>{location.title}</h1>
      {/* Autres détails de la location */}
    </div>
  )
}

export default Location 