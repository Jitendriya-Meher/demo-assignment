import React from 'react'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Priority from './pages/Priority/Priority'
import Demo from './pages/Demo/Demo'

const App = () => {
  return (
    <div>

      <Routes>
        <Route
        path='/'
        element={<Home></Home>}
        ></Route>
        <Route
        path="/pr"
        element={<Priority></Priority>}
        ></Route>


      <Route
        path="/dm"
        element={<Demo></Demo>}
        ></Route>

      </Routes>

    </div>
  )
}

export default App