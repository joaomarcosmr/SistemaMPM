import React from 'react'

const Etapa6 = () => {
  return (
    <div className='containerEtapa'>
        <div className=''>
            <h2 className='text-center'>Você possui alguma <br/> fonte de renda extra?</h2>
            <p className='text-center'>Ou possui apenas a <br/> sua renda principal?</p>
        </div>
        <div className='d-flex'>
            <div className=''>
                <img src="..\src\img\q6o1.jpg" alt="" />
            </div>
            <div className='containerBox'>
                <div className='retangleButton d-flex optionHeight140'>
                    <p>Sim, meu trabalho me recompensa muito bem</p>
                </div>
                <div className='retangleButton d-flex optionHeight140'>
                    <p>Sou bem recompensado mas poderia ser melhor</p>
                </div>
                <div className='retangleButton d-flex optionHeight140'>
                    <p>Não, eu me esforço muito e ganho pouco</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Etapa6