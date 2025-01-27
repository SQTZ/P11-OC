import { Routes, Route } from 'react-router-dom'

// Gestion des pages
import Home from './pages/Home'
import NotFound from './pages/404'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
