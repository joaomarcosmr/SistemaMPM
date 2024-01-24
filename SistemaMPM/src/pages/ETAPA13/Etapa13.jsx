import React from 'react'

const Etapa13 = () => {
  return (
    <div className='containerEtapa'>
        <div className=''>
            <h2 className='text-center'>Você sabe o que são <br/> fundos imobiliários?</h2>
            <p className='text-center'>com eles é possível ser dono de <br/> imóveis por menos de 100 reais.</p>
        </div>
        <div className='d-flex'>
            <div className=''>
                <img src="..\src\img\q13o1.jpg" alt="" />
            </div>
            <div className='containerBox'>
                <div className='retangleButton d-flex optionHeight140'>
                    <p>Sim, conheço muito bem</p>
                </div>
                <div className='retangleButton d-flex optionHeight140'>
                    <p>Sei, mas só ouvi falar</p>
                </div>
                <div className='retangleButton d-flex optionHeight140'>
                    <p>Nunca ouvi falar disso</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Etapa13