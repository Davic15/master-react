import { useState } from 'react'
import { Article } from './Components/Pages/Article'
import { Home } from './Components/Pages/Home'
import { BlogRoutes } from './Routing/BlogRoutes'


function App() {
  return (
    <div className='layout'>
      <BlogRoutes />
    </div>
  )
}

export default App
