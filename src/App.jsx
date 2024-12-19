import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

function App() {

  const Home = lazy(() => import("./components/home.jsx"));
  const Tasks = lazy(() => import("./components/Tasks.jsx"))
  const Add = lazy(() => import("./components/Addtasks.jsx")) 
  const Update = lazy(() => import("./components/Update.jsx")) 

  return (
    <>
    <Router>
    <Suspense fallback={<>Loading...</>}>
      <Routes>
        <Route path="/" element={<Home />} />
      <Route path="/task" element={<Tasks/>}/>
      <Route path="/add" element={<Add/>}/>
      <Route path="/update" element={<Update/>}/>
      </Routes>
    </Suspense>
  </Router>
    </>
  )
}

export default App
