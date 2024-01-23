import { useState } from 'react'
import './App.css'

 // components
import Logo from './components/logo'
import Progresso from './components/Progresso'

// pages
import Etapa1 from './pages/ETAPA1/etapa1'
import Etapa2 from './pages/ETAPA2/Etapa2'
import Etapa3 from './pages/ETAPA3/Etapa3'
import Etapa4 from './pages/ETAPA4/Etapa4'

function App() {

  return (
    <>
      <Logo/>
      <Progresso/>
      {/* <Etapa1/> */}
      <Etapa4/>
    </>
  )
}

export default App
