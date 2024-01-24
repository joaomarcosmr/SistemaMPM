import React from 'react'

const Etapa12 = () => {
  return (
    <div className='containerEtapa'>
        <div className='text-center'>
            <h2 className='text-center'>O quanto você sabe <br/> sobre investimentos?</h2>
            <p>É muito importante para montar <br/> o seu plano personalizado</p>
        </div>
        <div className='containerBox'>
            <div className='retangleButton d-flex'>
                <img src="..\src\img\q12o1.png" className='emojiside' />
                <p>Sou especialista nisso</p>
            </div>
            <div className='retangleButton d-flex'>
                <img src="..\src\img\q12o2.png" className='emojiside' />
                <p>Conheço um pouco</p>
            </div>
            <div className='retangleButton d-flex'>
                <img src="..\src\img\q12o3.png" className='emojiside' />
                <p>Não conheço nada</p>
            </div>
        </div>
    </div>
  )
}

export default Etapa12