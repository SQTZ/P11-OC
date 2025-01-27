import { Routes, Route } from 'react-router-dom'

// Gestion de la Navbar et du Footer
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Gestion des pages
import Home from './pages/Home'
import Location from './pages/Location'
import NotFound from './pages/404'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location/:id" element={<Location />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
