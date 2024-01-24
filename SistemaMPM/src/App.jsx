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
import Etapa9 from './pages/ETAPA9/Etapa9'
import Etapa10 from './pages/ETAPA10/Etapa10'
import Etapa11 from './pages/ETAPA11/Etapa11'
import Etapa12 from './pages/ETAPA12/Etapa12'
import Etapa13 from './pages/ETAPA13/Etapa13'
import Analise1 from './pages/ETAPA14_ANALISE/Analise1'

function App() {

  return (
    <>
      <Logo/>
      <Progresso/>
      {/* <Etapa1/> */}
      <Analise1/>
    </>
  )
}

export default App
