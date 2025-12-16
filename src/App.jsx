import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Favorites from './pages/Favorites.jsx'
import Navbar from './components/Navbar.jsx'
import './css/App.css'

function App() {

  return (
    <>
        <div>
            <Navbar />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/favorites" element={<Favorites />} />
                </Routes>
            </main>
        </div>
    </>
  )
}

export default App
