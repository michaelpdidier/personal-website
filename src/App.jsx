import { useState } from 'react'
import './css/App.css'
import './css/Home.css'
import CodeEditor from './pages/CodeEditor'
import DragAndDrop from './pages/DragAndDrop'
import Docs from './pages/Docs'
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
          <Route path='/DragAndDrop' element={<DragAndDrop />} />
          <Route path='/Docs' element={<Docs />} />
        </Routes>
      </Router>
      {/* <div>
        <Link to={"./pages/Editor"}>Editor</Link>
      </div> */}
    </div>
  )
}

export default App
