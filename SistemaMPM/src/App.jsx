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
import Etapa5 from './pages/ETAPA5/Etapa5'
import Etapa6 from './pages/ETAPA6/Etapa6'
import Etapa7 from './pages/ETAPA7/Etapa7'
import Etapa8 from './pages/ETAPA8/Etapa8'

function App() {

  return (
    <>
      <Logo/>
      <Progresso/>
      {/* <Etapa1/> */}
      <Etapa8/>
    </>
  )
}

export default App
