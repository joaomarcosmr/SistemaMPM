import React from 'react'

const Etapa2 = () => {
  return (
    <div className='containerEtapa'>
        <div className=''>
            <h2>Você tem filhos?</h2>
        </div>
        <div className='containerBox'>
            <div className='retangleButton'>
                <p>Sim, tenho 1 filho</p>
            </div>
            <div className='retangleButton'>
                <p>Sim, tenho 2 filhos</p>
            </div>
            <div className='retangleButton'>
                <p>Tenho 3 filhos</p>
            </div>
            <div className='retangleButton'>
                <p>Não tenho filhos</p>
            </div>
        </div>
    </div>
  )
}

export default Etapa2