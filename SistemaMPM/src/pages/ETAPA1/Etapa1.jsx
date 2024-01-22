import React from 'react'

const Etapa1 = () => {
  return (
    <div className='containerEtapa'>
        <div className=''>
            <h2>Qual é a sua idade?</h2>
            <p>Toque no botão para selecionar</p>
        </div>
        <div className='containerBox'>
            <div className='squareButton'>
                <h3>18 a 24</h3>
                <img src="..\src\img\age1.webp" alt="" />
            </div>
            <div className='squareButton'>
                <h3>25 a 34</h3>
                <img src="..\src\img\age2.webp" alt="" />
            </div>
            <div className='squareButton'>
                <h3>35 a 44</h3>
                <img src="..\src\img\age3.webp" alt="" />
            </div>
            <div className='squareButton'>
                <h3>55 ou mais</h3>
                <img src="..\src\img\age4.webp" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Etapa1