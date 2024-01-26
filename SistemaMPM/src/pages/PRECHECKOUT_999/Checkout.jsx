import React from 'react'

const Checkout = () => {
  return (
    <div className='containerEtapa'>
        <div className='text-center'>
            <h2>Meu Primeiro Milhão</h2>
        </div>
        <div className="resultados">
            <div className='resultados-titulo'>
                <div className='antes'>
                    <h3 className='text-center'>ANTES</h3>
                </div>
                <div className='depois'>
                    <h3 className='text-center'>DEPOIS</h3>
                </div>
            </div>
            <div className='resultados-imagem'>
                <div className='antes'>
                    <img src="..\src\img\checkout_age4.png" alt="" />
                </div>
                <div className='depois'>
                    <img src="..\src\img\after_checkout_age4.png" alt="" />
                </div>
            </div>
            <div className='resultados-titulo'>
                <div className='antes text-center'>
                    <span>Suas habilidades de investimento</span>
                    <div className='progresso-inicio'></div>
                    <span className='danger'>Baixo nível de conhecimento</span>
                </div>
                <div className='depois text-center'>
                    <span>Suas habilidades <br/> depois de 3 meses</span>
                    <div className='progresso-final'></div>
                    <span className='success'>Pronto pra ter muito sucesso</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Checkout