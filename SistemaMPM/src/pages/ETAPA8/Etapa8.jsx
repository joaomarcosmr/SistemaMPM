import React from 'react'

const Etapa8 = () => {
  return (
    <div className='containerEtapa'>
        <div className=''>
            <h2>Você consegue poupar <br/> algum dinheiro?</h2>
        </div>
        <div className='containerBox'>
            <div className='squareButton optionHeight'>
                <p>Sim, eu poupo <br/> todos os meses</p>
            </div>
            <div className='squareButton optionHeight'>
                <p>Poupo quase <br/> todos os meses</p>
            </div>
            <div className='squareButton optionHeight'>
                <p>Quase nunca <br/> consigo poupar</p>
            </div>
            <div className='squareButton optionHeight'>
                <p>Não, nunca <br/> sobra nada</p>
            </div>
        </div>
        <div className=''>
            <img src="..\src\img\q8o1.jpg" alt="" />
        </div>
    </div>
  )
}

export default Etapa8