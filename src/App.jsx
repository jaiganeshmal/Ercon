import React from 'react'
import Navbar from './Componants/Navbar'
import Routers from './Routers/Routers'
import Footer from './Componants/Footer'
import ScrollToTop from './Componants/ScrollToTop'

const App = () => {
  return (
    <div className='overflow-hidden'>
      <Navbar />
      <Routers />
      <Footer />

      <ScrollToTop />
    </div>
  )
}

export default App