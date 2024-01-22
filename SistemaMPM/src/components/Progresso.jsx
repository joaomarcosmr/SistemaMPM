import React from 'react'
import style from './Progresso.module.css'

const Progresso = () => {
  return (
    <div className={style.bar_main}>
        <div className={style.barprogress}>
          <div className={style.barsuccess}></div>
        </div>
    </div>
  )
}

export default Progresso