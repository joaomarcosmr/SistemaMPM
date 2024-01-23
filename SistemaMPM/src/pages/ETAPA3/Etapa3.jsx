import React from 'react'

const Etapa3 = () => {
  return (
    <div className='containerEtapa'>
        <div className=''>
            <h2>Você tem filhos?</h2>
        </div>
        <div className='containerBox'>
            <div className='squareButton optionHeight'>
                <p>Ganho R$ 2 mil <br/> ou menos</p>
            </div>
            <div className='squareButton optionHeight'>
                <p>Ganho mais de <br/> R$ 2 mil</p>
            </div>
            <div className='squareButton optionHeight'>
                <p>Ganho mais de <br/> R$ 5 mil</p>
            </div>
            <div className='squareButton optionHeight'>
                <p>Ganho mais de <br/> R$ 10 mil</p>
            </div>
        </div>
        <div className=''>
            <img src="..\src\img\q3o1.jpg" alt="" />
        </div>
    </div>
  )
}

export default Etapa3