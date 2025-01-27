import { useParams, Navigate } from 'react-router-dom'
import data from '../assets/data.json'
import Slider from '../components/Slider'
import Collapse from '../components/Collapse'
import Rating from '../components/Rating'

function Location() {
    const { id } = useParams()
    const location = data.find(item => item.id === id)

    if (!location) {
        return <Navigate to="/404" />
    }

    return (
        <div className="content location-content">
            <Slider pictures={location.pictures} />

            <div className="bloc">
                <div className="container">
                    <div className="left">
                        <h1>{location.title}</h1>
                        <p>{location.location}</p>
                        <div className="tags">
                            {location.tags.map((tag, index) => (
                                <span key={index}>{tag}</span>
                            ))}
                        </div>
                    </div>

                    <div className="right">
                        <div className="host">
                            <p>{location.host.name}</p>
                            <img src={location.host.picture} alt={location.host.name} />
                        </div>

                        <Rating score={location.rating} />
                    </div>
                </div>

                <div className="menus">
                    <div className="container">
                        <div className="left">
                            <Collapse 
                                title="Description" 
                                content={location.description} 
                            />
                        </div>
                        <div className="right">
                            <Collapse 
                                title="Équipements" 
                                content={location.equipments} 
                            />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Location 