import React from 'react'

const Etapa10 = () => {
  return (
    <div className='containerEtapa'>
        <div className=''>
            <h2 className='text-center'>Você costuma gastar demais?</h2>
            <p className='text-center'>Com qual frequência isso acontece?</p>
        </div>
        <div className='containerBox'>
            <div className='squareButton'>
                <img src="..\src\img\q10o1.png" className='emoji' />
                <p className='text-center'>Eu sempre gasto tudo <br/> que eu ganho</p>
            </div>
            <div className='squareButton'>
                <img src="..\src\img\q10o2.png" className='emoji' />
                <p className='text-center'>Muitas vezes compro <br/> coisas inúteis</p>
            </div>
            <div className='squareButton'>
                <img src="..\src\img\q10o3.png" className='emoji' />
                <p className='text-center'>Raramente gasto com <br/> coisas inúteis</p>
            </div>
            <div className='squareButton'>
                <img src="..\src\img\q10o4.png" className='emoji' />
                <p className='text-center'>Nada, eu controlo cada centavo</p>
            </div>
        </div>
    </div>
  )
}

export default Etapa10