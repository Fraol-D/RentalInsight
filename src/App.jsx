import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add routes for /rooms and /contact when you create those pages */}
      </Routes>
    </Router>
  )
}

export default App
