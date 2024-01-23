import React from 'react'

const Etapa4 = () => {
  return (
    <div className='containerEtapa'>
        <div className=''>
            <h2 className='text-center'>Qual a sua principal fonte <br/> de renda atualmente?</h2>
        </div>
        <div className='containerBox'>
            <div className='squareButton'>
                <img src="..\src\img\p4o1.png" className='emoji' />
                <p className='text-center'>Trabalho como funcionário</p>
            </div>
            <div className='squareButton'>
                <img src="..\src\img\p4o2.png" className='emoji' />
                <p className='text-center'>Empreendedor ou autônomo</p>
            </div>
            <div className='squareButton'>
                <img src="..\src\img\p4o3 (1).png" className='emoji' />
                <p className='text-center'>Investimento <br/> renda passiva</p>
            </div>
            <div className='squareButton'>
                <img src="..\src\img\p4o4.png" className='emoji' />
                <p className='text-center'>Outras fontes de renda</p>
            </div>
        </div>
    </div>
  )
}

export default Etapa4