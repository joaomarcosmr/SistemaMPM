import React from 'react'

import { Line } from 'react-chartjs-2';
import 'chart.js/auto';


const Resultado1 = () => {

    const data = {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril'],
        datasets: [
          {
            label: 'Seu Progresso',
            data: [5, 15, 30, 50],
            borderWidth: 8,
            pointBackgroundColor: 'rgba(211, 211, 211, 1.0)',
            pointBorderColor: 'rgba(211, 211, 211, 1.0)',
            fill: true,
            tension: 0.2,
            backgroundColor: (context) => {
                const chart = context.chart;
                const gradient = chart.ctx.createLinearGradient(0, 0, chart.width, 0);
                gradient.addColorStop(0, 'rgba(255,0,0,0.5)');
                gradient.addColorStop(0.5, 'rgba(255,165,0,0.5)');
                gradient.addColorStop(1, 'rgba(0,128,0,0.5)');
                return gradient;
              },
            borderColor: (context) => {
              const chart = context.chart;
              const gradient = chart.ctx.createLinearGradient(0, 0, chart.width, 0);
              gradient.addColorStop(0, 'rgba(255,0,0,1)');
              gradient.addColorStop(0.5, 'rgba(255,165,0,1)');
              gradient.addColorStop(1, 'rgba(0,128,0,1)');
              return gradient;
            },
          },
        ],
      };
      
      const options = {
        scales: {
          x: {
            beginAtZero: true,
          },
          y: {
            display: false,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            enabled: false,
          },
        },
      };
      
      
      
  return (
    <div className='containerEtapa'>
        <div className='text-center'>
            <h2>Seu plano plano exclusivo.</h2>
            <p>Baseado nas suas necessidades, montamos <br/> um plano exclusivo para você.</p>
            <h3>Você se tornará um investidor <br/> profissional até março de 2024.</h3>
        </div>
        <div className='grafico'>
            <Line data={data} options={options} className='left'/>
            <span className='texto-grafico0 text-center'>Você está <br/> aqui!</span>
            <span className='texto-grafico1 text-center'>Fase de <br/> Estudos</span>
            <span className='texto-grafico2 text-center'>Primeiros <br/> resultados</span>
            <span className='texto-grafico3 text-center'>Resultados Expressivos</span>
        </div>
        <div>
            <div className='title'>
                <h3>(Emoji fogo) Seu plano exclusivo está pronto!</h3>
                <p>Análisamos todas suas necessidades e criamos um plano personalizado para você. Nossa previsão é que você já terá resultados em março de 2024.</p>
            </div>
            <div>
                <button>Continuar</button>
            </div>
        </div>
    </div>
  )
}

export default Resultado1