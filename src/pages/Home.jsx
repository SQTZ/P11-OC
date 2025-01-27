import Banner from '../components/Banner'
import Cards from '../components/Cards'
import homeBanner from '../assets/accueil.png'

function Home() {
  return (
    <div className='content'>
      <Banner 
        image={homeBanner} 
        text="Chez vous, partout et ailleurs"
      />
      

      <div className='cards'>
        <Cards />
      </div>

    </div>
  )
}

export default Home