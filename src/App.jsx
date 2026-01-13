import { Routes, Route } from 'react-router-dom'
import HomeIntro from './Pages/HomeIntro'
import Home from './Pages/Home'
import About from './Pages/About'
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeIntro />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/work" element={<About />} />
      <Route path="/portfolio" element={<About />} />
    </Routes>
  )
}

export default App

