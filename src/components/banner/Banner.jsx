import React from 'react'
import c from './Banner.module.scss'

const Banner = () => {
    return (
        <div className={c.banner}>
            <div className={c.banner__content}>
                <h2 className={c.banner__title}>ELEKTROMOBILLAR MAKONI</h2>
                <p className={c.banner__subtitle}>Yo'l mashaqqatlaridan sizni xalos etuvchi haqiqiy shedevr avtomobilga ega bo'ling.</p>
                <button className={c.banner__btn}>Tanishish</button>
            </div>
        </div>
    )
}

export default Banner