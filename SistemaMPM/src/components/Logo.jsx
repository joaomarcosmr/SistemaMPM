import React from 'react'
import styles from '../components/Logo.module.css'

function Logo() {
  return (
    <div className={styles.logo_main}>
        <img src="..\src\img\logo.png" alt="Logo Status Capital" />
    </div>
  )
}

export default Logo