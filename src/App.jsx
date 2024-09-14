import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'


const App = () => {
    const [sidebar, setSidebar] = useState(true);

  return (
    <>
   <Navbar setSidebar={setSidebar} />
   <Routes>
    <Route path='/' element={<Home sidebar={sidebar}/> } />
    <Route path='/video/:categoryId/:videoId' element={<Video/>} />
   </Routes>
   </>
  )
}

export default App
