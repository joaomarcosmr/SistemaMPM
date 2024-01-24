import React from 'react'

const Etapa5 = () => {
  return (
    <div className='containerEtapa'>
        <div className=''>
            <h2 className='text-center'>Você se sente satisfetio <br/> com a sua renda atual?</h2>
            <p className='text-center'>O seu trabalho recompensa <br/> bem o seu esforço?</p>
        </div>
        <div className='containerBox'>
            <div className='retangleButton d-flex'>
                <img src="..\src\img\q5o1.png" className='emojiside' />
                <p>Sim, meu trabalho me recompensa muito bem</p>
            </div>
            <div className='retangleButton d-flex'>
                <img src="..\src\img\q5o2.png" className='emojiside' />
                <p>Sou bem recompensado mas poderia ser melhor</p>
            </div>
            <div className='retangleButton d-flex'>
                <img src="..\src\img\q5o3.png" className='emojiside' />
                <p>Não, eu me esforço muito e ganho pouco</p>
            </div>
        </div>
    </div>
  )
}

export default Etapa5