import React from 'react'

const Etapa9 = () => {
  return (
    <div className='containerEtapa'>
        <div className=''>
            <h2 className='text-center'>Você possuí alguma dívida?</h2>
        </div>
        <div className='containerBox'>
            <div className='retangleButton d-flex content-spaced'>
                <p>Financiamento de casa</p>
                <img src="..\src\img\q9o1.png" className='emojiside' />
            </div>
            <div className='retangleButton d-flex content-spaced'>
                <p>Financiamneto de carro</p>
                <img src="..\src\img\q9o2.png" className='emojiside' />
            </div>
            <div className='retangleButton d-flex content-spaced'>
                <p>Empréstimo da faculdade</p>
                <img src="..\src\img\q9o3.png" className='emojiside' />
            </div>
            <div className='retangleButton d-flex content-spaced'>
                <p>Dívida de cartão de crédito</p>
                <img src="..\src\img\q9o4.png" className='emojiside' />
            </div>
            <div className='retangleButton d-flex content-spaced'>
                <p>Não tenho nenhuma dívida</p>
                <img src="..\src\img\q9o5.png" className='emojiside' />
            </div>
        </div>
    </div>
  )
}

export default Etapa9