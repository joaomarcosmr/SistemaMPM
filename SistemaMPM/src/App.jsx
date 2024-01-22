import { useState } from 'react'
import './App.css'

 // components
import Logo from './components/logo'
import Progresso from './components/Progresso'

// pages
import Etapa1 from './pages/ETAPA1/etapa1'

function App() {

  return (
    <>
      <Logo/>
      <Progresso/>
      <Etapa1/>
    </>
  )
}

export default App
