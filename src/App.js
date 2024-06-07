import React from 'react' // Used rafce, React Arrow Function Export Component
import './App.css'

import { Brand, CTA, Navbar } from './components'
import { Footer, Features, Blog, Possibility, WhatGPT3, Header } from './containers'

const App = () => {
  return (
    <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>

        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />

    </div>
  )
}

export default App // Export to be able to import the App component in the index.js