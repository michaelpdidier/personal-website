import { useState } from 'react'
import './css/App.css'
import './css/Home.css'
import CodeEditor from './pages/CodeEditor'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/CodeEditor' element={<CodeEditor />} />
        </Routes>
      </Router>
      {/* <div>
        <Link to={"./pages/Editor"}>Editor</Link>
      </div> */}
    </div>
  )
}

export default App
